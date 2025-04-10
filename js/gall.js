// slideshow
const gall_big=document.querySelector(".gall_big");
const ims=document.querySelector(".gall_ims");
const left_btn=document.querySelector(".impression-gall .left_arrow");
const right_btn=document.querySelector(".impression-gall .right_arrow");
const imp_gall=document.querySelector(".impression-gall");
let sw=imp_gall.scrollWidth;

const small_images=document.querySelectorAll(".gall_ims img");

const bodyEl=document.querySelector("body");
console.log(bodyEl);
for(let a=0;a<small_images.length;a++){
    small_images[a].onclick=function(){
        gall_big.style.display="block";
        bodyEl.style.overflow="hidden";
        currentImp(a);
        
    };
}

let ml_ims=0;
right_btn.onclick=function(){
    ml_ims-=171;
    if(ml_ims*(-1)>(sw-imp_gall.clientWidth)){
        ml_ims=imp_gall.clientWidth-sw;
    }
    ims.style.marginLeft=ml_ims+"px";
};
left_btn.onclick=function(){
    ml_ims+=171;
    if(ml_ims>0){
        ml_ims=0;
    }
    ims.style.marginLeft=ml_ims+"px";
};

// gall_big

let imp_index=0;

let big_images=["img/gall_big/imp1.webp","img/gall_big/imp2.jpg","img/gall_big/imp3.jpg","img/gall_big/imp4.png","img/gall_big/imp5.jpg","img/gall_big/imp6.jpg","img/gall_big/imp7.jpg","img/gall_big/imp8.jpg","img/gall_big/imp9.jpg","img/gall_big/imp10.jpg","img/gall_big/imp11.webp"];
const imp=document.querySelector(".gall_big .slider img");

let a_prev=document.querySelector(".gall_big .prev");
let a_next=document.querySelector(".gall_big .next");

const dots=document.querySelector(".gall_big .dots");

for(let a=1;a<big_images.length;a++){
    let dot=document.createElement("div");
    dot.classList.add("dot");
    dots.append(dot);
}
const dot_array=document.querySelectorAll(".gall_big .dot");

for(let a=0;a<dot_array.length;a++){
    dot_array[a].onclick=function(){
        currentImp(a);
    };
}

function currentImp(a){
    imp_index=a;
    imp.setAttribute("src",big_images[imp_index]);
    for(let a=0;a<dot_array.length;a++){
        if(dot_array[a].classList.contains("activedot")){
            dot_array[a].classList.remove("activedot");
        }
    }
    dot_array[imp_index].classList.toggle("activedot");
}

a_prev.onclick=function(e){
    e.preventDefault();
    imp_index--;
    if(imp_index<0){
        imp_index=big_images.length-1;
    }
    currentImp(imp_index);  

};
a_next.onclick=function(e){
    e.preventDefault();
    imp_index++;
    if(imp_index>big_images.length-1){
        imp_index=0;
    }
    currentImp(imp_index);

};

//gall_big open/close

const close_gall=document.querySelector(".gall_big_close");


close_gall.onclick=function(e){
    gall_big.style.display="none";
    bodyEl.style.overflow="auto";
};
