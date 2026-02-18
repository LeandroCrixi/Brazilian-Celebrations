import outsideClick from "./outsideClick.js";

const menuMobile = () => {
  const menuBtn = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ["click", "touchstart"];

  if (menuBtn) {
    const openMenu = (e) => {
      menuBtn.classList.add("active");
      menuList.classList.add("active");
      outsideClick(menuList, events, () => {
        menuBtn.classList.remove("active");
        menuList.classList.remove("active");
      });
    };
    events.forEach((userEvent) => {
      menuBtn.addEventListener(userEvent, openMenu);
    });
  }
};

export default menuMobile();
