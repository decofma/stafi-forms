import React from 'react';
import { UserProvider } from '../contexts/UserContext';
import { TaskProvider } from '../contexts/TaskContext';
import UserForm from './UserForm';
import TaskForm from './TaskForm';

const MainForm = () => {

  return (
    <UserProvider>
      <TaskProvider>
        <div className="max-w-4xl mx-auto p-4 space-y-6">
          <h1 className="text-2xl font-bold text-custom-purple">User Information</h1>
          <UserForm />
          <h1 className="text-2xl font-bold text-custom-purple">Task Details</h1>
          <TaskForm />
        </div>
      </TaskProvider>
    </UserProvider>
  );
};

export default MainForm;
