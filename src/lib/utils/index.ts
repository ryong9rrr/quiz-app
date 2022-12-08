export const getTime = (totalSec: number) => {
  const hour = Math.floor(totalSec / 3600);
  totalSec %= 3600;
  const min = Math.floor(totalSec / 60);
  totalSec %= 60;
  const sec = Math.floor(totalSec);
  return [hour, min, sec];
};

export const getElapsedTime = (startTime: number) => {
  const endTime = Date.now();
  const ms = endTime - startTime;
  return getTime(ms / 1000);
};
