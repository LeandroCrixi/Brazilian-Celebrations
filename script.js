function initTabNav() {
    const tabMenu = document.querySelectorAll('.js .js-tabmenu li');
    const tabContent = document.querySelectorAll('.js .js-tabcontent section');
    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('active') // Ativa o primeiro
    }

    tabContent[0].classList.add('active')

    const activeTab = (index) => {
        tabContent.forEach(element => {
            element.classList.remove('active')
        });
        tabContent[index].classList.add('active')
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        })
    })
}
initTabNav()

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
initAccordion()


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
initScroll()

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
initAnimaScroll()