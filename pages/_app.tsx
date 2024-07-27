import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from '../contexts/UserContext';
import { TaskProvider } from '../contexts/TaskContext';
import React from 'react';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <TaskProvider>
        <Component {...pageProps} />
      </TaskProvider>
    </UserProvider>
  );
};

export default MyApp;