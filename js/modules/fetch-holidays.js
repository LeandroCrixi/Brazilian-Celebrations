import initAnimaNumbers from "./anima-numbers.js";

const initFetchHolidays = () => {
  const fetchHolidays = async (url) => {
    try {
      const eventRes = await fetch(url);
      const eventJSON = await eventRes.json();
      const numbersGrid = document.querySelector(".numbers-grid");

      eventJSON.forEach((event) => {
        const divEvent = createEvent(event);
        numbersGrid.appendChild(divEvent);
      });
      initAnimaNumbers;
    } catch (error) {
      console.log(error);
    }
  };

  const createEvent = (event) => {
    const div = document.createElement("div");
    div.classList.add("number-celebration");
    div.innerHTML = `<h3>${event.holiday}</h3> <p>${event.description}</p> <span data-number>${event.total}</span>`;

    return div;
  };

  fetchHolidays("../../numbersapi.json");
};

export default initFetchHolidays();
