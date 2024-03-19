import { authInstance, createAxiousInstance } from "../hooks/authInstance";
import { authAction } from "./authorizationSlice";

export const loginWithEmail = (email) => {
  return async (dispatch) => {
    const sendLoginRequest = async () => {
      const request = authInstance();
      try {
        const requestData = await request.post(`/user/onboard`, {
          email,
        });
        return requestData.data;
      } catch (error) {
        console.error("An error occurred", error);
        throw error;
      }
    };
    try {
      const data = await sendLoginRequest();
      console.log("CHECK EMAIL", data.data.email);
      dispatch(authAction.setEmail(data.data.email));
      return data;
    } catch (error) {
      console.error("An error occurred during login:", error);
      throw error;
    }
  };
};

export const loginWithWallet = (address) => {
  return async (dispatch) => {
    const sendLoginRequest = async () => {
      const request = authInstance();
      try {
        const requestData = await request.post(`/user/onboard`, {
          address,
        });
        return requestData.data;
      } catch (error) {
        console.error("An error occurred", error);
        throw error;
      }
    };
    try {
      const data = await sendLoginRequest();
      console.log("CHECK EMAIL", data.data.email);
      dispatch(authAction.setEmail(data.data.email));
      return data;
    } catch (error) {
      console.error("An error occurred during login:", error);
      throw error;
    }
  };
};

export const verifyEmailWithOtp = (data) => {
  return async () => {
    const sendVerifyEmailRequest = async () => {
      const request = authInstance();
      try {
        const requestData = await request.post(
          "/user/verify?type=verify",
          data
        );
        return requestData.data;
      } catch (error) {
        console.error("An error occurred during verification:", error);
        throw error;
      }
    };
    try {
      return await sendVerifyEmailRequest();
    } catch (error) {
      console.error("An error occurred during verification:", error);
      throw error;
    }
  };
};

// const token = getToken();

export const enterUserName = (username) => {
  return async () => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const sendUserNameRequest = async () => {
      const request = createAxiousInstance(token);
      try {
        const requestData = await request.post("/profile/update-username", {
          username,
        });
        return requestData.data;
      } catch (error) {
        console.error("An error while process your request", error);
        throw error;
      }
    };
    try {
      return await sendUserNameRequest();
    } catch (error) {
      console.error("An error occurred at the end of the request", error);
      throw error;
    }
  };
};

export const getUserId = () => {
  return async () => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const getUser = async () => {
      const response = createAxiousInstance(token);
      try {
        const responseData = await response.get("/twitter/link-account");
        return responseData.data;
      } catch (error) {
        console.log("throw Error", error);
        throw error;
      }
    };
    try {
      return await getUser();
    } catch (error) {
      console.log("throw Error", error);
      throw error;
    }
  };
};

export const verifyTweeterAccount = (url) => {
  return async () => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const verifyTweeter = async () => {
      const request = createAxiousInstance(token);
      try {
        const requestData = await request.post("/twitter/verify", url);
        return requestData.data;
      } catch (error) {
        console.log("106", error);
        throw error;
      }
    };

    try {
      return await verifyTweeter();
    } catch (error) {
      console.log("VERIFY", error);
      throw error;
    }
  };
};

export const getTwitterUserName = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const twitterUserName = async () => {
      const response = createAxiousInstance(token);
      try {
        const resData = await response.get("/profile/user");
        return resData.data;
      } catch (error) {
        console.log("TWITTER USER ERROR", error);
        throw error;
      }
    };
    try {
      return await twitterUserName();
      // dispatch(authAction.verifyTweeterAccount(result.data.twitterUsername));
    } catch (error) {
      console.log("TWITTER USER RESPONSE ERROR", error);
      throw error;
    }
  };
};
