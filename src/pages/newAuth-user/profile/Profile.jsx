import Points from "./Points";
import Tokens from "./Tokens";
import WalletDetails from "./WalletDetails";

const Profile = () => {
  
  return (
    <div
      className="text-[#FFF] mt-[-1.6rem] ml-[0.5rem] md:ml-[2rem] xl:ml-[1rem] container"
      style={{ wordBreak: "break-all" }}
    >
      <div className="py-[2.56rem] px-[0.5rem] md:px-[1.19rem]">
        <Points />
        <WalletDetails />
        <Tokens />
      </div>
    </div>
  );
};

export default Profile;
