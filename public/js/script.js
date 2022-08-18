const url = document.URL.split('/')[3].split('.')[0];

const pageIndex = () => {
  const activeBarsMenu = () => {
    const containerMenuBars = document.querySelector('.container.menu-bars');
    const btnImg = document.querySelector('.container.section-home header img');
    const btnArrowLeft = document.querySelector('.container.menu-bars i');
    btnImg.addEventListener('click', () => {
      containerMenuBars.classList.add('active');
    });
    btnArrowLeft.addEventListener('click', () => {
      containerMenuBars.classList.remove('active');   
    });
  }
  activeBarsMenu();
}

if (url == '' || url == '#') {
  pageIndex();
}
