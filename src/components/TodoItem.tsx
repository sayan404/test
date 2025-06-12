import React from 'react';
import { Todo } from '../types';
import { Check, Trash, X } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-3 transition-all duration-300 ease-in-out hover:shadow-md">
      <div className="flex items-center flex-1">
        <button
          onClick={() => onToggle(todo.id)}
          className={`
            w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4
            ${todo.completed ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 text-gray-500'}
            focus:outline-none focus:ring-2 focus:ring-offset-2
            ${todo.completed ? 'focus:ring-green-500' : 'focus:ring-blue-400'}
            transition-colors duration-200
          `}
          aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {todo.completed ? <Check size={18} /> : <X size={18} className="opacity-0 group-hover:opacity-100" />}
        </button>
        <span className={`text-lg font-medium flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="p-2 rounded-full text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
        aria-label="Delete todo"
      >
        <Trash size={20} />
      </button>
    </div>
  );
};

export default TodoItem;
