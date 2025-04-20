export const login = async (username: string, password: string): Promise<boolean> => {
    const mockUser = {
      username: "admin",
      password: "admin123"
    };
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === mockUser.username && password === mockUser.password) {
          localStorage.setItem("authToken", "mock-token");
          resolve(true);
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  };
  
  export const logout = () => {
    localStorage.removeItem("authToken");
  };
  
  export const isAuthenticated = (): boolean => {
    return !!localStorage.getItem("authToken");
  };
  