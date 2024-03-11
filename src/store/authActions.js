import { authAction } from "./store";
import { authInstance, createAxiousInstance } from "../hooks/authInstance";
import { getToken } from "../utils/accesstoken";

export const loginWithEmail = (email) => {
  return async (dispatch) => {
    const sendLoginRequest = async () => {
      const request = authInstance();
      try {
        const requestData = await request.post(`/user/onboard`, {
          email,
        });
        return requestData.data.data;
      } catch (error) {
        console.error("An error occurred", error);
        throw error;
      }
    };
    try {
      const data = await sendLoginRequest();
      dispatch(authAction.setEmail(data.email));
    } catch (error) {
      console.error("An error occurred during login:", error);
      throw await error;
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
    const token = localStorage.getItem("audaxiousAccessToken");
    console.log(token);
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
