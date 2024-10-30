export const formatTime = (timeInMilliseconds: number): string => {
  const minutes = Math.floor(timeInMilliseconds / 1000 / 60);
  const seconds = Math.floor((timeInMilliseconds / 1000) % 60);
  const milliseconds = Math.floor((timeInMilliseconds % 1000) / 10);
  const formattedTime = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}:${milliseconds.toString().padStart(2, "0")}`;
  return formattedTime;
};
