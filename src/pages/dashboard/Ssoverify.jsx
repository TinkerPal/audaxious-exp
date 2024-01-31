import axios from "axios";
import React, { useEffect, useState } from "react";

const Ssoverify = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function run() {
      try {
        const response = await axios.get(
          "https://audaxious-auth-api-a107eed7620b.herokuapp.com/api/v1/login/success",
          {
            withCredentials: true,
          }
        );

        console.log(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
        setLoading(false);
      }
    }
    run();
  }, []);
  return <div>{loading ? <div>Loading...</div> : <div>Ssoverify</div>}</div>;
};

export default Ssoverify;
