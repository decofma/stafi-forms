const API_URL = 'https://stafi.com/endpoint/api/user/v1'; 

export const saveUserData = async (user: any, tasks: any[]) => {
  try {
    const response = await fetch(API_URL, {
      method: user.id ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user,
        tasks,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error saving user data:', error);
    throw error;
  }
};
