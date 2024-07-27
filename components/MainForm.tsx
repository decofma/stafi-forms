import React from 'react';
import { UserProvider, useUserContext } from '../contexts/UserContext';
import { TaskProvider, useTaskContext } from '../contexts/TaskContext';
import UserForm from './UserForm';
import TaskForm from './TaskForm';
import { saveUserData } from '../util/api';

const MainForm: React.FC = () => {

    const { user } = useUserContext();
    const { tasks } = useTaskContext();
    const handleSubmit = async () => {
        try {
            const data = await saveUserData(user, tasks);
            console.log('Success:', data);
            alert('Data saved successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to save data. \nApi endpoint not configured.');
        }
  };

  return (
        <div className="max-w-4xl mx-auto p-4 space-y-6">
          <h1 className="text-2xl font-bold custom-purple">User Information</h1>
          <UserForm />
          <h1 className="text-2xl font-bold custom-purple">Task Details</h1>
          <TaskForm />
          <button
            onClick={handleSubmit}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-custom-purple hover:bg-custom-hover"
          >
            Submit
          </button>
        </div>
  );
};

export default MainForm;
