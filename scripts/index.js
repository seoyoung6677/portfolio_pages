//전체 수직 스크롤
const wrap =new Swiper('#wrap',{
    direction:'vertical',
    mousewheel:true,
})

document.querySelectorAll('nav a').forEach((obj)=>{
    obj.addEventListener('click',(e)=>{
        e.preventDefault(); //a의 href기본기능 막기
        const slideNum = Number(obj.dataset.slide);
        wrap.slideTo(slideNum, 1000);
});
});

//sns 디자인
const sns = new Swiper('.sns_swiper',{
    slidesPerView:4,
    autoplay:{delay:0,},
    speed:4000,
    loop:true,
    spaceBetween:20,
})


// detail 디자인

const poster = new Swiper('.poster_swiper',{
    slidesPerView:3,
    autoplay:{delay:0,},
    speed:4000,
    loop:true,
    spaceBetween:20,
})
const detail = new Swiper('.detail_design_swiper',{
    slidesPerView:1,
    autoplay:{delay:0,},
    speed:5000,
    loop:true,
    
})

//SNS 프로젝트 클릭 시 팝업실행(클릭한 이미지가 팝업 이미지로 교체)
const snsProject = document.querySelectorAll('#sns_swiper .swiper-slide ')
const popup= document.querySelector('.popup_bg')
console.log(snsProject,popup);
popup.addEventListener('click',()=>{popup.style.display='none'
    wrap.mousewheel.enable();
})

for(let sns of snsProject){
    sns.addEventListener('click',()=>{
        popup.style.display ='block';
        popup.children[0].children[0].src = sns.children[0].src;
        //팝업 실행 시 전체 수직 Swiper 스크롤 가능 막기
        wrap.mousewheel.disable(); //스크롤 풀기enable()
        
    })
}