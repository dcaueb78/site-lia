//Alterar cores do NAV durante scroll do mouse
window.onscroll = () => {
    var width = screen.width;
    var height = screen.height;
    const nav = document.querySelector('#navbar');

    if (height >= 1080) {
        if (this.scrollY <= 900) {
            nav.className = 'site-header sticky-top py-1 shadow';
        }
        else if (this.scrollY > 970 && this.scrollY < 1940) {
            nav.className = 'site-header-dark sticky-top py-1 scroll-white shadow';
        } else {
            nav.className = 'site-header-white sticky-top py-1 scroll-black shadow';
        }
    } else if (height >= 720 && height < 900) {
        if (this.scrollY <= 435) {
            nav.className = 'site-header sticky-top py-1 shadow';
        }
        else if (this.scrollY > 435 && this.scrollY < 1110) {
            nav.className = 'site-header-dark sticky-top py-1 scroll-white shadow';
        } else if (this.scrollY > 1100 && this.scrollY < 2350) {
            nav.className = 'site-header-white sticky-top py-1 scroll-black shadow';
        } else if (this.scrollY > 2350 && this.scrollY < 4000) {
            nav.className = 'site-header-dark sticky-top py-1 scroll-white shadow';
        }
    } else if (height >= 900 && height < 1080) {
        if (this.scrollY <= 535) {
            nav.className = 'site-header sticky-top py-1 shadow';
        }
        else if (this.scrollY > 535 && this.scrollY < 1340) {
            nav.className = 'site-header-dark sticky-top py-1 scroll-white shadow';
        } else if (this.scrollY > 1340 && this.scrollY < 2650) {
            nav.className = 'site-header-white sticky-top py-1 scroll-black shadow';
        } else if (this.scrollY > 2650 && this.scrollY < 4000) {
            nav.className = 'site-header-dark sticky-top py-1 scroll-white shadow';
        }
    }
};


