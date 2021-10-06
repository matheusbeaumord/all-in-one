import React, { useState, useEffect, ChangeEvent } from 'react';
import IPosts from '../../models/posts';
import { toast } from 'react-toastify';
import {
  Section,
  Title,
  InputComponent,
  ButtonContent,
  ButtonContainer,
  TodosContainer,
  TextFilef,
} from './style';
import {
  getPosts,
  addPost,
  updatePost,
  deletePost,
} from '../../services/posts';

import getErrorMessage from '../../helpers/errorMessages';
import PostCard from '../../components/PostCard';
import UsersInterface from '../../models/users';
import LoadingBg from '../../components/Loading';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [post, setPost] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [id, setId] = useState<number>();
  const [edit, setEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UsersInterface>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!post) {
      toast.error('please enter something');
      return;
    }
    if (posts?.some(({ title }) => title === post)) {
      toast.error(`Post: ${post} already exists`);
      return;
    }

    const verifyPost = posts?.map((item) => item.id);
    const biggestId = Math.max(...verifyPost);

    const newId = biggestId + 1;
    const result = {
      userId: selectedUser?.id,
      id: newId,
      title: post,
      body: description,
    };

    // requisição de tipo post sendo realizada para inserir uma tarefa a lista.
    try {
      const finalResult = [...posts, result];
      setPosts(finalResult);
      setPost('');
      setDescription('');
      const addNewPost = await addPost(result);
      console.log('addNewPost', addNewPost);
    } catch (err) {
      console.log(err);
    }
  };

  const updateTask = async (e: React.FormEvent) => {
    e.preventDefault();

    const verifyPost = posts?.findIndex((teste) => teste.id === id);
    if (verifyPost >= 0) {
      const result = {
        title: post,
        body: description,
      };

      // requisição de tipo put sendo realizada para alterar uma tarefa da lista.
      try {
        posts[verifyPost].title = post;
        posts[verifyPost].body = description;

        setPosts((posts) => [...posts]);
        setPost('');
        setDescription('');
        const updatePosts = id && (await updatePost(id, result));
        console.log('updatePosts', updatePosts);
      } catch (err) {
        console.log(err);
      }
    }
    setEdit(false);
  };

  const handleChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    tudoid?: number
  ) => {
    tudoid
      ? posts?.find((e) => e.id === tudoid && (setPost(e.title), setId(tudoid)))
      : setPost(target.value);
  };

  const handleChangeDescription = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    tudoid?: number
  ) => {
    tudoid
      ? posts?.find(
          (e) => e.id === tudoid && (setDescription(e.body), setId(tudoid))
        )
      : setDescription(target.value);
  };

  const handleDelete = async (e: React.FormEvent, postId: number) => {
    // requisição de tipo delete sendo realizada para remover uma tarefa da lista.
    e.stopPropagation();
    try {
      setPosts(posts?.filter(({ id }) => id !== postId));
      await deletePost(postId);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (e: any, id: number) => {
    e.preventDefault();
    handleChange(e, id);
    handleChangeDescription(e, id);
    setEdit(true);
  };

  useEffect(() => {
    const user = localStorage.getItem('all-in-one-user');
    if (user) {
      const getTodosContent = async () => {
        try {
          setSelectedUser(JSON.parse(user));
          const todosData = await getPosts(selectedUser?.id).then((todos) => {
            setPosts(todos);
            setLoading(true);
          });
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
          {/* <Title>
            <strong>posts</strong>
          </Title> */}
          <div>
            <form onSubmit={edit === false ? handleSubmit : updateTask}>
              <div>
                <InputComponent
                  type="text"
                  placeholder="Title"
                  value={post}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                />
              </div>
              <div>
                <TextFilef
                  multiline
                  rows={4}
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChangeDescription(e)
                  }
                />
              </div>

              <ButtonContainer>
                <ButtonContent
                  color="primary"
                  size="large"
                  variant="outlined"
                  type="submit"
                >
                  {edit ? 'Edit post' : 'Add new post'}
                </ButtonContent>
              </ButtonContainer>
            </form>
          </div>
          <TodosContainer>
            {posts &&
              posts.map((posts) => (
                <PostCard
                  posts={posts}
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

export default Posts;
