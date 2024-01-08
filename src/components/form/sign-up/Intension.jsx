import { Link } from "react-router-dom";
import FormCheckboxCard from "../FormCheckBoxCard";

const services = [
  {
    title: "Earn rewards",
  },
  {
    title: "Boost engagements",
  },
  {
    title: "Learn new things",
  },
  {
    title: "Promote Product/Business",
  },
  {
    title: "Create cummunity",
  },
  {
    title: "Nothing really",
  },
  {
    title: "Other",
  },
];

const Intension = ({
  state,
  handleCheckboxChange,
  handleInput,
  handleRemoveService,
  handleInputChange,
  prevHandler,
  nextHandler,
}) => {
  return (
    <>
      <h2 className="heading-secondary text-white text-center">
        What do you intend to use AudaXious for?
      </h2>
      <div className="flex flex-wrap gap-3 mt-14">
        {services.map((service, i) => (
          <FormCheckboxCard
            key={i}
            title={service.title}
            // img={service.img}
            onClick={handleCheckboxChange}
          />
        ))}
      </div>
      {/* <div className='mt-14'>
      <label
        className='text-sm font-bold text-black'
        htmlFor='services-input'
      >
        Others (more options)
      </label>
      <input
        className='block w-full p-4 mt-2 text-sm bg-white shadow-sm placeholder:text-gray-200 rounded-xl'
        type='text'
        id='services-input'
        placeholder='Type category'
        onKeyDown={handleInput}
        value={state.inputValue}
        onChange={handleInputChange('inputValue')}
      />

      <div className='flex flex-wrap gap-3 mt-4'>
        {state.selectedOtherServices.map((service, i) => (
          <button
            type='button'
            className='flex items-center gap-3 px-5 py-3 text-sm font-bold text-white bg-black rounded-full font-albert'
            key={service}
            onClick={() => handleRemoveService(i)}
          >
            {service}

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
                d='M4.29279 4.29357C4.48031 4.1061 4.73462 4.00078 4.99979 4.00078C5.26495 4.00078 5.51926 4.1061 5.70679 4.29357L9.99979 8.58657L14.2928 4.29357C14.385 4.19806 14.4954 4.12188 14.6174 4.06947C14.7394 4.01706 14.8706 3.98947 15.0034 3.98832C15.1362 3.98717 15.2678 4.01247 15.3907 4.06275C15.5136 4.11303 15.6253 4.18728 15.7192 4.28117C15.8131 4.37507 15.8873 4.48672 15.9376 4.60962C15.9879 4.73251 16.0132 4.86419 16.012 4.99697C16.0109 5.12975 15.9833 5.26097 15.9309 5.38297C15.8785 5.50498 15.8023 5.61532 15.7068 5.70757L11.4138 10.0006L15.7068 14.2936C15.8889 14.4822 15.9897 14.7348 15.9875 14.997C15.9852 15.2592 15.88 15.51 15.6946 15.6954C15.5092 15.8808 15.2584 15.986 14.9962 15.9882C14.734 15.9905 14.4814 15.8897 14.2928 15.7076L9.99979 11.4146L5.70679 15.7076C5.51818 15.8897 5.26558 15.9905 5.00339 15.9882C4.74119 15.986 4.49038 15.8808 4.30497 15.6954C4.11956 15.51 4.01439 15.2592 4.01211 14.997C4.00983 14.7348 4.11063 14.4822 4.29279 14.2936L8.58579 10.0006L4.29279 5.70757C4.10532 5.52004 4 5.26573 4 5.00057C4 4.73541 4.10532 4.4811 4.29279 4.29357Z'
                fill='white'
              />
            </svg>
          </button>
        ))}
      </div>
    </div> */}

      <div className="flex flex-col items-center justify-between gap-6 md:flex-row mt-14 md:mt-20">
        {/* <div className="flex items-center justify-between gap-4 md:order-2"> */}
        <button
          className="btn btn--outline"
          type="button"
          onClick={prevHandler}
        >
          Previous
        </button>

        <button
          className="pr-5 btn btn--primary md:order-2"
          type="button"
          onClick={nextHandler}
          disabled={
            state.service.length === 0
            //   &&
            //   state.selectedOtherServices.length === 0
          }
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

export default Intension;
