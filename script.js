document.addEventListener('DOMContentLoaded', () => {
    let lastY = window.scrollY;
    let ticking = false;
    const nav = document.querySelector('nav');
    const fonduNavbar = document.querySelector('.fondu-navbar');
    const DELTA = 10;

    function onScroll() {
        const currentY = window.scrollY;
        if (Math.abs(currentY - lastY) < DELTA) {
            ticking = false;
            return;
        }

        if (currentY > lastY && currentY > 100) {
            if (nav) nav.classList.add('hidden');
            if (fonduNavbar) fonduNavbar.classList.add('hidden');
        } else {
            if (nav) nav.classList.remove('hidden');
            if (fonduNavbar) fonduNavbar.classList.remove('hidden');
        }

        lastY = currentY <= 0 ? 0 : currentY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(onScroll);
            ticking = true;
        }
    }, { passive: true });
});