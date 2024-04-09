import bannerIcon from "../../../assets/svg/bannerIcon.png";
export default function EngageBanner({ title, description }) {
  return (
    <div className="flex-wrap items-center gap-4 p-4 mt-0 mb-2 md:flex md:flex-nowrap bg-[#07111c] rounded-2xl lg:pl-6">
      <img src={bannerIcon} />
      <div>
        <h3 className="text-[28px] font-bold mt-2 md:mt-0 text-white">
          {title}
        </h3>
        <p className="mt-2 text-dark-100">
          {description}
          <a
            className="bg-clip-text bg-gradient-to-r ml-2 text-transparent from-[#4DFFDF] to-[#4DA1FF]"
            href="https://docs.audaxious.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about how it works
          </a>
        </p>
      </div>
      {/* <div className="flex-shrink-0 h-full p-4 mt-4 bg-gradient_custom rounded-xl md:mt-0">
        <p className="text-sm font-bold text-white">Add Bridge Liquidity</p>
        <p className="mt-5 text-sm font-bold text-white">
          Up to{" "}
          <span className="text-[#33ED8D] text-[34px] font-bold">78.0%</span>
        </p>
      </div> */}
    </div>
  );
}
