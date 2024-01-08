import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Input from "../Input";

const CompanyName = ({
  state,
  prevHandler,
  handleChange,
  handleInputChange,
  handleSubmit,
  selectedFileName,
  fileInputRef,
}) => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (
      state.fullName.length
      // &&
      // state.position.length &&
      // state.workEmail.length &&
      // state.companyName.length
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [
    state.fullName,
    // state.position, state.workEmail, state.companyName
  ]);

  return (
    <>
      <h2 className="heading-secondary">Contact Info and additional info</h2>

      <div className="space-y-8 mt-14">
        <Input
          type="text"
          name="full-name"
          //   label="Full Name"
          placeHolder="Enter Company / Personal Username"
          value={state.fullName}
          //   required
          onChange={handleInputChange("fullName")}
        />

        {/* <div className='grid gap-8 md:grid-cols-2'>
          <Input
            type='text'
            name='position'
            label='Position'
            placeHolder='Type category'
            value={state.position}
            required
            onChange={handleInputChange('position')}
          />
          <Input
            type='email'
            name='work-email'
            label='Work Email'
            placeHolder='Type category'
            value={state.workEmail}
            required
            onChange={handleInputChange('workEmail')}
          />
        </div> */}

        {/* <div className='max-width-[684px]'>
          <Input
            type='text'
            name='company-name'
            label='Company name'
            placeHolder='Type category'
            value={state.companyName}
            required
            onChange={handleInputChange('companyName')}
          />
        </div> */}

        {/* <div>
          <TextArea
            name='text'
            label='Others Information (optional)'
            placeHolder='Type category'
            value={state.otherInformation}
            onChange={handleInputChange('otherInformation')}
          />

          <label
            htmlFor='file-upload'
            className='py-3 pl-4 pr-6 inline-flex items-center gap-2.5 cursor-pointer mt-4 rounded-full border border-[#000]'
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V8C18 7.46957 17.7893 6.96086 17.4142 6.58579C17.0391 6.21071 16.5304 6 16 6H11L9 4H4ZM11 9C11 8.73478 10.8946 8.48043 10.7071 8.29289C10.5196 8.10536 10.2652 8 10 8C9.73478 8 9.48043 8.10536 9.29289 8.29289C9.10536 8.48043 9 8.73478 9 9V10.586L8.707 10.293C8.61475 10.1975 8.50441 10.1213 8.3824 10.0689C8.2604 10.0165 8.12918 9.9889 7.9964 9.98775C7.86362 9.9866 7.73194 10.0119 7.60905 10.0622C7.48615 10.1125 7.3745 10.1867 7.2806 10.2806C7.18671 10.3745 7.11246 10.4861 7.06218 10.609C7.0119 10.7319 6.9866 10.8636 6.98775 10.9964C6.9889 11.1292 7.01649 11.2604 7.0689 11.3824C7.12131 11.5044 7.19749 11.6148 7.293 11.707L9.293 13.707L9.295 13.709C9.38758 13.8016 9.49749 13.875 9.61845 13.9251C9.73942 13.9752 9.86907 14.001 10 14.001C10.1309 14.001 10.2606 13.9752 10.3815 13.9251C10.5025 13.875 10.6124 13.8016 10.705 13.709L10.707 13.707L12.707 11.707C12.8892 11.5184 12.99 11.2658 12.9877 11.0036C12.9854 10.7414 12.8802 10.4906 12.6948 10.3052C12.5094 10.1198 12.2586 10.0146 11.9964 10.0123C11.7342 10.01 11.4816 10.1108 11.293 10.293L11 10.586V9Z'
                fill='#000'
              />
            </svg>

            <span className='text-[#000] font-albert font-bold'>
              {selectedFileName || 'Upload your CV'}
            </span>
            <input
              ref={fileInputRef}
              onChange={handleChange('resume')}
              type='file'
              className='sr-only'
              id='file-upload'
            />
          </label>
        </div> */}
      </div>

      <div className="flex flex-col items-center justify-between gap-6 md:flex-row mt-14 md:mt-20">
        {/* <div className="flex items-center gap-4 md:order-2"> */}
        <button
          className="btn btn--outline"
          type="button"
          onClick={prevHandler}
        >
          Previous
        </button>
        <button
          className="pr-5 btn btn--primary"
          type="button"
          onClick={handleSubmit}
          disabled={disabled}
        >
          Submit
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
        {/* </div> */}

        {/* <Link
          href='/contacts'
          className='pl-4 pr-6 btn btn--outline md:order-1'
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M6 2C5.73478 2 5.48043 2.10536 5.29289 2.29289C5.10536 2.48043 5 2.73478 5 3V4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V6C18 5.46957 17.7893 4.96086 17.4142 4.58579C17.0391 4.21071 16.5304 4 16 4H15V3C15 2.73478 14.8946 2.48043 14.7071 2.29289C14.5196 2.10536 14.2652 2 14 2C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V4H7V3C7 2.73478 6.89464 2.48043 6.70711 2.29289C6.51957 2.10536 6.26522 2 6 2ZM6 7C5.73478 7 5.48043 7.10536 5.29289 7.29289C5.10536 7.48043 5 7.73478 5 8C5 8.26522 5.10536 8.51957 5.29289 8.70711C5.48043 8.89464 5.73478 9 6 9H14C14.2652 9 14.5196 8.89464 14.7071 8.70711C14.8946 8.51957 15 8.26522 15 8C15 7.73478 14.8946 7.48043 14.7071 7.29289C14.5196 7.10536 14.2652 7 14 7H6Z'
              fill='black'
            />
          </svg>
          Skip and Schedule consult
        </Link> */}
      </div>
    </>
  );
};

export default CompanyName;
