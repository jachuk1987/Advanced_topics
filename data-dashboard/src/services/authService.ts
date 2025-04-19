export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("authToken");
};

export const login = (username: string, password: string): boolean => {
  if (username === "admin" && password === "admin") {
    localStorage.setItem("authToken", "fake_token");
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem("authToken");
};
