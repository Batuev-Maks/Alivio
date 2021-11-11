const videoBtn = document.querySelector(".play-btn");
const videoIcon =document.querySelector("#video__btn__icon");
const videoStory = document.querySelector(".video__story");
const video = document.querySelector(".video");
const menuIcon = document.querySelector(".header__menu__icon");
const menu = document.querySelector(".nav-wrapper");
const menuLinks = document.querySelectorAll(".header-menu-link[data-goto]");

videoBtn.addEventListener('click', function(){
    function leave(event){
        if(event.type === 'mouseleave'){
            videoBtn.classList.add('hidden');
        }else{
            videoBtn.classList.remove('hidden');
        }
    }
    if(videoStory.paused){
        videoStory.play();
        videoIcon.src = 'img/pause.svg';
        video.onmouseleave = leave;
        video.onmouseenter = leave;
    }else{
        videoStory.pause();
        videoIcon.src = 'img/play.png';
        video.onmouseleave = null;
    }
})

if(menuIcon){
    menuIcon.addEventListener("click", function(e) {
        menuIcon.classList.toggle("_active");
        menu.classList.toggle("_active");
    });
}


if(menuLinks.length >0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e){
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

            if(menuIcon.classList.contains("_active")){
                menuIcon.classList.remove("_active");
                menu.classList.remove("_active");
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}



