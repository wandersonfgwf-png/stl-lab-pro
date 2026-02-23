
import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 14,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return { minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 font-mono text-emerald-500 font-bold">
      <div className="bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
        {String(timeLeft.minutes).padStart(2, '0')}
      </div>
      <span>:</span>
      <div className="bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
        {String(timeLeft.seconds).padStart(2, '0')}
      </div>
    </div>
  );
};

export default Countdown;
