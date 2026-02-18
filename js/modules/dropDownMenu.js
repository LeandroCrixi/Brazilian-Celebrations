const dropDownMenu = () => {
  const dropdownMenus = document.querySelectorAll("[data-dropdown");

  const handleClick = (e) => {
    e.preventDefault();
    const menu = e.currentTarget;
    menu.classList.add("active");
    outsideClick(menu, () => {
      menu.classList.remove('active');
    });
  };

  dropdownMenus.forEach((menu) => {
    // menu.addEventListener("touchstart", handleClick);
    // menu.addEventListener("click", handleClick)
    [("touchstart", "click")].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
};

const outsideClick = (element, callback) => {
  const html = document.documentElement;

  const handleClick = (event) => {
    if (!element.contains(event.target)) {
      callback();
      html.removeEventListener("click", handleClick);
    }
  };
  setTimeout(() => {
    html.addEventListener("click", handleClick);
  });
};

export default dropDownMenu();
