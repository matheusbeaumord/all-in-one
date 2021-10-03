import React from 'react';
// import { Container } from './style';
import Todos from '../models/todos'

interface TodosProps {
  todos: Todos;
}

const TodoItem: React.FC<TodosProps> = ({todos}) => {
  const { userId, id, title, completed } = todos;

  return (
      <div className='list-group-item d-flex justify-content-between my-2' >
        <h6
        //   className={`mt-1 mb-0 align-middle ${
        //     completed === true ? 'completed-task' : ''
        //   } ${deleted === true ? 'deleted-task' : ''} `}
        >
          {title}
        </h6>
        {/* <h6
        //   className={`mt-1 mb-0 align-middle ${
        //     completed === true ? 'completed-task' : ''
        //   } ${deleted === true ? 'deleted-task' : ''} `}
        >
          {completed.toString()}
        </h6> */}
        <div className='todo-icon'>
          {/* <span
            // className={`mt-1 mb-0 align-middle ${
            //   completed === true ? 'completed-task' : ''
            // } ${deleted === true ? 'deleted-task' : ''}`}
          >
            {completed}
          </span> */}
          {/* <span
            className={`mx-2 ${
              completed === true ? 'text-success' : 'text-secondary'
            } ${deleted === true ? 'deleted-task' : ''}`}
            onClick={doneTask}
          >
            <i
              className={`${
                completed === true ? ' fas fa-check ' : 'fas fa-check'
              } ${deleted === true ? 'deleted-task' : ''}`}
            />
          </span> */}
          <span className='mx-2 text-warning' 
        //   onClick={handleEdit}
          >
            <i className='fas fa-pen' />
          </span>
          <span className='mx-2 text-danger' 
        //   onClick={handleDelete}
          >
            <i className='fas fa-trash' />
          </span>
        </div>
      </div>
  );
};

export default TodoItem;
