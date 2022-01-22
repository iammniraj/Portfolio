
                const hamburgerMenu=document.querySelector('#navigation .nav-icon');
                const navContent=document.querySelector('#nav-content');
                const closeBtn=document.querySelector('#nav-content .close-btn');
                const navLinks=document.querySelectorAll('#nav-content ul li a');


                hamburgerMenu.addEventListener('click', ()=>{
                    navContent.classList.add('show');
                    document.body.style.overflow="hidden";

                });
                closeBtn.addEventListener('click', ()=>{
                    navContent.classList.remove('show');
                    document.body.style.overflow="auto";

                });

                navLinks.forEach(link =>{
                    link.addEventListener('click',()=>{
                        navContent.classList.remove('show');
                        document.body.style.overflow="auto";
                    })
                })