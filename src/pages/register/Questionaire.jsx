import { useState, useRef } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";

import { classNames } from "../../utils/Helper";
import ProgressBar from "../../components/form/ProgressBar";

import Role from "../../components/form/sign-up/Role";
import Intension from "../../components/form/sign-up/Intension";
import CompanyName from "../../components/form/sign-up/CompanyName";
import pathConstant from "../../routes/pathConstant";

import { ReactComponent as Star } from "../../assets/svg/star.svg";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

import useAuthUser from "../../hooks/useAuthUser";
import { toast } from "react-toastify";

const Questionaire = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const authUser = useAuthUser();
  // console.log(authUser);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("authToken");
  console.log(token);

  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState("");

  const [state, setState] = useState({
    role: "",
    usage: [],
    companyName: "",
    mediaNetwork: [],
  });

  console.log(state);

  // For Services Component
  const handleCheckboxChange = (title) => {
    if (!state.usage.includes(title)) {
      setState((prevState) => ({
        ...prevState,
        usage: [...prevState.usage, title],
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        usage: prevState.usage.filter((item) => item !== title),
      }));
    }
  };

  // function handleChange(key) {
  //   return (value) => {
  //     if (key === "resume") {
  //       const file = value.target.files[0];
  //       setSelectedFileName(file ? file.name : "");
  //     } else if (key === "selectedFixedType" && state.paymentType === "fixed") {
  //       setState((prevState) => ({
  //         ...prevState,
  //         priceEstimate: value,
  //       }));
  //     } else if (
  //       key === "selectedHourlyType" &&
  //       state.paymentType === "hourly"
  //     ) {
  //       setState((prevState) => ({
  //         ...prevState,
  //         priceEstimate: value,
  //       }));
  //     } else {
  //       setState((prevState) => ({ ...prevState, [key]: value }));
  //     }
  //   };
  // }

  function handleChange(key) {
    return (value) => {
      setState((prevState) => ({ ...prevState, [key]: value }));
    };
  }

  function handleMediaNetworkChange(selectedOption) {
    setState((prevState) => ({
      ...prevState,
      mediaNetwork: [selectedOption],
    }));
  }

  function handleInputChange(key) {
    return (e) => handleChange(key)(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `https://audaxious-auth-api-a107eed7620b.herokuapp.com/api/v1/walkthrough/update`,
        state,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);

      if (token) {
        toast.success("login successful");

        navigate(pathConstant.DASHBOARD);
      }

      // navigate(pathConstant.DASHBOARD);
    } catch (error) {
      console.error(error);
    }
  }

  const contentProps = {
    state,
    setState,
    selectedFileName,
    fileInputRef,
    handleCheckboxChange,
    handleInputChange,
    handleMediaNetworkChange,
    handleChange,
    nextHandler,
    prevHandler,
    handleSubmit,
  };

  const stepComponents = [
    <Role {...contentProps} />,
    <Intension {...contentProps} />,
    <CompanyName {...contentProps} />,
  ];

  function nextHandler() {
    window.scrollTo({
      top: 0,
    });
    setStep(step + 1);
  }

  function prevHandler() {
    window.scrollTo({
      top: 0,
    });
    setStep(step - 1);
  }

  const stepTexts = [
    "What is your role?",
    "What do you intend to use AudaXious for?",
    "What do you intend to use AudaXious for?",
  ];

  return (
    <>
      <Helmet>
        <title>Create Account | Audaxious</title>
        <meta
          name="description"
          content="Create account so you can start trading tokens"
        />
        <link rel="canonical" href={pathConstant.QUESTIONAIRE} />
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="container md:pt-28 py-10 2xl:flex 2xl:justify-center 2xl:flex-col 2xl:min-h-screen">
          <div className="text-[#E8E8E8] font-Poppins flex flex-col justify-center items-center">
            <div className="mr-40">
              <Star />
            </div>
            <div className="mt-6 mb-10">
              <Link to={pathConstant.HOME}>
                <Logo />
              </Link>
            </div>

            <h3 className="text-[22px] leading-[28px] mb-1 font-light font-Bricolage_Grotesque">
              Tell us about yourself{" "}
            </h3>
            <p className="text-[#A5A5A5] font-Poppins text-center md:text-left text-[15px] font-normal leading-[22px] mt-2">
              This helps us optimize your experience with AudaXious
            </p>
          </div>

          <div className="mt-16">
            <div>
              <h2 className="heading-secondary text-white text-center mb-6 text-[18px] font-light font-Poppins">
                {stepTexts[step]}
              </h2>
            </div>

            <div>
              <ProgressBar step={step} totalSteps={stepComponents.length} />
            </div>

            <div className="mt-2">
              {stepComponents.map((component, i) => (
                <div
                  key={i}
                  className={classNames(i === step ? "block" : "hidden")}
                >
                  {component}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#13161E] bg-split_screen bg-no-repeat bg-center hidden lg:block relative">
          <div className="rounded-[4px] border border-[#24343D] absolute bottom-4 left-1/2 transform -translate-x-1/2 p-4">
            <div className="flex items-center gap-4">
              {/* <Chart /> */}
              <p className="text-[#EBEDED] font-Poppins text-[18px] font-light">
                Promote Projects
              </p>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Questionaire;
