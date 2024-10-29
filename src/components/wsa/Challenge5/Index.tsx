import { useRef, useState } from "react";

export default function Index() {
  const [isStart, setStart] = useState(false);
  const [time, setTime] = useState<number>(0);
  const [laps, setLaps] = useState<string[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleStartStop = () => {
    if (isStart) {
      clearInterval(intervalRef.current!);
      setStart(false);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
      setStart(true);
    }
  };

  const handleResetLap = () => {
    if (isStart) {
      setLaps((prev) => [...prev, formatTime(time)]);
    } else {
      setTime(0);
      setLaps([]);
    }
  };

  const padTime = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
  };

  const isResetDisabled = !isStart && time === 0 && laps.length === 0;

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <h1 className="text-red-700 text-5xl my-20">Stopwatch</h1>
      <div className="text-7xl">{formatTime(time)}</div>
      <div className="flex gap-20 mt-10 text-5xl font-bold mb-10">
        <div className="w-[180px] h-[80px] bg-gray-200 border-4 border-red-500 rounded-md flex justify-center items-center">
          <button className="w-full h-full" onClick={handleStartStop}>
            {isStart ? "Stop" : "Start"}
          </button>
        </div>
        <div className="w-[180px] h-[80px] bg-gray-200 border-4 border-red-500 rounded-md flex justify-center items-center">
          <button
            className={`w-full h-full ${
              isResetDisabled && "opacity-50 cursor-not-allowed"
            }`}
            onClick={handleResetLap}
            disabled={isResetDisabled}
          >
            {isStart ? "Lap" : "Reset"}
          </button>
        </div>
      </div>
      {laps.length > 0 && (
        <div className="flex flex-col gap-2">
          <div className="flex gap-14">
            <div className="flex justify-center items-center w-[140px] h-[40px] text-3xl">
              Laps
            </div>
            <div className="flex justify-center items-center w-[140px] h-[40px] text-3xl">
              Time
            </div>
          </div>
          {laps.map((lap, idx) => (
            <div key={lap} className="flex gap-14">
              <div className="flex justify-center items-center w-[140px] h-[40px] text-3xl">
                {idx}
              </div>
              <div className="flex justify-center items-center w-[140px] h-[40px] text-3xl">
                {lap}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
