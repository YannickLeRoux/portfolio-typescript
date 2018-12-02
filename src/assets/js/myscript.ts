const myScript = () => {

  const images: NodeListOf<Element>| null = document.querySelectorAll('.image-portfolio');

  const navbar: HTMLElement | null = document.querySelector('nav');
  const navLinks: NodeListOf<Element>| null = document.querySelectorAll('.nav-link');
  const navCollapse: HTMLElement | null = document.querySelector('.navbar-collapse');

  const main: HTMLElement | null = document.querySelector('main');

    const handleImgOver = () => {
        const img: HTMLElement | null = this.querySelector('img');
        const overlay: HTMLElement | null = this.querySelector('.overlay');

        if ( img && overlay) {
            img.classList.add('img-hover');
            overlay.classList.add('overlay-hover');
        }
    }

    const handleImgLeave = () => {
        const img: HTMLElement | null = this.querySelector('img');
        const overlay: HTMLElement | null = this.querySelector('.overlay');

        if ( img && overlay) {
          overlay.classList.remove('overlay-hover');
          img.classList.remove('img-hover');
        }
    }


    images.forEach(image => image.addEventListener('mouseover', handleImgOver));
    images.forEach(image => image.addEventListener('mouseleave', handleImgLeave));


    function handleScrollDown(): void {
        if (navbar) {
            if (window.scrollY > 120) {
                navbar.style.setProperty('transform','translateY(-100%)');
            } else {
                navbar.style.setProperty('transform','translateY(0)');
            }
        }
    }




    window.addEventListener('scroll', handleScrollDown);

    const handleTopMargin = () => {
        if ( navbar && main ) {
            const navHeight = navbar.offsetHeight;
            main.style.setProperty('margin-top', navHeight + 'px');
        }
    }

    handleTopMargin();
    window.addEventListener('resize', handleTopMargin);

    function handleCloseNav() {
        navCollapse.classList.remove('show');
    }

    navLinks.forEach(link => link.addEventListener('click', handleCloseNav));
};

export default myScript;