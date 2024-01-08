import { RadioGroup } from "@headlessui/react";
import { Link } from "react-router-dom";
import FormRadioCard from "../FormRadioCard";

const timelines = [
  {
    title: "Social media manager",
  },
  {
    title: "Product owner",
  },
  { title: "Product manager" },
  { title: "Founder" },
  { title: "Business Owner" },
  { title: "Other" },
];

const Role = ({ state, handleChange, nextHandler }) => {
  return (
    <>
      <h2 className="heading-secondary text-white text-center">
        What is your role?
      </h2>
      <div className="mt-14">
        {/* <div className="flex items-center mb-3">
          <p className="text-sm font-bold font-albert text-white">
            Which best describes your requirement/engagement timeline?
          </p>
          <span className="text-[#EB5757] ml-1">*</span>
        </div> */}

        <RadioGroup
          onChange={handleChange("requirementTimeline")}
          className="mt-2"
        >
          <div className="flex flex-wrap gap-3">
            {timelines.map((timeline, i) => (
              <RadioGroup.Option key={i} value={timeline.title}>
                {({ checked }) => (
                  <FormRadioCard
                    title={timeline.title}
                    // img={timeline.img}
                    checked={checked}
                  />
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* <div className="mt-14">
        <div className="flex items-center mb-3">
          <p className="text-sm font-bold font-albert text-white">
            When are you likely to start this project ?
          </p>
          <span className="text-[#EB5757] ml-1">*</span>
        </div>

        <RadioGroup onChange={handleChange("startingPeriod")} className="mt-2">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
            {startTimes.map((time, i) => (
              <RadioGroup.Option key={i} value={time.title}>
                {({ checked }) => (
                  <FormRadioCard
                    title={time.title}
                    img={time.img}
                    checked={checked}
                  />
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div> */}

      <div className="flex flex-col items-center justify-between gap-6 md:flex-row mt-14 md:mt-20">
        <div className="flex items-center justify-center gap-4 md:order-2">
          {/* <button
          className='btn btn--outline'
          type='button'
          onClick={prevHandler}
        >
          Previous
        </button> */}
          <button
            className="pr-5 btn btn--primary"
            type="button"
            onClick={nextHandler}
            // disabled={
            //   state.requirementTimeline.length === 0 ||
            //   state.startingPeriod.length === 0
            // }
          >
            Next
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.293 3.29279C10.4805 3.10532 10.7348 3 11 3C11.2652 3 11.5195 3.10532 11.707 3.29279L17.707 9.29279C17.8945 9.48031 17.9998 9.73462 17.9998 9.99979C17.9998 10.265 17.8945 10.5193 17.707 10.7068L11.707 16.7068C11.5184 16.8889 11.2658 16.9897 11.0036 16.9875C10.7414 16.9852 10.4906 16.88 10.3052 16.6946C10.1198 16.5092 10.0146 16.2584 10.0123 15.9962C10.01 15.734 10.1108 15.4814 10.293 15.2928L14.586 10.9998H3C2.73478 10.9998 2.48043 10.8944 2.29289 10.7069C2.10536 10.5194 2 10.265 2 9.99979C2 9.73457 2.10536 9.48022 2.29289 9.29268C2.48043 9.10514 2.73478 8.99979 3 8.99979H14.586L10.293 4.70679C10.1055 4.51926 10.0002 4.26495 10.0002 3.99979C10.0002 3.73462 10.1055 3.48031 10.293 3.29279Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        {/* <Link
          href="/contacts"
          className="pl-4 pr-6 btn btn--outline md:order-1"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 2C5.73478 2 5.48043 2.10536 5.29289 2.29289C5.10536 2.48043 5 2.73478 5 3V4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V6C18 5.46957 17.7893 4.96086 17.4142 4.58579C17.0391 4.21071 16.5304 4 16 4H15V3C15 2.73478 14.8946 2.48043 14.7071 2.29289C14.5196 2.10536 14.2652 2 14 2C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V4H7V3C7 2.73478 6.89464 2.48043 6.70711 2.29289C6.51957 2.10536 6.26522 2 6 2ZM6 7C5.73478 7 5.48043 7.10536 5.29289 7.29289C5.10536 7.48043 5 7.73478 5 8C5 8.26522 5.10536 8.51957 5.29289 8.70711C5.48043 8.89464 5.73478 9 6 9H14C14.2652 9 14.5196 8.89464 14.7071 8.70711C14.8946 8.51957 15 8.26522 15 8C15 7.73478 14.8946 7.48043 14.7071 7.29289C14.5196 7.10536 14.2652 7 14 7H6Z"
              fill="black"
            />
          </svg>
          Skip and Schedule consult
        </Link> */}
      </div>
    </>
  );
};

export default Role;
