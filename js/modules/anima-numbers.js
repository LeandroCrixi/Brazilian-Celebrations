
const initAnimaNumbers = () => {
  const animaNumbers = () => {
    const numbers = document.querySelectorAll("[data-number]");
    numbers.forEach((number) => {
      const total = +number.innerText;
      const increment = Math.floor(total / 100); // 100 steps total
      let start = 0;

      const timer = setInterval(() => {
        start += increment;
        number.innerText = start;
        if (start >= total) {
          number.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  };

  const observerTarget = document.querySelector(".numbers");
  let observer;
  const handleMutation = (mutation) => {
    if (mutation[0].target.classList.contains("active")) {
      observer.disconnect();
      animaNumbers();
    }
  };
  if (observerTarget) {
    observer = new MutationObserver(handleMutation);
    observer.observe(observerTarget, { attributes: true });
  }
};

export default initAnimaNumbers();
