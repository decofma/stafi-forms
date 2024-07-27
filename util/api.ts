// utils/api.ts
interface User {
    name: string;
    email: string;
    address: string;
    id?: string;
  }
  
  export const createUserRegistry = async (user: User) => {
    const response = await fetch('/api/registry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return response.json();
  };
  
  export const updateUserRegistry = async (user: User) => {
    if (!user.id) throw new Error("User ID is required for updating a user registry.");
    const response = await fetch(`/api/registry/${user.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return response.json();
  };
  