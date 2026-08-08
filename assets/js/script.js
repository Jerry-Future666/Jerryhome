(function() {

    // 1. J 字母动画
    const heroLetter = document.getElementById('heroLetter');

    if (heroLetter) {

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

            requestAnimationFrame(() => {
                heroLetter.classList.remove('animate-hero');
            });

        });

    }



    // 2. 单元素动画

    const singleElements =
        document.querySelectorAll('[data-animate]');


    if (singleElements.length) {

        const singleObserver =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                const el = entry.target;

                if (entry.isIntersecting) {

                    el.classList.add('visible');

                } else {

                    el.classList.remove('visible');

                }

            });

        }, { threshold: 0.25 });


        singleElements.forEach(el => {

            singleObserver.observe(el);

        });

    }




    // 3. 分组动画

    const groupElements =
        document.querySelectorAll('[data-animate-group]');


    if (groupElements.length) {


        const groupTimers = new Map();


        const groupObserver =
        new IntersectionObserver((entries) => {


            entries.forEach(entry => {


                const group = entry.target;

                const children =
                group.querySelectorAll('[data-animate-child]');


                if (entry.isIntersecting) {


                    children.forEach((child,index)=>{


                        const timer =
                        setTimeout(()=>{

                            child.classList.add('visible');

                        }, index * 120);


                        groupTimers.set(child,timer);


                    });


                } else {


                    children.forEach(child=>{

                        child.classList.remove('visible');

                    });


                }


            });


        }, {threshold:0.15});



        groupElements.forEach(group=>{

            groupObserver.observe(group);

        });

    }




    // 4. 返回顶部

    const backToTop =
        document.getElementById('backToTop');


    if(backToTop){

        backToTop.addEventListener('click',(e)=>{

            e.preventDefault();

            window.scrollTo({

                top:0,

                behavior:'smooth'

            });

        });

    }


})();
