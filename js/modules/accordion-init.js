const initAccordion = () => {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'active'
    if (accordionList.length) {

        accordionList[0].classList.add(activeClass)
        accordionList[0].nextElementSibling.classList.add(activeClass)

        const activeAccordion = (e) => {
            const dt = e.currentTarget
            dt.classList.toggle(activeClass)
            const dd = dt.nextElementSibling
            dd.classList.toggle(activeClass)
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }
}

export default initAccordion()