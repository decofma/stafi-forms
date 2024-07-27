import React, { useEffect } from 'react';
import { useUserContext } from '../contexts/UserContext';

const UserForm = () => {
  const { user, setUser } = useUserContext();

  useEffect(() => {
    const fetchRandomUser = async () => {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const randomUser = data.results[0];
      setUser({
        name: `${randomUser.name.first} ${randomUser.name.last}`,
        email: randomUser.email,
        address: `${randomUser.location.street.name}, ${randomUser.location.city}`,
      });
    };

    fetchRandomUser();
  }, [setUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // @ts-ignore prevUser does exist is User
    setUser((prevUser: any) => ({ ...prevUser, [name]: value }));
  };

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          className="pl-2 mt-2 block w-full shadow-md sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="pl-2 mt-2 block w-full shadow-md sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          name="address"
          value={user.address}
          onChange={handleChange}
          className="pl-2 mt-2 block w-full shadow-md sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </form>
  );
};

export default UserForm;