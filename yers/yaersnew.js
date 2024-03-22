const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;
/!haha tame/;

const counter = () => {
  const newYearDate = new Date("1 jan 2025").getTime();
  const currnentDate = new Date().getTime();
  const diffrentData = newYearDate - currnentDate;
  const days = Math.floor(diffrentData / oneDay);
  const hours = Math.floor((diffrentData % oneDay) / oneHour);
  const minutes = Math.floor((diffrentData % oneHour) / oneMinute);
  const seconds = Math.floor((diffrentData % oneMinute) / 1000);

  const valuse = [days, hours, minutes, seconds];
  const deadlineMants = document.querySelectorAll(".dead-line-number");
  deadlineMants.forEach((item , index)=>{
    item.innerHTML = valuse[index];
});
};
const interval = setInterval(counter, 1000);
