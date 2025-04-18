export const login = (username: string, password: string): string | null => {
    if (username === 'admin' && password === 'admin') {
      const token = 'dummy-token';
      localStorage.setItem('token', token);
      return token;
    }
    return null;
  };
  
  export const logout = () => localStorage.removeItem('token');
  export const isAuthenticated = () => !!localStorage.getItem('token');
  