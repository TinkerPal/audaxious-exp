import {
  createAxiosPublicInstance,
  createAxiousInstance,
} from "../hooks/authInstance";

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
export const getAllCompletedTask = (id) => {
  return async () => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const getCompletedTask = async () => {
      const response = createAxiousInstance(token);
      try {
        const responseData = await response.get(`/task/completed/${id}`);
        return responseData.data;
      } catch (error) {
        console.log("throw Error", error);
        throw error;
      }
    };
    try {
      return await getCompletedTask();
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

export const participateInTask = (id, data) => {
  return async () => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const postAllTask = async () => {
      const request = createAxiousInstance(token);
      try {
        const response = await request.post(
          `/task/participate/all/${id}`,
          data
        );
        return response.data;
      } catch (error) {
        console.log("INITIAL PARTICIPATE IN TASK ERROR");
        throw error;
      }
    };

    try {
      const data = await postAllTask();
      return data;
    } catch (error) {
      console.log("HANDLE PARTICIPATE IN TASK ERROR", error);
      throw error;
    }
  };
};
export const claimPointTask = (id) => {
  return async () => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const claimTask = async () => {
      const request = createAxiousInstance(token);
      try {
        const response = await request.post(`/points/claim/${id}`);
        return response.data;
      } catch (error) {
        console.log("INITIAL CLAIM POINT ERROR");
        throw error;
      }
    };

    try {
      const data = await claimTask();
      return data;
    } catch (error) {
      console.log("HANDLE CLAIM POINT ERROR", error);
      throw error;
    }
  };
};
