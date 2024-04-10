const Pagination = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-2 md:gap-5">
        <div className="flex items-center gap-2 font-Poppins text-[0.75rem] font-[400] text-[#E8E8E8] py-[0.5rem] px-[0.6rem] md:px-[1rem] border border-[#2A3C4680] rounded-md hover:bg-[#D5EDF91A] cursor-pointer">
          <span>{"<<"}</span>
          <p className="text-[0.65rem]">Previous</p>
        </div>
        <div className="flex items-center">
          <div className="font-Poppins text-[0.75rem] font-[400] text-[#E8E8E8] py-[0.5rem] px-[0.6rem] md:px-[1rem] border border-[#2A3C4680] hover:bg-[#D5EDF91A] cursor-pointer">
            <p className="">1</p>
          </div>
          <div className="font-Poppins text-[0.75rem] font-[400] text-[#E8E8E8] py-[0.5rem] px-[0.6rem] md:px-[1rem] border border-[#2A3C4680] hover:bg-[#D5EDF91A] cursor-pointer">
            <p className="">2</p>
          </div>
          <div className="font-Poppins text-[0.75rem] font-[400] text-[#E8E8E8] py-[0.5rem] px-[0.6rem] md:px-[1rem] border border-[#2A3C4680] hover:bg-[#D5EDF91A] cursor-pointer">
            <p className="">3</p>
          </div>
          <div className="font-Poppins text-[0.75rem] font-[400] text-[#E8E8E8] py-[0.5rem] px-[0.6rem] md:px-[1rem] border border-[#2A3C4680] hover:bg-[#D5EDF91A] cursor-pointer">
            <p className="">...</p>
          </div>
          <div className="font-Poppins text-[0.75rem] font-[400] text-[#E8E8E8] py-[0.5rem] px-[0.6rem] md:px-[1rem] border border-[#2A3C4680] hover:bg-[#D5EDF91A] cursor-pointer">
            <p className="">9</p>
          </div>
          <div className="font-Poppins text-[0.75rem] font-[400] text-[#E8E8E8] py-[0.5rem] px-[0.6rem] md:px-[1rem] border border-[#2A3C4680] hover:bg-[#D5EDF91A] cursor-pointer">
            <p className="">10</p>
          </div>
        </div>
        <div className="flex items-center gap-2 font-Poppins text-[0.75rem] font-[400] text-[#E8E8E8] py-[0.5rem] px-[0.6rem] md:px-[1rem] border border-[#2A3C4680] rounded-md hover:bg-[#D5EDF91A] cursor-pointer">
          <span>{">>"}</span>
          <p className="text-[0.65rem]">Next</p>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
