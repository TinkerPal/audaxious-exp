import { createAxiousInstance } from "../hooks/authInstance";

export const createSpace = (spaceData) => {
  return async () => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const postSpace = async () => {
      const request = createAxiousInstance(token);
      try {
        const response = await request.post("/spaces/create", spaceData);
        return response.data;
      } catch (error) {
        console.log("INITIAL SPACE ERROR");
        throw error;
      }
    };

    try {
      const data = await postSpace();
      return data;
    } catch (error) {
      console.log("HANDLE ALL RELATED SPACE ERROR", error);
      throw error;
    }
  };
};
