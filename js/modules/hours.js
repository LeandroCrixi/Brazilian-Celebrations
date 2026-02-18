const initHours = () => {
  const week = document.querySelector("[data-week]");
  const days = week.dataset.week.split(",").map(Number);
  const hour = week.dataset.time.split(",").map(Number);
  const now = new Date();
  const currentDay = now.getDay();
  const currentTime = now.getHours();

  const openWeek = days.indexOf(currentDay) !== -1;
  const openTime = currentTime >= hour[0] && currentTime < hour[1];

  if (openWeek && openTime) {
    week.classList.add("open");
  } else {
    week.classList.remove("open");
  }
};

export default initHours();
