import React from "react";

const SharedHeader = () => {
  return (
    <div className="border-[0.5px] border-[#24343D] rounded-[8px] md:m-5 mt-4 p-4">
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="md:flex md:items-center gap-2"
        >
          <Back />
          <p className="text-white">Back</p>
        </button>

        <div>
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              // { label: "twitter (X)", SvgIcon: PX },
              {
                label: authUser.twitter ? (
                  <a
                    href={`https://twitter.com/${screenName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent"
                  >
                    @{screenName}
                  </a>
                ) : (
                  "twitter (X)"
                ),
                SvgIcon: PX,
              },
              { label: "Instagram", SvgIcon: PIG },
              { label: "Telegram", SvgIcon: PTelegram },
              { label: "Discord", SvgIcon: PDiscord },
              { label: "Facebook", SvgIcon: PFB },
            ].map(({ label, SvgIcon }, index) => {
              return (
                <div key={index} className="relative">
                  <button
                    className={clsx(
                      "flex items-center flex-col gap-2 font-Poppins text-[10px] md:text-[12px] leading-[16px]",
                      tab === index ? "text-[#E8E8E8]" : "text-[#A5A5A5]"
                    )}
                    onClick={() => setTab(index)}
                  >
                    <SvgIcon
                      style={{
                        fill: tab === index ? "#79c4ec" : "#909292",
                      }}
                    />
                    {label}
                  </button>
                  {tab === index && (
                    <div className="absolute -bottom-4 w-full h-[4px] transform -translate-x-1/2 bg-[#0C74F1] left-1/2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="">
          <div className="mt-3 flex -space-x-2 overflow-hidden">
            {authUser?.twitter && (
              <img
                src={profileImageUrl}
                alt="profile-img"
                className="rounded-full"
              />
            )}{" "}
            <button className="border border-[#2A3C46] flex items-center gap-1 p-2.5 bg-[#060B12] rounded-[34px]">
              <p className="text-white font-Poppins text-[14px] font-light">
                Manage People
              </p>
              <ManagePeople />
            </button>
          </div>
        </div>

        <div className="">
          <button
            // onClick={() => setIsOpen(true)}
            className="bg-[#636464] text-[#15151A] rounded-[9px] py-3 px-6 font-Poppins text-[14px] font-normal"
          >
            Schedule Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharedHeader;
