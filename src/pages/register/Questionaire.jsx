import { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { classNames } from "../../utils/Helper";
import ProgressBar from "../../components/form/ProgressBar";

import Role from "../../components/form/sign-up/Role";
import Intension from "../../components/form/sign-up/Intension";
import CompanyName from "../../components/form/sign-up/CompanyName";
import pathConstant from "../../routes/pathConstant";

import { ReactComponent as Star } from "../../assets/svg/star.svg";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

const Questionaire = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const user = searchParams.get("user");

  const [state, setState] = useState({
    role: "",
    usage: [],
    companyName: "",
    mediaNetwork: null,
  });

  // For Usage Component
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

  function handleChange(key) {
    return (value) => {
      setState((prevState) => ({ ...prevState, [key]: value }));
    };
  }

  function handleMediaNetworkChange(mediaNetwork) {
    setState((prevState) => ({ ...prevState, mediaNetwork }));
  }

  function handleInputChange(key) {
    return (e) => handleChange(key)(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `https://audaxious-auth-api-a107eed7620b.herokuapp.com/api/v1/walkthrough/update/${user}`,
        {
          ...state,
          mediaNetwork: state.mediaNetwork ? [state.mediaNetwork.value] : null,
        }
      );

      toast.success("Thank you for completing the questionnaire!");

      navigate(pathConstant.LOGIN);
    } catch (error) {
      console.error(error);
    }
  }

  const contentProps = {
    state,
    setState,
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
