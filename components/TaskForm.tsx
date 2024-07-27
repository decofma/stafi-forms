import React, { useState } from 'react';
import { useTaskContext } from '../contexts/TaskContext';

const TaskForm = () => {
  const { tasks, addTask } = useTaskContext();
  const [task, setTask] = useState({ name: '', dueDate: '', priority: '' });
  const [error, setError] = useState('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.name || !task.dueDate || !task.priority) {
      setError('Please fill in all fields');
      return;
    }
    addTask(task);
    setTask({ name: '', dueDate: '', priority: '' });
    setError('');
  };

  

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Task Name</label>
          <input
            type="text"
            name="name"
            value={task.name}
            onChange={handleChange}
            className="pl-2 mt-2 block w-2/4 shadow-md sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            className="pl-2 mt-2 block w-1/4 shadow-md sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>   
          <label className="block text-sm font-medium text-gray-700">Priority</label>
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="pl-2 mt-2 block w-2/4 shadow-md sm:text-sm border-gray-300 rounded-md"
          >
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-custom-purple hover:bg-custom-hover"
        >
          Add Task
        </button>
      </form>
      <div className="mt-4">
        <h2 className="text-lg font-medium">Task List</h2>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li key={index} className="border p-2 rounded">
              <p><strong>Task Name:</strong> {task.name}</p>
              <p><strong>Due Date:</strong> {task.dueDate}</p>
              <p><strong>Priority:</strong> {task.priority}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskForm;
