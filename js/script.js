        document.addEventListener('DOMContentLoaded', function () {
            let lastY = window.scrollY;
            let ticking = false;
            const nav = document.querySelector('nav');
            const fonduNavbar = document.querySelector('.fondu-navbar');
            const DELTA = 10;
            if (!nav || !fonduNavbar) return;
            function onScroll() {
                const currentY = window.scrollY;
                if (Math.abs(currentY - lastY) < DELTA) { ticking = false; return; }
                if (currentY > lastY && currentY > 100) {
                    nav.classList.add('hidden');
                    fonduNavbar.classList.add('hidden');
                } else {
                    nav.classList.remove('hidden');
                    fonduNavbar.classList.remove('hidden');
                }
                lastY = currentY <= 0 ? 0 : currentY;
                ticking = false;
            }
            window.addEventListener('scroll', function () {
                if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
            }, { passive: true });
        });