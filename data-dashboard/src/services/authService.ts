export const login = async (username: string, password: string) => {
    if (username === 'admin' && password === 'admin') {
      return { token: 'fake-jwt-token' };
    } else {
      throw new Error('Invalid credentials');
    }
  };
  