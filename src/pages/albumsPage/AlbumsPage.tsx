import React, { useState, useEffect, ChangeEvent } from 'react';
import IAlbums from '../../models/albums';
import { toast } from 'react-toastify';
import {
  Section,
  InputComponent,
  ButtonContent,
  ButtonContainer,
  TodosContainer,
} from './style';
import { getAlbums, addAlbums, updateAlbums, deleteAlbums  } from '../../services/albums';


import getErrorMessage from '../../helpers/errorMessages';
import AlbumCard from '../../components/AlbumsCard';
import UsersInterface from '../../models/users';
import LoadingBg from '../../components/Loading';

const Albums: React.FC = () => {
  const [albums, setAlbums] = useState<IAlbums[]>([]);
  const [album, setAlbum] = useState<string>('');
  const [id, setId] = useState<number>();
  const [edit, setEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UsersInterface>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!album) {
      toast.error('please enter something');
      return;
    }
    if (albums?.some(({ title }) => title === album)) {
      toast.error(`album: ${album} already exists`);
      return;
    }

    const verifyAlbum = albums?.map((item) => item.id);
    const biggestId = Math.max(...verifyAlbum);

    const newId = biggestId + 1;
    const result = {
      userId: selectedUser?.id,
      id: newId,
      title: album,
    };

    // requisição de tipo album sendo realizada para inserir uma tarefa a lista.
    try {
      const addNewAlbum = await addAlbums(result);
      console.log('addNewAlbum', addNewAlbum);
    } catch (err) {
      console.log(err);
    }

    const finalResult = [...albums, result];
    setAlbums(finalResult);
    setAlbum('');
  };

  const updateTask = async (e: React.FormEvent) => {
    e.preventDefault();

    const verifyAlbum = albums?.findIndex((teste) => teste.id === id);
    if (verifyAlbum >= 0) {
      const result = {
        title: album,
      };

      // requisição de tipo put sendo realizada para alterar uma tarefa da lista.
      try {
        const updateAlbum = id && (await updateAlbums(id, result));
        console.log('updateAlbum', updateAlbum);
      } catch (err) {
        console.log(err);
      }

      albums[verifyAlbum].title = album;
      setAlbums((albums) => [...albums]);
      setAlbum('');
    }
    setEdit(false);
  };

  const handleChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    tudoid?: number
  ) => {
    tudoid
      ? albums?.find(
          (e) => e.id === tudoid && (setAlbum(e.title), setId(tudoid))
        )
      : setAlbum(target.value);
  };

  const handleDelete = async (e: React.FormEvent, postId: number) => {
    // requisição de tipo delete sendo realizada para remover uma tarefa da lista.
    e.stopPropagation();
    try {
      await deleteAlbums(postId);
    } catch (err) {
      console.log(err);
    }

    setAlbums(albums?.filter(({ id }) => id !== postId));
  };

  const handleEdit = async (e: any, id: number) => {
    e.preventDefault();
    handleChange(e, id);
    setEdit(true);
  };

  useEffect(() => {
    const user = localStorage.getItem('all-in-one-user');
    if (user) {
      const getTodosContent = async () => {
        try {
          setSelectedUser(JSON.parse(user));
          const todosData = await getAlbums(selectedUser?.id);
          setAlbums(todosData);
          setLoading(true);
        } catch (err) {
          const errorMessage = getErrorMessage(err);
          toast.error(errorMessage);
          setLoading(false);
        }
      };
      getTodosContent();
    }
  }, [selectedUser?.id]);

  return (
    <Section>
      {loading ? (
        <>
          <div>
            <form onSubmit={edit === false ? handleSubmit : updateTask}>
              <InputComponent
                type="text"
                placeholder="New album"
                value={album}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              />
              <ButtonContainer>
                <ButtonContent
                  color="primary"
                  size="large"
                  variant="outlined"
                  type="submit"
                >
                  {edit ? 'Edit album' : 'Add new album'}
                </ButtonContent>
              </ButtonContainer>
            </form>
          </div>
          <TodosContainer>
            {albums &&
              albums.map((albums) => (
                <AlbumCard
                  albums={albums}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              ))}
          </TodosContainer>
        </>
      ) : (
        <LoadingBg />
      )}
    </Section>
  );
};

export default Albums;
