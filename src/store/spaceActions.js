import {
  createAxiosPublicInstance,
  createAxiousInstance,
  createSpaceInstance,
} from "../hooks/authInstance";

export const createSpace = (spaceData) => {
  return async () => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const postSpace = async () => {
      const request = createSpaceInstance(token);
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
export const createCampaign = (spaceId, campaignData) => {
  return async () => {
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
        console.log("INITIAL POST CAMPAIGN ERROR");
        throw error;
      }
    };

    try {
      const data = await postCampaign();
      return data;
    } catch (error) {
      console.log("HANDLE ALL RELATED CAMPAIGN ERROR", error);
      throw error;
    }
  };
};
export const createTask = (campaignId, campaignTask) => {
  return async () => {
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
        console.log("INITIAL POST Task ERROR");
        throw error;
      }
    };

    try {
      const data = await postTask();
      return data;
    } catch (error) {
      console.log("HANDLE ALL RELATED TASK ERROR", error);
      throw error;
    }
  };
};
export const joinSpace = (id) => {
  return async () => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const joinPostSpace = async () => {
      const request = createAxiousInstance(token);
      try {
        const response = await request.post(`/spaces/join/${id}`);
        return response.data;
      } catch (error) {
        console.log("INITIAL SPACE ERROR");
        throw error;
      }
    };

    try {
      const data = await joinPostSpace();
      return data;
    } catch (error) {
      console.log("HANDLE ALL RELATED SPACE ERROR", error);
      throw error;
    }
  };
};

// export const getAllSpaces = () => {
//   return async () => {
//     const getUser = async () => {
//       const response = createAxiosPublicInstance();
//       try {
//         const responseData = await response.get("/spaces/all");
//         return responseData.data;
//       } catch (error) {
//         console.log("throw Error", error);
//         throw error;
//       }
//     };
//     try {
//       return await getUser();
//     } catch (error) {
//       console.log("throw Error", error);
//       throw error;
//     }
//   };
// };

export const getAllSpaces = () => {
  return async () => {
    const getSpace = async () => {
      const response = createAxiosPublicInstance();
      try {
        const responseData = await response.get("/spaces/all");
        return responseData.data;
      } catch (error) {
        console.log("throw Error", error);
        throw error;
      }
    };
    try {
      return await getSpace();
    } catch (error) {
      console.log("throw Error", error);
      throw error;
    }
  };
};
export const getSpaceById = (id) => {
  return async () => {
    const getSingleSpace = async () => {
      const response = createAxiosPublicInstance();
      try {
        const responseData = await response.get(`/spaces/s/${id}`);
        return responseData.data;
      } catch (error) {
        console.log("throw Error", error);
        throw error;
      }
    };
    try {
      return await getSingleSpace();
    } catch (error) {
      console.log("throw Error", error);
      throw error;
    }
  };
};
export const getAllMySpaces = () => {
  return async () => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const getMySpace = async () => {
      const response = createAxiousInstance(token);
      try {
        const responseData = await response.get(`/spaces/user/all`);
        return responseData.data;
      } catch (error) {
        console.log("throw Error", error);
        throw error;
      }
    };
    try {
      return await getMySpace();
    } catch (error) {
      console.log("throw Error", error);
      throw error;
    }
  };
};
export const getAllJoinedSpaces = () => {
  return async () => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const getJoinedSpace = async () => {
      const response = createAxiousInstance(token);
      try {
        const responseData = await response.get(`/spaces/user/joined/all`);
        return responseData.data;
      } catch (error) {
        console.log("throw Error", error);
        throw error;
      }
    };
    try {
      return await getJoinedSpace();
    } catch (error) {
      console.log("throw Error", error);
      throw error;
    }
  };
};
