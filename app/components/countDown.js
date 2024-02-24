
import { useEffect, useState } from "react";

export default function CountdownTimer({ countdown }) {
  

  const calculateTimeLeft = () => {
    const difference = +new Date('2024-02-26T15:21:19.586Z') - +new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-3 xs:space-x-1 items-center">
      <p className=" font-semibold text-[20px] py-3 xms:pl-3 xs:pl-2 text-black xs:text-xs">
       {countdown?.name} Ends In : 
      </p>
      <div className="flex space-x-2 xms:space-x-1 xs:space-x-0 items-center">
        <p className="bg-red-500 px-2 py-1 text-white text-sm font-semibold">
          {timeLeft?.days}d
        </p>
        <p className="text-black">:</p>
        <p className="bg-red-500 px-2 py-1 text-white text-sm font-semibold">
          {timeLeft?.hours}h
        </p>

        <p className="text-black">:</p>
        <p className="bg-red-500 px-2 py-1 text-white text-sm font-semibold">
          {timeLeft?.minutes}m
        </p>
        <p className="text-black">:</p>
        <p className="bg-red-500 px-2 py-1 text-white text-sm font-semibold">
          {timeLeft?.seconds}s
        </p>
      </div>
    </div>
  
  );
}
