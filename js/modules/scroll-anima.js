const initAnimaScroll = () => {
    const sections = document.querySelectorAll('.js-scroll')

    if (sections.length) {
        const animaScroll = () => {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - window.innerHeight * 0.95;
                if (sectionTop < 0) {
                    section.classList.add('active')
                }
            })
        }
        animaScroll()
        window.addEventListener('scroll', animaScroll)
    }
}

export default initAnimaScroll()