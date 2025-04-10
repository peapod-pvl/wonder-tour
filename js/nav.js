//burger-menu

const nav =document.querySelector("nav");
const burger=document.querySelector("nav .btn-menu i");
const body=document.querySelector("body");

burger.addEventListener("click",function(){
    nav.classList.toggle("active");
    if(nav.classList.contains("active")){
        burger.classList.remove("fa-bars");
        burger.classList.add("fa-xmark");
        body.style.overflow="hidden";
    }else{
        burger.classList.remove("fa-xmark");
        burger.classList.add("fa-bars");
        body.style.overflow="auto";
    }
});

// scrollTop

const scrollTop=document.querySelector(".scrollTop");
const win=document.querySelector("body");

window.onscroll=function(){
    if(window.scrollY>700){
        scrollTop.style.opacity="1";
    }else if(window.scrollY<700){
        scrollTop.style.opacity="0";
    }
};

scrollTop.onclick=function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
};

//sub-menu-links

const subMenuLinks=document.querySelectorAll(".menu>li .sub-menu a[data-goto]");

if(subMenuLinks.length>0){
    for(let a=0;a<subMenuLinks.length;a++){
        subMenuLinks[a].onclick=function(){
            onSubMenuLinks(subMenuLinks[a]);
        }
    }
    function onSubMenuLinks(e){
        const menuLink=e;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock=document.querySelector(menuLink.dataset.goto);
            const gotoBlockPos=gotoBlock.getBoundingClientRect().top+scrollY;

            window.scrollTo({
                top:gotoBlockPos,
                behavior:"smooth",
            });
            document.querySelector("nav .menu>li").classList.toggle("active");
            if(nav.classList.contains("active")){
                nav.classList.remove("active");
            }
            body.style.overflow="auto";
            burger.classList.remove("fa-xmark");
            burger.classList.add("fa-bars");
        }


    }
}

const sub_links=document.querySelectorAll("nav .menu .sub-menu li");
for(let i=0;i<sub_links.length;i++)
{
    sub_links[i].onclick=function(){
        sub_links[i].parentElement.parentElement.classList.toggle("active");
        if(sub_links[i].parentElement.parentElement.classList.contains("active")){
            sub_links[i].parentElement.previousElementSibling.style.transform="rotate(180deg)";
        }
        else{
            sub_links[i].parentElement.previousElementSibling.style.transform="rotate(0deg)";
        }
    };
}

//adaptive

const isMobile={
    Android:function(){
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry:function(){
        return navigator.userAgent.match(/Blackberry/i);
    },
    iOS:function(){
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera:function(){
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows:function(){
        return navigator.userAgent.match(/IEMobile/i);
    },
    any:function(){
        return (
            isMobile.Android()||
            isMobile.BlackBerry()||
            isMobile.iOS()||
            isMobile.Opera()||
            isMobile.Windows());
    }

};

if(isMobile.any()){
    document.body.classList.add("touch");

    let menuArrows=document.querySelectorAll(".sub-menu-arrow");
    if(menuArrows.length>0){
        for(let i=0;i<menuArrows.length;i++){
            const menuArrow=menuArrows[i];
            menuArrow.onclick=function(){
                menuArrow.parentElement.classList.toggle("active");
                if(menuArrow.parentElement.classList.contains("active")){
                    menuArrow.style.transform="rotate(180deg)";
                }
                else{
                    menuArrow.style.transform="rotate(0deg)";
                }
                
            }
        }
    }
}else{
    document.body.classList.add("pc");
}

