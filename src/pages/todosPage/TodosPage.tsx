import React, { useState, useEffect, ChangeEvent } from 'react';
import ITodos from '../../models/todos';
import { toast } from 'react-toastify';
import {
  Section,
  Title,
  InputComponent,
  ButtonContent,
  ButtonContainer,
  TodosContainer,
} from './style';
import { getTodo, addTodo, updateTodo, deleteTodo } from '../../services/todos';
import getErrorMessage from '../../helpers/errorMessages';
import TodoItem from '../../components/TodosCard';
import UsersInterface from '../../models/users';
import LoadingBg from '../../components/Loading';

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [todo, setTodo] = useState<string>('');
  const [todoId, setTodoId] = useState<number>();
  const [edit, setEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UsersInterface>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!todo) {
      toast.error('please enter something');
      return;
    }
    if (todos?.some(({ title }) => title === todo)) {
      toast.error(`Task: ${todo} already exists`);
      return;
    }

    const verifyTodo = todos?.map((item) => item.id);
    const biggestId = Math.max(...verifyTodo);

    const newId = biggestId + 1;
    const result = {
      userId: selectedUser?.id,
      id: newId,
      title: todo,
      completed: false,
    };

    // requisição de tipo post sendo realizada para inserir uma tarefa a lista.
    try {
      const finalResult = [...todos, result];
      setTodos(finalResult);
      setTodo('');
      const addNewtask = await addTodo(result);
      console.log('addNewtask', addNewtask);
    } catch (err) {
      console.log(err);
    }
  };

  const updateTask = async (e: React.FormEvent) => {
    e.preventDefault();

    const verifyTodo = todos?.findIndex((teste) => teste.id === todoId);
    if (verifyTodo >= 0) {
      const result = {
        title: todo,
      };

      // requisição de tipo put sendo realizada para alterar uma tarefa da lista.
      try {
        todos[verifyTodo].title = todo;
        setTodos((todos) => [...todos]);
        setTodo('');
        const updateTask = todoId && (await updateTodo(todoId, result));
        console.log('updateTask', updateTask);
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
      ? todos?.find(
          (e) => e.id === tudoid && (setTodo(e.title), setTodoId(tudoid))
        )
      : setTodo(target.value);
  };

  const handleDelete = async (e: React.FormEvent, todoId: number) => {
    // requisição de tipo delete sendo realizada para remover uma tarefa da lista.
    e.stopPropagation();
    try {
      setTodos(todos?.filter(({ id }) => id !== todoId));
      await deleteTodo(todoId);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (e: any, todoId: number) => {
    e.preventDefault();
    handleChange(e, todoId);
    setEdit(true);
  };

  const handleCompleted = async (e: React.FormEvent, todoId: number) => {
    e.preventDefault();
    const verifyTodo = todos?.findIndex((teste) => teste.id === todoId);
    const { completed } = todos[verifyTodo];

    if (verifyTodo >= 0) {
      todos[verifyTodo].completed = !completed;
      setTodos((todos) => [...todos]);
    } else {
      console.log('errorrr');
    }
  };

  useEffect(() => {
    const user = localStorage.getItem('all-in-one-user');
    if (user) {
      const getTodosContent = async () => {
        try {
          setSelectedUser(JSON.parse(user));
          await getTodo(selectedUser?.id).then((todos) => {
            setTodos(todos);
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
            <strong>Todos</strong>
          </Title> */}
          <div>
            <form onSubmit={edit === false ? handleSubmit : updateTask}>
              <InputComponent
                type="text"
                placeholder="New Todo"
                value={todo}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              />
              <ButtonContainer>
                <ButtonContent
                  color="primary"
                  size="large"
                  variant="outlined"
                  type="submit"
                  className={edit ? 'btn-success' : 'btn-info'}
                >
                  {edit ? 'Edit task' : 'Add new task'}
                </ButtonContent>
              </ButtonContainer>
            </form>
          </div>
          <TodosContainer>
            {todos &&
              todos.map((todos) => (
                <TodoItem
                  todos={todos}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  handleCompleted={handleCompleted}
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

export default Todos;
