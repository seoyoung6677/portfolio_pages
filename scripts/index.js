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

/* const lineWrap =document.querySelector('.line_wrap');
const lines = [
    lineWrap.querySelector('.line1'),
    lineWrap.querySelector('.line2'),
    lineWrap.querySelector('.line3'),
];

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if (entry.isIntersecting){
            lines.forEach((line, index)=>{
                setTimeout(()=>{
                    line.classList.add(`draw${index + 1}`);
                    console.log(`${line.className}-> ${className} 추가도ㅓㅣㅁ`)
                }, index * 400)
            })
        }
    })
})

observer.observe(lineWrap); */
console.log(document.querySelector('.line_wrap'));
window.addEventListener('DOMContentLoaded', () => {
    const lineWrap = document.querySelector('.line_wrap');
    
    if (!lineWrap) {
    console.warn('❗ .line_wrap 요소를 못 찾음!');
    return;
    }
    
    const lines = [
    lineWrap.querySelector('.line1'),
    lineWrap.querySelector('.line2'),
    lineWrap.querySelector('.line3'),
    ];
    
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
    lines.forEach((line, index) => {
    setTimeout(() => {
    line.classList.add(`draw${index + 1}`);
    console.log(`✅ draw${index + 1} 추가됨`);
    }, index * 400);
    });
    }
    });
    });
    
    observer.observe(lineWrap);
    });

    const spans = document.querySelectorAll('.info_title span');

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('active');
} else {
// 다시 사라질 때 active 제거 → 재등장 시 애니메이션 다시 실행 가능
entry.target.classList.remove('active');
}
});
}, {
threshold: 0.6  // 요소가 60% 보일 때 작동 (필요하면 조절 가능)
});

spans.forEach(span => observer.observe(span));



const title = document.querySelector('.brand-title');
const letters = title.textContent.split('');
title.innerHTML = ''; // 기존 텍스트 제거

letters.forEach((letter, index) => {
const span = document.createElement('span');
span.textContent = letter;
span.style.opacity = '0';
span.style.display = 'inline-block';
span.style.transform = 'translateY(20px)';
span.style.transition = `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms`;
title.appendChild(span);
});

// 등장 시 애니메이션 적용
const observer2 = new IntersectionObserver((entries) => {
entries.forEach(entry => {
const spans = entry.target.querySelectorAll('span');
if (entry.isIntersecting) {
spans.forEach(span => {
span.style.opacity = '1';
span.style.transform = 'translateY(0)';
});
} else {
spans.forEach(span => {
span.style.opacity = '0';
span.style.transform = 'translateY(20px)';
});
}
});
});

observer2.observe(title);