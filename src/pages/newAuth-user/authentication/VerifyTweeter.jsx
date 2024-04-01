import React, { useEffect, useState } from "react";
import VerifyTweeterModal from "../../../components/socialmedia/VerifyTweetModal";
import { ReactComponent as TwitterVerification } from "../../../assets/svg/dashboardSvg/twitterVerification.svg";
import { VerifyIntent } from "../engagePortal/TweeterIntent";
import { getUserId, verifyTweeterAccount } from "../../../store/authActions";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../../hooks/useInput";
import { authAction } from "../../../store/authorizationSlice";
import { toast } from "react-toastify";

const checkWebsiteValidity = (url) => {
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlPattern.test(url);
};

const VerifyTweeter = () => {
  const {
    onChangeValueHandler: websiteOnchange,
    value: website,
    onBlurHandler: websiteOnBlur,
    valueIsInvalid: websiteInvalid,
    valueIsValid: websiteIsValid,
  } = useInput(checkWebsiteValidity);
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const open = useSelector((state) => state.authentication.tweeterModal);
  const loading = useSelector((state) => state.authentication.loading);
  const isAuthenticated = useSelector(
    (state) => state.authentication.isLogedIn
  );
  const tweetText = `Verifying my Twitter username for my #AudaXious Account aud-id=${userId}`;
  const tweetUrl = `https://www.audaxious.com/`;

  const getUserIdFunction = async () => {
    try {
      const result = await dispatch(getUserId());
      setUserId(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      getUserIdFunction();
    }
  }, [isAuthenticated]);

  const verifyTweeterIntentHandler = () => {
    VerifyIntent(tweetText, tweetUrl);
  };

  const onClose = () => {
    dispatch(authAction.onOpenTweeterModal(false));
  };

  const verifyTweeterHandler = async (event) => {
    event.preventDefault();
    if (websiteInvalid) {
      return;
    }
    dispatch(authAction.setLoading(true));
    // if (loading) {
    //   toast.loading("Please wait");
    // }
    let formattedWebsite = website;
    // Check if the original URL contains "x.com" and replace it with "twitter.com"
    if (website.includes("x.com")) {
      formattedWebsite = website.replace("x.com", "twitter.com");
    }
    // Check if the original URL contains "twitter.com", if not keep it unchanged
    else if (website.includes("twitter.com")) {
      formattedWebsite = website;
    }
    // console.log("WEBSITE", formattedWebsite);
    try {
      const result = await dispatch(
        verifyTweeterAccount({ url: formattedWebsite })
      );
      // console.log(result.response.data);
      dispatch(authAction.setLoading(false));
      toast.success(result.message);
      dispatch(authAction.onOpenTweeterModal(false));
      //   setOpen(false);
      dispatch(authAction.verifyTweeterAccount(true));
    } catch (error) {
      dispatch(authAction.setLoading(false));
      toast.error(error.response.data.error);
      dispatch(authAction.verifyTweeterAccount(false));
      dispatch(authAction.onOpenTweeterModal(true));
      //   setOpen(true);
    }
    // console.log(website);
  };
  return (
    <VerifyTweeterModal onClose={onClose} open={open}>
      <section className="bg-[#060B12] py-[2.5rem] rounded-md max-w-[1300px] px-[1rem] z-50">
        <div className="container">
          {loading && (
            <p className="text-[#dfdfdf] font-Poppins font-[700] text-[1.25rem]">
              {"Loading..."}
            </p>
          )}
          <h2 className="text-[#A5A5A5] font-Poppins font-normal text-[1.25rem] md:[2rem]">
            AudaXious Engage
          </h2>
          <div className="flex flex-col items-center gap-[1rem] md:gap-[1.6rem] mt-[3rem]">
            <span>
              <TwitterVerification />
            </span>
            <div>
              <h2 className="text-[#dfdfdf] font-Poppins font-[700] text-[1.25rem] md:text-[2rem]">
                Twitter Verification
              </h2>
              <div className="mt-[0.5rem]">
                <p className="text-[#A5A5A5] text-center text-[0.875rem] md:text-[1.2rem] font-Poppins leading-[140%] font-[300]">
                  In order to continue, you need to verify your twitter account
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1.5rem] md:gap-[2.3rem] mt-[2.3rem]">
            <div className="flex items-center justify-between">
              <span className="bg-[#24343D] w-[100%] h-[2px]"></span>
              <span className="text-[#A5A5A5] px-[1.5rem]">1</span>
              <span className="bg-[#24343D] w-[100%] h-[2px]"></span>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={verifyTweeterIntentHandler}
                // type="submit"
                className="bg-[#E8E8E8] hover:bg-[#FFF] flex items-center justify-center rounded-[8px] border-[1.5px] border-[#4C5656] border-opacity-[10%] p-3.5 w-[100%] md:w-[17rem]"
              >
                <span className="text-[#060B12] font-Poppins font-[600]">
                  Tweet authentication post
                </span>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="bg-[#24343D] w-[100%] h-[2px]"></span>
              <span className="text-[#A5A5A5] px-[1.5rem]">2</span>
              <span className="bg-[#24343D] w-[100%] h-[2px]"></span>
            </div>
            <form onSubmit={verifyTweeterHandler}>
              <input
                required
                type="text"
                value={website}
                onChange={websiteOnchange}
                onBlur={websiteOnBlur}
                name="website"
                id="website"
                placeholder="Copy and paste the link to the tweet"
                className="text-[#FFF] font-Poppins font-[500] bg-transparent outline-none placeholder:text-[#A5A5A5] w-[100%] border-[#2A3C46] border border-opacity-[80%] rounded-lg px-[1rem] py-[0.5rem] md:py-[1rem] text-[0.75rem]"
              />
              <div className="flex items-center justify-center mt-[1.6rem]">
                <button
                  type="submit"
                  disabled={!websiteIsValid}
                  className="bg-[#E8E8E8] disabled:cursor-not-allowed flex items-center justify-center rounded-[8px] border-[1.5px] border-[#4C5656] border-opacity-[10%] p-3.5 w-[100%] md:w-[17rem]"
                >
                  <span className="text-[#060B12] font-Poppins font-[600]">
                    Verify Twitter Acount
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </VerifyTweeterModal>
  );
};

export default VerifyTweeter;
