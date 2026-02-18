const initTabNav = () => {
    const tabMenu = document.querySelectorAll('.js .js-tabmenu li');
    const tabContent = document.querySelectorAll('.js .js-tabcontent section');
    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('active') // Ativa o primeiro
    }

    const activeTab = (index) => {
        tabContent.forEach(element => {
            element.classList.remove('active')
        });
        const direction = tabContent[index].dataset.anime
        tabContent[index].classList.add('active', direction)
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        })
    })
}

export default initTabNav()