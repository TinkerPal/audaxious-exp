export const getToken = () => {
  const token = localStorage.getItem("loggedin");
  if (!token) {
    return null;
  }
  return token;
};

export const tokenLoader = () => {
  const token = getToken();
  return token;
};
