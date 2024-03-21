const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;
const oneSecond = 1000;
/!haha tame/;

const counter = () => {
  const newyYearDate = new Date("1jan 2025").getTime();
  const CurrantDate = new Date().getTime();
  const diffrentTime = newyYearDate - CurrantDate;
  const Days = Math.floor(diffrentTime / oneDay);
};

/!    تایم /;
const setInterval = (counter, 1000);
