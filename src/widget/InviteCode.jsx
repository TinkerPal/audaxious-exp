const InviteCode = ({ inviteCode, setInviteCode }) => {
  return (
    <div className="flex flex-col items-start gap-[0.6rem] w-[100%] md:w-auto">
      <label
        htmlFor="name"
        className="font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]"
      >
        Invite Code
      </label>
      <input
        required
        type="text"
        name="invite Code"
        id="inviteCode"
        value={inviteCode}
        onChange={(e) => setInviteCode(e.target.value)}
        placeholder="Enter a valid invite code"
        className="bg-transparent outline-none placeholder:text-[#A5A5A5] w-[100%] md:w-[15rem] lg:w-[24rem] font-[275] border-[#2A3C46] border border-opacity-[80%] rounded-lg px-[1rem] py-[0.5rem] text-[0.75rem] font-Poppins"
      />
    </div>
  );
};

export default InviteCode;
