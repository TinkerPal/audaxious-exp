import { useState, useRef } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

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

  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState("");

  const [state, setState] = useState({
    service: [],
    //   selectedOtherServices: [],
    //   inputValue: '',

    //   skills: [],
    //   selectedOtherSkills: [],
    //   otherSkillsValue: '',

    requirementTimeline: "",
    startingPeriod: "",

    //   paymentType: '',
    //   priceEstimate: '',

    fullName: "",
    //   position: '',
    //   workEmail: '',
    //   companyName: '',
    //   otherInformation: '',
  });

  // For Services Component
  const handleCheckboxChange = (title) => {
    if (!state.service.includes(title)) {
      setState((prevState) => ({
        ...prevState,
        service: [...prevState.service, title],
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        service: prevState.service.filter((item) => item !== title),
      }));
    }
  };

  // For Services Component
  //   const handleInput = (event) => {
  //     if (event.key === 'Enter') {
  //       if (!state.selectedOtherServices.includes(event.target.value)) {
  //         setState((prevState) => ({
  //           ...prevState,
  //           selectedOtherServices: [
  //             ...prevState.selectedOtherServices,
  //             event.target.value,
  //           ],
  //           inputValue: '',
  //         }));
  //       }
  //     }
  //   };

  // For Services Component
  //   const handleRemoveService = (i) => {
  //     setState((prevState) => {
  //       const newServices = [...prevState.selectedOtherServices];
  //       newServices.splice(i, 1);
  //       return {
  //         ...prevState,
  //         selectedOtherServices: newServices,
  //       };
  //     });
  //   };

  // For Skills Component
  //   const handleCheckboxChangeSkills = (title) => {
  //     if (!state.skills.includes(title)) {
  //       setState((prevState) => ({
  //         ...prevState,
  //         skills: [...prevState.skills, title],
  //       }));
  //     } else {
  //       setState((prevState) => ({
  //         ...prevState,
  //         skills: prevState.skills.filter((item) => item !== title),
  //       }));
  //     }
  //   };

  // For Skills Component
  //   const handleInputSkills = (event) => {
  //     if (event.key === 'Enter') {
  //       if (!state.selectedOtherSkills.includes(event.target.value)) {
  //         setState((prevState) => ({
  //           ...prevState,
  //           selectedOtherSkills: [
  //             ...prevState.selectedOtherSkills,
  //             event.target.value,
  //           ],
  //           otherSkillsValue: '',
  //         }));
  //       }
  //     }
  //   };

  // For Skills Component
  //   const handleRemoveServiceSkills = (i) => {
  //     setState((prevState) => {
  //       const newSkills = [...prevState.selectedOtherSkills];
  //       newSkills.splice(i, 1);
  //       return {
  //         ...prevState,
  //         selectedOtherSkills: newSkills,
  //       };
  //     });
  //   };

  function handleInputChange(key) {
    return (e) => handleChange(key)(e.target.value);
  }

  function handleChange(key) {
    //   return (value) => {
    //     if (key === 'resume') {
    //       const file = value.target.files[0];
    //       setSelectedFileName(file ? file.name : '');
    //     } else if (key === 'selectedFixedType' && state.paymentType === 'fixed') {
    //       setState((prevState) => ({
    //         ...prevState,
    //         priceEstimate: value,
    //       }));
    //     } else if (
    //       key === 'selectedHourlyType' &&
    //       state.paymentType === 'hourly'
    //     ) {
    //       setState((prevState) => ({
    //         ...prevState,
    //         priceEstimate: value,
    //       }));
    //     } else {
    //       setState((prevState) => ({ ...prevState, [key]: value }));
    //     }
    //   };
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      nextHandler();
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
    // handleInput,
    // handleRemoveService,
    handleInputChange,
    // handleCheckboxChangeSkills,
    // handleInputSkills,
    // handleRemoveServiceSkills,
    handleChange,
    nextHandler,
    prevHandler,
    handleSubmit,
  };

  const stepComponents = [
    <Role {...contentProps} />,
    <Intension {...contentProps} />,
    <CompanyName {...contentProps} />,
    // <PaymentType {...contentProps} />,
    // <Form {...contentProps} />,
    // <ThankYou />,
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
              <ProgressBar step={step} totalSteps={stepComponents.length} />
              <p className="text-[#9BA6B7] font-albert mt-4">
                Question {step + 1}/{stepComponents.length}
              </p>
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
