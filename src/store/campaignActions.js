import { createAxiosPublicInstance } from "../hooks/authInstance";

export const getAllCampaigns = () => {
  return async () => {
    const getCampaigns = async () => {
      const response = createAxiosPublicInstance();
      try {
        const responseData = await response.get("/campaign/all-campaigns");
        return responseData.data;
      } catch (error) {
        console.log("throw Error", error);
        throw error;
      }
    };
    try {
      return await getCampaigns();
    } catch (error) {
      console.log("throw Error", error);
      throw error;
    }
  };
};
