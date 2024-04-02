import {
  createAxiosPublicInstance,
  createAxiousInstance,
  createSpaceInstance,
} from "../hooks/authInstance";
import { errorActions } from "./errorSlice";

export const createSpace = (spaceData) => {
  return async (dispatch) => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const postSpace = async () => {
      const request = createSpaceInstance(token);
      try {
        const response = await request.post("/spaces/create", spaceData);
        return response.data;
      } catch (error) {
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };

    try {
      const data = await postSpace();
      return data;
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
      throw error;
    }
  };
};
export const createCampaign = (spaceId, campaignData) => {
  return async (dispatch) => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const postCampaign = async () => {
      const request = createAxiousInstance(token);
      try {
        const response = await request.post(
          `/campaign/create/${spaceId}`,
          campaignData
        );
        return response.data;
      } catch (error) {
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };

    try {
      const data = await postCampaign();
      return data;
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
      throw error;
    }
  };
};
export const createTask = (campaignId, campaignTask) => {
  return async (dispatch) => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const postTask = async () => {
      const request = createAxiousInstance(token);
      try {
        const response = await request.post(
          `/task/${campaignId}/create`,
          campaignTask
        );
        return response.data;
      } catch (error) {
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };

    try {
      const data = await postTask();
      return data;
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
      throw error;
    }
  };
};
export const joinSpace = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const joinPostSpace = async () => {
      const request = createAxiousInstance(token);
      try {
        const response = await request.post(`/spaces/join/${id}`);
        return response.data;
      } catch (error) {
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };

    try {
      const data = await joinPostSpace();
      return data;
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
      throw error;
    }
  };
};

export const getAllSpaces = () => {
  return async (dispatch) => {
    const getSpace = async () => {
      const response = createAxiosPublicInstance();
      try {
        const responseData = await response.get("/spaces/all");
        return responseData.data;
      } catch (error) {
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };
    try {
      return await getSpace();
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
      throw error;
    }
  };
};
export const getSpaceById = (id) => {
  return async (dispatch) => {
    const getSingleSpace = async () => {
      const response = createAxiosPublicInstance();
      try {
        const responseData = await response.get(`/spaces/s/${id}`);
        return responseData.data;
      } catch (error) {
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };
    try {
      return await getSingleSpace();
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
      throw error;
    }
  };
};
export const getAllMySpaces = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const getMySpace = async () => {
      const response = createAxiousInstance(token);
      try {
        const responseData = await response.get(`/spaces/user/all`);
        return responseData.data;
      } catch (error) {
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };
    try {
      return await getMySpace();
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
      throw error;
    }
  };
};
export const getAllJoinedSpaces = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const getJoinedSpace = async () => {
      const response = createAxiousInstance(token);
      try {
        const responseData = await response.get(`/spaces/user/joined/all`);
        return responseData.data;
      } catch (error) {
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };
    try {
      return await getJoinedSpace();
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
      throw error;
    }
  };
};
