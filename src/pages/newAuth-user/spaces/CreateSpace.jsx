import { ReactComponent as X } from "../../../assets/svg/dashboardSvg/smX.svg";
import { ReactComponent as Discord } from "../../../assets/svg/dashboardSvg/smDiscord.svg";
import { ReactComponent as Telegram } from "../../../assets/svg/dashboardSvg/telegrams.svg";
import { ReactComponent as Required } from "../../../assets/svg/dashboardSvg/required.svg";
import { ReactComponent as Checked } from "../../../assets/svg/dashboardSvg/checked.svg";
import { ReactComponent as Link } from "../../../assets/svg/dashboardSvg/infinitylink.svg";
// import useInput, { useImage } from "../../../hooks/useInput";
import { useCallback, useState } from "react";
import useInput, { useImage } from "../../../hooks/useInput";
import Loading from "../../Homes/Loading";
import { useDispatch, useSelector } from "react-redux";
import { spaceActions } from "../../../store/spaceSlice";
import { createSpace } from "../../../store/spaceActions";
import { toast } from "react-toastify";
import VerifyTweeter from "../authentication/VerifyTweeter";
import { authAction } from "../../../store/authorizationSlice";
import ImageInput from "../../../widget/ImageInput";
import CoverImageInput from "../../../widget/CoverImageInput";

const checkNameValidity = (name) => name.trim() !== "";
// const checkcoverImageValidity = (name) => name.trim() !== "";
const checkDescriptionValidity = (description) => description.trim() !== "";
const checkWebsiteValidity = (url) => {
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlPattern.test(url);
};
const CreateSpace = ({ cancelHandler }) => {
  const twitterUsername = useSelector(
    (state) => state.authentication.verifyTweet
  );
  const [inviteCode, setInviteCode] = useState("");

  const {
    onChangeValueHandler: nameOnchange,
    reset: resetName,
    value: name,
    onBlurHandler: nameOnBlur,
    valueIsInvalid: nameInvalid,
  } = useInput(checkNameValidity);

  const {
    onChangeValueHandler: websiteOnchange,
    value: website,
    onBlurHandler: websiteOnBlur,
    valueIsInvalid: websiteInvalid,
    reset: websiteReset,
  } = useInput(checkWebsiteValidity);
  const {
    onChangeValueHandler: descriptionOnchange,
    value: description,
    reset: descriptionReset,
    onBlurHandler: descriptionOnBlur,
    valueIsInvalid: descriptionInvalid,
  } = useInput(checkDescriptionValidity);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCategoriesError, setSelectedCategoriesError] = useState(null);
  const [selectedWebsiteError, setSelectedWebsiteError] = useState(null);
  const [selectedWebsite, setSelectedWebsite] = useState([
    {
      type: "twitter",
      url: `https://twitter.com/${twitterUsername ? twitterUsername : ""}`,
    },
  ]);

  const categories = [
    "DeFi",
    "NFT",
    "Metaverse",
    "Staking",
    "Meme",
    "Oracle",
    "DEX",
    "CEX",
    "DAO",
    "GameFi",
    "P2E",
    "Community",
    "DeSo",
    "SocialFi",
    "AI",
    "AMM",
    // "ERC-20",
    // "SPL",
  ];
  const {
    image: cover,
    onChangeHandler: onChangeCover,
    reset: resetCover,
  } = useImage();
  const {
    image: profilePicture,
    onChangeHandler: onChangeProfilePicture,
    reset: resetProfilePicture,
  } = useImage();

  const handleInputChange = (type, url) => {
    const existingIndex = selectedWebsite.findIndex(
      (item) => item.type === type
    );
    if (existingIndex !== -1) {
      const newArray = [...selectedWebsite];
      newArray[existingIndex] = { type, url };
      setSelectedWebsite(newArray);
    } else {
      setSelectedWebsite([...selectedWebsite, { type, url }]);
    }
  };

  console.log("selectedWebsite", selectedWebsite);
  const verifyTweeter = useSelector(
    (state) => state.authentication.verifyTweet
  );
  const loading = useSelector((state) => state.space.loading);
  const dispatch = useDispatch();
  const openTweeterModal = () => {
    if (!verifyTweeter) {
      dispatch(authAction.onOpenTweeterModal(true));
      return;
    } else {
      dispatch(authAction.onOpenTweeterModal(false));
    }
  };

  const handleCategoryClick = useCallback(
    (category) => {
      if (
        selectedCategories.length >= 4 &&
        !selectedCategories.includes(category)
      ) {
        return;
      }

      if (selectedCategories.includes(category)) {
        setSelectedCategories(selectedCategories.filter((c) => c !== category));
      } else {
        setSelectedCategories([...selectedCategories, category]);
      }
    },
    [selectedCategories]
  );

  const submitFormHandler = async (event) => {
    event.preventDefault();
    if (!verifyTweeter) {
      dispatch(authAction.onOpenTweeterModal(true));
      return;
    }
    if (selectedCategories.length < 1) {
      setSelectedCategoriesError(true);
      return;
    } else {
      setSelectedCategoriesError(false);
    }
    if (selectedWebsite.length < 1) {
      setSelectedWebsiteError(true);
      return;
    } else {
      setSelectedWebsiteError(false);
    }
    dispatch(spaceActions.setLoading(true));

    const formData = new FormData();
    formData.append("banner", cover);
    formData.append("icon", profilePicture);
    formData.append("title", name);
    formData.append("inviteCode", inviteCode);
    selectedWebsite.forEach((websiteObj, index) => {
      formData.append(`links[${index}][type]`, websiteObj.type);
      formData.append(`links[${index}][url]`, websiteObj.url);
    });
    selectedCategories.forEach((tag, index) => {
      formData.append(`tags[${index}]`, tag);
    });
    formData.append("description", description);

    try {
      const result = await dispatch(createSpace(formData));
      dispatch(spaceActions.setLoading(false));
      dispatch(spaceActions.setSpaceCreated(result.success));
      cancelHandler();
      toast.success(result.message);
      resetCover();
      resetProfilePicture();
      resetName();
      descriptionReset();
      setSelectedCategories([]);
      setSelectedWebsite([]);
    } catch (error) {
      dispatch(spaceActions.setLoading(false));
      toast.error(error.response.data.error);
    }
  };
  return (
    <>
      <VerifyTweeter />
      <form onSubmit={submitFormHandler}>
        <div className="text-[#FFF] bg-[#060B12] w-[100%] min-w-[15rem] md:w-[43rem] lg:w-[58rem] xl:w-[70rem]">
          <div className="border-[#2A3C46] border border-opacity-[80%] rounded-sm">
            <div>
              <CoverImageInput
                val={cover}
                name={"coverImage"}
                onChange={(e) => {
                  e.preventDefault();
                  onChangeCover(e);
                }}
              />
              <div className="container">
                <div className="mt-[-3.5rem] 2xl:mt-[-7rem]">
                  <ImageInput
                    val={profilePicture}
                    name="profilePicture"
                    onChange={(e) => {
                      e.preventDefault();
                      onChangeProfilePicture(e);
                    }}
                  />
                  <p className="text-[#A5A5A5] text-[1rem] text-start mt-[0.58rem] font-[275] font-Poppins">
                    JPG,PNG Max 1mb
                  </p>
                </div>
              </div>
              <div className="container mt-[2rem] md:mt-[0.6rem] flex flex-col gap-[1.5rem] md:gap-[1.5rem]">
                {loading && (
                  <div className="">
                    <Loading />
                  </div>
                )}
                <div className="flex items-center gap-[1.5rem] md:gap-[3rem] flex-col md:flex-row">
                  <div className="flex flex-col items-start gap-[0.6rem] w-[100%] md:w-[20rem] lg:w-[25rem]">
                    <label
                      htmlFor="name"
                      className="font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]"
                    >
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={nameOnchange}
                      onBlur={nameOnBlur}
                      placeholder="Enter your space name"
                      className="bg-transparent outline-none placeholder:text-[#A5A5A5] w-[100%] md:w-[15rem] lg:w-[24rem] font-[275] border-[#2A3C46] border border-opacity-[80%] rounded-lg px-[1rem] py-[0.5rem] text-[0.75rem] font-Poppins"
                    />
                    {nameInvalid && (
                      <p className="text-[#b40e0e] text-[0.75rem] font-[600] font-Poppins">
                        Name must not be empty
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-[0.6rem] w-[100%] md:w-[20rem] lg:w-[25rem]">
                    <label htmlFor="website" className="flex gap-[0.4rem]">
                      <p className="font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]">
                        Project website
                      </p>
                      <span>
                        <Required />
                      </span>
                    </label>
                    <div className="relative w-[100%] md:w-auto">
                      <input
                        // required
                        type="text"
                        // value={website}
                        onChange={(e) =>
                          handleInputChange("website", e.target.value)
                        }
                        // onBlur={websiteOnBlur}
                        name="website"
                        id="website"
                        placeholder="https://"
                        className="bg-transparent outline-none placeholder:text-[#A5A5A5] w-[100%] md:w-[20rem] lg:w-[24rem] font-[275] border-[#2A3C46] border border-opacity-[80%] rounded-lg pl-[2.5rem] pr-[1rem] py-[0.5rem] text-[0.75rem] font-Poppins"
                      />
                      <span className="absolute top-[11px] left-4">
                        <Link />
                      </span>
                    </div>
                    {/* {websiteInvalid && (
                      <p className="text-[#b40e0e] text-[0.75rem] font-[600] font-Poppins">
                        Must follow a valid url format
                      </p>
                    )} */}
                  </div>
                </div>

                <div className="flex flex-col items-start gap-[0.6rem]">
                  <p className="font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]">
                    Social Media
                  </p>
                  <div className="flex w-[100%] gap-4 md:gap-[3rem] justify-between md:justify-start flex-wrap md:flex-nowrap">
                    <div
                      onClick={openTweeterModal}
                      className="cursor-pointer w-auto md:w-[12.7rem] p-[0.7rem] font-Poppins text-[0.75rem] text-[#E8E8E8] font-[300] border-[#2A3C46] border border-opacity-[80%] flex items-center justify-center gap-[0.62rem] rounded-md"
                    >
                      <span>
                        <X />
                      </span>
                      <span className="whitespace-nowrap">
                        {twitterUsername ? twitterUsername : "Connect Twitter"}
                      </span>
                      <span>{twitterUsername ? <Checked /> : ""}</span>
                    </div>
                    <div className="relative">
                      <input
                        placeholder="Enter telegram username"
                        onChange={(e) =>
                          handleInputChange(
                            "telegram",
                            `https://t.me/${e.target.value}`
                          )
                        }
                        className="pr-[1rem] pl-[2rem] py-[0.62rem] font-Poppins text-[0.75rem] text-[#E8E8E8] bg-transparent font-[300] border-[#2A3C46] border border-opacity-[80%] rounded-md"
                      />
                      <span className=" absolute left-2 top-3">
                        <Telegram />
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        placeholder="Enter Discord Link"
                        onChange={(e) =>
                          handleInputChange("discord", e.target.value)
                        }
                        className="pr-[1rem] pl-[1.8rem] py-[0.62rem] font-Poppins text-[0.75rem] text-[#E8E8E8] bg-transparent font-[300] border-[#2A3C46] border border-opacity-[80%] rounded-md"
                      />
                      <span className=" absolute left-2 top-3">
                        <Discord />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center md:items-start justify-between gap-[1.5rem] md:gap-[0rem] flex-col md:flex-row">
                  <div className="flex flex-col items-start gap-[0.6rem]">
                    <div className="">
                      <p className="font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]">
                        Select Category
                      </p>
                    </div>
                    <div className="w-[100%] md:w-[18rem] lg:w-[25rem] 2xl:w-[33rem] flex flex-wrap items-center gap-[0.5rem]">
                      {categories.map((category, index) => {
                        return (
                          <div
                            key={index}
                            onClick={() => handleCategoryClick(category)}
                            className={`cursor-pointer px-[1rem] py-[0.3rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px] ${
                              selectedCategories.includes(category) &&
                              "border-[#4F6C7B] bg-[#09141A]"
                            }`}
                          >
                            {selectedCategories.includes(category) ? (
                              <span>
                                <Checked />
                              </span>
                            ) : (
                              ""
                            )}
                            {/* <span>
                              {selectedCategories.includes(category) ? (
                                <Checked />
                              ) : (
                                ""
                              )}
                            </span> */}
                            <span className="whitespace-nowrap font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
                              {category}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    {selectedCategoriesError && (
                      <p className="text-[#b40e0e] text-[0.75rem] font-[600] font-Poppins">
                        Select category
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="flex flex-col gap-[0.6rem] items-start w-[100%] md:w-[20rem] lg:w-[25rem]">
                      <label
                        htmlFor="spaceDescription"
                        className="flex gap-[0.4rem]"
                      >
                        <p className="font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]">
                          Space Description
                        </p>
                        <span>
                          <Required />
                        </span>
                      </label>

                      <div className="w-[100%] md:w-auto">
                        <textarea
                          required
                          name="spaceDescription"
                          id="spaceDescription"
                          cols="100"
                          rows="7"
                          value={description}
                          onChange={descriptionOnchange}
                          onBlur={descriptionOnBlur}
                          className="bg-transparent outline-none placeholder:text-[#A5A5A5] w-[100%] lg:w-[24rem] font-[275] border-[#2A3C46] border border-opacity-[80%] rounded-lg px-[1rem] py-[0.5rem] text-[0.75rem] font-Poppins"
                        ></textarea>
                        {!descriptionInvalid && (
                          <p className="text-end font-Poppins text-[#768898] text-[0.75rem] font-[300] mt-[-0.3rem]">
                            20 words max
                          </p>
                        )}
                        {descriptionInvalid && (
                          <p className="text-[#b40e0e] text-[0.75rem] font-[600] font-Poppins">
                            Description must not be empty
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between 2xl:mt-[-2.5rem] mb-[1rem] gap-[1.5rem] md:gap-[0rem] flex-col md:flex-row">
                  <div className="flex flex-col items-start gap-[0.6rem] w-[100%] md:w-auto">
                    <label
                      htmlFor="name"
                      className="font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]"
                    >
                      Invite Code
                    </label>
                    <input
                      required
                      type="text"
                      name="invite Code"
                      id="inviteCode"
                      value={inviteCode}
                      onChange={(e) => setInviteCode(e.target.value)}
                      placeholder="Enter a valid invite code"
                      className="bg-transparent outline-none placeholder:text-[#A5A5A5] w-[100%] md:w-[15rem] lg:w-[24rem] font-[275] border-[#2A3C46] border border-opacity-[80%] rounded-lg px-[1rem] py-[0.5rem] text-[0.75rem] font-Poppins"
                    />
                  </div>
                  <div className="md:w-[25rem] flex flex-row md:flex-col items-center justify-center md:items-end md:justify-end">
                    <button
                      type="submit"
                      className="whitespace-nowrap py-[0.5rem] px-[1rem] font-Poppins text-[#060B12] text-[1rem] font-normal rounded-md bg-[#EBEDED]"
                    >
                      Create space
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateSpace;
