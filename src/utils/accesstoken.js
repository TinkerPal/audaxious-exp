export const getToken = () => {
  const token = localStorage.getItem("audaxiousAccessToken");
  if (!token) {
    return null;
  }
  return token;
};

export const tokenLoader = () => {
  const token = getToken();
  return token;
};
