const counters=document.querySelectorAll(".experience .counter span");
const circles=document.querySelectorAll(".experience .c2");
circles.forEach(function(elem){
    const circPerc=parseInt(elem.getAttribute("data-value"));
    elem.style.strokeDashoffset=270-2.7*circPerc;

});
let perc=[];
for(let i=0;i<counters.length;i++){
    perc[i]=parseInt(counters[i].getAttribute("data-value"));
}
// console.log(perc);
let minPerc=perc[0];
console.log(minPerc);
for(let i=0;i<counters.length;i++){
    if(perc[i]<minPerc){
        minPerc=perc[i];
    }
}
console.log(minPerc);
counters.forEach(function(elem){
    elem.textContent="0";
    function cn(){
        const dataValue=parseInt(elem.getAttribute("data-value"));
        let startNum=parseInt(elem.textContent);
        const plusNum=dataValue/minPerc;
        if(startNum<dataValue){
            startNum+=plusNum;
            elem.textContent=parseInt(startNum);
            setTimeout(cn,10);
        }else{
            elem.textContext=dataValue;
        }
    }
    cn();
});