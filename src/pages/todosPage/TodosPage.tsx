import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import ITodos from '../../models/todos';
import { toast } from 'react-toastify';

// import { Link } from 'react-router-dom';
// import { BreadCrumb, Template } from 'components';
// import { m_products, d_products } from 'assets';
// import { HOME, PRODUCTS } from 'routes/Constants';
// import { Info, ButtonOutline } from '../../Components/components';
import { Section, Title, InputComponent } from './style';
import { getTodo } from '../../services/todos';
import getErrorMessage from '../../helpers/errorMessages';
import TodoItem from '../../components/TodosCard';
import UsersInterface from '../../models/users';
import LoadingBg from '../../components/Loading';

interface TodosResult {
  allTodos: ITodos
}

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState('');
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
    // const newTodo = await createTodo({ task: todos, date: newDate });
    const newId = todos.length + 1
    const result = {
      userId: selectedUser?.id,
      id: newId,
      title: todo,
      completed: false,
    };
    const finalResult = [...todos, result];
    console.log(finalResult);
    
    setTodos(finalResult);
    // todos.push(result);
    setTodo('');
  };

  const updateTask = async () => {
    try {
      // e.stopPropagation();
      // await updateTodo(id, { task: todo, date: newDate });
    } catch (error) {}
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setTodo(target.value);

  useEffect(() => {
    const user = localStorage.getItem('all-in-one-user');
    if (user) {
      const getTodosContent = async () => {
        try {
          setSelectedUser(JSON.parse(user));
          const todosData = await getTodo(selectedUser?.id);          
          setTodos(todosData);
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
          <Title>Todos</Title>
          <div>
            <form onSubmit={edit === false ? handleSubmit : updateTask}>
              <div>
                <InputComponent
                  type="text"
                  placeholder="New Todo"
                  value={todo}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                />
              </div>

              <button
                type="submit"
                className={edit ? 'btn-success' : 'btn-info'}
              >
                {edit ? 'Edit task' : 'Add new task'}
              </button>
            </form>
          </div>
          <div>
            {todos &&
              todos.map((todos) => (
                <>
                  <TodoItem todos={todos} />
                </>
              ))}
          </div>
        </>
      ) : (
        <LoadingBg />
      )}
    </Section>
  );
};

export default Todos;
