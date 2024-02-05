import axios from "axios";
import React, { useEffect, useState } from "react";

const Ssoverify = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function run() {
      try {
        const response = await axios.get(
          "https://api.audaxious.com/api/v1/login/success",
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
  // return (
  //   <div>
  //     {loading ? (
  //       <div className="flex flex-col justify-center items-center min-h-screen text-white text-base">
  //         Loading...
  //       </div>
  //     ) : (
  //       <div className="flex flex-col justify-center items-center min-h-screen text-white text-base">
  //         Ssoverify
  //       </div>
  //     )}
  //   </div>
  // );
};

export default Ssoverify;
