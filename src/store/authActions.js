import { authInstance, createAxiousInstance } from "../hooks/authInstance";
import { authAction } from "./authorizationSlice";
import { errorActions } from "./errorSlice";

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
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };
    try {
      const data = await sendLoginRequest();
      dispatch(authAction.setEmail(data.data.email));
      return data;
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
      throw error;
    }
  };
};

export const loginWithWallet = (walletId) => {
  return async (dispatch) => {
    const sendLoginRequest = async () => {
      const request = authInstance();
      try {
        const requestData = await request.post(`/user/wallet/login`, {
          walletId,
        });
        return requestData.data;
      } catch (error) {
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };
    try {
      const data = await sendLoginRequest();
      dispatch(authAction.setEmail(data.data.walletId));
      return data;
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
      throw error;
    }
  };
};

export const verifyEmailWithOtp = (data) => {
  return async (dispatch) => {
    const sendVerifyEmailRequest = async () => {
      const request = authInstance();
      try {
        const requestData = await request.post(
          "/user/verify?type=verify",
          data
        );
        return requestData.data;
      } catch (error) {
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };
    try {
      return await sendVerifyEmailRequest();
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
      throw error;
    }
  };
};

// const token = getToken();

export const enterUserName = (username) => {
  return async (dispatch) => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const sendUserNameRequest = async () => {
      const request = createAxiousInstance(token);
      try {
        const requestData = await request.post("/profile/update-username", {
          username,
        });
        return requestData.data;
      } catch (error) {
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };
    try {
      return await sendUserNameRequest();
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
      throw error;
    }
  };
};

export const getUserId = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const getUser = async () => {
      const response = createAxiousInstance(token);
      try {
        const responseData = await response.get("/twitter/link-account");
        return responseData.data;
      } catch (error) {
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };
    try {
      return await getUser();
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
      throw error;
    }
  };
};

export const verifyTweeterAccount = (url) => {
  return async (dispatch) => {
    const token = localStorage.getItem("audaxiousAccessToken") || null;
    const verifyTweeter = async () => {
      const request = createAxiousInstance(token);
      try {
        const requestData = await request.post("/twitter/verify", url);
        return requestData.data;
      } catch (error) {
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };

    try {
      return await verifyTweeter();
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
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
        dispatch(errorActions.setError(error.response.data));
        throw error;
      }
    };
    try {
      return await twitterUserName();
    } catch (error) {
      dispatch(errorActions.setError(error.response.data));
      throw error;
    }
  };
};
