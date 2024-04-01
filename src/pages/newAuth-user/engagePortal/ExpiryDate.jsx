import { useState, useEffect } from "react";
import dayjs from "dayjs";

const ExpiryDate = ({ expiryDate }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = dayjs();
      const expiry = dayjs(expiryDate);
      const diffInHours = expiry.diff(now, "hour");

      if (diffInHours <= 0) {
        setTimeLeft("Expired");
      } else if (diffInHours <= 24) {
        setTimeLeft(
          `${diffInHours} ${diffInHours === 1 ? "hour" : "hours"} left`
        );
      } else {
        const diffInDays = expiry.diff(now, "day");
        setTimeLeft(`${diffInDays} ${diffInDays === 1 ? "day" : "days"} left`);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000 * 60); // Update every minute

    return () => clearInterval(timer);
  }, [expiryDate]);

  return (
    <span className="text-[#929192] font-[500] text-[0.625rem] whitespace-nowrap">
      {timeLeft}
    </span>
  );
};

export default ExpiryDate;
