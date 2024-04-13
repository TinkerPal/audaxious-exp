import { ReactComponent as Information } from "../assets/svg/dashboardSvg/information.svg";
const PaymentNotificationCard = ({ description, title }) => {
  return (
    <div className=" p-4 mt-0 mb-2 bg-[#07111C] rounded-md lg:pl-6 font-Poppins">
      <div className="flex items-center gap-4">
        <span>
          <Information />
        </span>
        <h3 className="text-[1rem] font-[500] mt-2 md:mt-0 text-white">
          {title}
        </h3>
      </div>
      <p className="mt-2 text-dark-100 text-start text-[#E8E8E8] text-[0.75rem] font-[300]">
        {description}
      </p>
    </div>
  );
};

export default PaymentNotificationCard;
