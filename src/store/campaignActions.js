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
export const getAllCampaignsBySpace = (spaceId) => {
  return async () => {
    const getSpaceCampaigns = async () => {
      const response = createAxiosPublicInstance();
      try {
        const responseData = await response.get(`/campaign/${spaceId}/all`);
        return responseData.data;
      } catch (error) {
        console.log("throw Error", error);
        throw error;
      }
    };
    try {
      return await getSpaceCampaigns();
    } catch (error) {
      console.log("throw Error", error);
      throw error;
    }
  };
};

export const getCampaignById = (campaignId) => {
  return async () => {
    const getSingleCampaign = async () => {
      const response = createAxiosPublicInstance();
      try {
        const responseData = await response.get(`/campaign/${campaignId}`);
        return responseData.data;
      } catch (error) {
        console.log("throw Error", error);
        throw error;
      }
    };
    try {
      return await getSingleCampaign();
    } catch (error) {
      console.log("throw Error", error);
      throw error;
    }
  };
};
