import { useState } from "react";
import EnterUserName from "./EnterUserName";
import Login from "./Login";
import VerifyEmail from "./VerifyEmail";

import { useAccount } from "wagmi";

const Authentication = () => {
  const { isConnected, address } = useAccount();

  const [verifyEmal, setVerifyEmal] = useState(false);
  const [userName, setUserName] = useState(false);
  return (
    <div>
      {!verifyEmal && !userName && (
        <Login onVerifyEmail={setVerifyEmal} onEnterUserName={setUserName} />
      )}
      {verifyEmal && !userName && (
        <VerifyEmail
          onEnterUserName={setUserName}
          onVerifyEmail={setVerifyEmal}
        />
      )}
      {!verifyEmal && userName && <EnterUserName />}
      {/* {isConnected && <EnterUserName />} */}
    </div>
  );
};

export default Authentication;
