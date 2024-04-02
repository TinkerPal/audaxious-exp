import {
  createAxiosPublicInstance,
  createAxiousInstance,
} from "../hooks/authInstance";
import { errorActions } from "./errorSlice";

export const getAllCampaigns = () => {
  return async (dispatch) => {
    const getCampaigns = async () => {
      const response = createAxiosPublicInstance();
      try {
        const responseData = await response.get("/campaign/all-campaigns");
        return responseData.data;
      } catch (error) {
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };
    try {
      return await getCampaigns();
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
      throw error;
    }
  };
};
export const getAllCampaignsBySpace = (spaceId) => {
  return async (dispatch) => {
    const getSpaceCampaigns = async () => {
      const response = createAxiosPublicInstance();
      try {
        const responseData = await response.get(`/campaign/${spaceId}/all`);
        return responseData.data;
      } catch (error) {
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };
    try {
      return await getSpaceCampaigns();
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
      throw error;
    }
  };
};
export const getAllCompletedTask = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const getCompletedTask = async () => {
      const response = createAxiousInstance(token);
      try {
        const responseData = await response.get(`/task/completed/${id}`);
        return responseData.data;
      } catch (error) {
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };
    try {
      return await getCompletedTask();
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
      throw error;
    }
  };
};

export const getCampaignById = (campaignId) => {
  return async (dispatch) => {
    const getSingleCampaign = async () => {
      const response = createAxiosPublicInstance();
      try {
        const responseData = await response.get(`/campaign/${campaignId}`);
        return responseData.data;
      } catch (error) {
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };
    try {
      return await getSingleCampaign();
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
      throw error;
    }
  };
};

export const participateInTask = (id, data) => {
  return async (dispatch) => {
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
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };

    try {
      const data = await postAllTask();
      return data;
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
      throw error;
    }
  };
};
export const claimPointTask = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const claimTask = async () => {
      const request = createAxiousInstance(token);
      try {
        const response = await request.post(`/points/claim/${id}`);
        return response.data;
      } catch (error) {
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };

    try {
      const data = await claimTask();
      return data;
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
      throw error;
    }
  };
};
