const initScroll = () => {
    const innerLinks = document.querySelectorAll('.js-menu a[href^="#"]');

    const scrollToSection = (e) => {
        e.preventDefault()
        const href = e.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const top = section.offsetTop
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        })
    }

    innerLinks.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}

export default initScroll()