(function() {
    // 1. J 字母动画：仅首次加载播放一次
    const heroLetter = document.getElementById('heroLetter');
    let heroPlayed = false;
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !heroPlayed) {
                heroPlayed = true;
                setTimeout(() => {
                    heroLetter.classList.add('animate-hero');
                }, 300);
                heroObserver.disconnect();
            }
        });
    }, { threshold: 0.15 });
    heroObserver.observe(heroLetter);

    heroLetter.addEventListener('animationend', () => {
        heroLetter.style.opacity = '1';
        heroLetter.style.transform = 'translateY(0)';
        requestAnimationFrame(() => heroLetter.classList.remove('animate-hero'));
    });

    // 2. 单个元素动画（保持探索、关于我分行）：进入视口显现，离开完全隐藏
    const singleElements = document.querySelectorAll('[data-animate]');
    const singleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const el = entry.target;
            if (entry.isIntersecting) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    }, { threshold: 0.25 });
    singleElements.forEach(el => singleObserver.observe(el));

    // 3. 分组动画（热爱之物、联系方式）：进入后子元素依次显现，离开全部隐藏
    const groupElements = document.querySelectorAll('[data-animate-group]');
    const groupTimers = new Map();

    const groupObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const group = entry.target;
            const children = group.querySelectorAll('[data-animate-child]');

            if (entry.isIntersecting) {
                const timers = [];
                children.forEach((child, index) => {
                    const timerId = setTimeout(() => {
                        child.classList.add('visible');
                    }, index * 120);
                    timers.push(timerId);
                });
                groupTimers.set(group, timers);
            } else {
                const timers = groupTimers.get(group) || [];
                timers.forEach(timerId => clearTimeout(timerId));
                groupTimers.delete(group);
                children.forEach(child => {
                    child.classList.remove('visible');
                });
            }
        });
    }, { threshold: 0.15 });
    groupElements.forEach(group => groupObserver.observe(group));

    // 4. 回到顶部
    document.getElementById('backToTop').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();
