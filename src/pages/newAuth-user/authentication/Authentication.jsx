import { useState } from "react";
import EnterUserName from "./EnterUserName";
import Login from "./Login";
import VerifyEmail from "./VerifyEmail";

const Authentication = () => {
  const [verifyEmal, setVerifyEmal] = useState(false);
  const [userName, setUserName] = useState(false);
  return (
    <div>
      {!verifyEmal && !userName && <Login onVerifyEmail={setVerifyEmal} />}
      {verifyEmal && !userName && (
        <VerifyEmail
          onEnterUserName={setUserName}
          onVerifyEmail={setVerifyEmal}
        />
      )}
      {!verifyEmal && userName && <EnterUserName />}
    </div>
  );
};

export default Authentication;
