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
const sns = new Swiper('#sns_swiper',{
    slidesPerView:4,
    autoplay:{delay:0,},
    speed:4000,
    loop:true,
    spaceBetween:20,
})


// detail 디자인
const detailDesign = document.querySelectorAll('#detail_swiper .swiper-slide ')
const detail = new Swiper('#detail_swiper',{
    slidesPerView:4,
    autoplay:{delay:0,},
    speed:4000,
    loop:true,
    spaceBetween:20,
})