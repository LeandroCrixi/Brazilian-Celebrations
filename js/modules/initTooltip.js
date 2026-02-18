const initTooltip = () => {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  const onMouseOver = (e) => {
    const tooltipBox = createTooltipBox(e);
    tooltipBox.style.top = e.pageY + "px";
    tooltipBox.style.left = e.pageX + "px";

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = e.currentTarget;
    onMouseMove.tooltipBox = tooltipBox;
    onMouseMove.element = e.currentTarget;
    e.currentTarget.addEventListener("mouseleave", onMouseLeave);
    e.currentTarget.addEventListener("mousemove", onMouseMove);
  };

  const onMouseLeave = {
    tooltipBox: "",
    element: null,
    handleEvent() {
      if (this.tooltipBox) {
        this.tooltipBox.remove();
      }
      if (this.element) {
        this.element.removeEventListener("mouseleave", onMouseLeave);
        this.element.removeEventListener("mousemove", onMouseMove);
      }
    },
  };

  const onMouseMove = {
    tooltipBox: "",
    element: null,
    handleEvent(e) {
      this.tooltipBox.style.top = e.pageY + 20 + "px";
      this.tooltipBox.style.left = e.pageX + 20 + "px";
    },
  };

  const createTooltipBox = (e) => {
    const tooltipBox = document.createElement("div");
    const text = e.currentTarget.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  };

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
};

export default initTooltip();
