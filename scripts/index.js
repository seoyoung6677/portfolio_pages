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

const sns = new Swiper('.sns_swiper', {
  slidesPerView: 4,
  loop: true,
  speed: 2500,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  spaceBetween: 20,
  lazy: true,
  allowtouchMove:false,
});

const poster = new Swiper('.poster_swiper', {
  slidesPerView: 3,
  loop: true,
  speed: 2500,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  spaceBetween: 20,
  lazy: true,
});

const detail = new Swiper('.detail_design_swiper', {
  slidesPerView: 1,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  lazy: true,
});
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

console.log(document.querySelector('.line_wrap'));
window.addEventListener('DOMContentLoaded', () => {
    const lineWrap = document.querySelector('.line_wrap');
    
    if (!lineWrap) {
    console.warn('.line_wrap 요소를 못 찾음!');
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
    console.log(`draw${index + 1} 추가됨`);
    }, index * 400);
    });
    }
    });
    });
    
    observer.observe(lineWrap);
    });
/* 
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
 */
const spans = document.querySelectorAll('.info_title span');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 스팬 등장
      entry.target.classList.add('active');

      // 형제 영역(.project-left) 안의 h1 찾아서 0.6초 뒤에 효과 주기
      const project = entry.target.closest('.project'); // 공통 부모
      const h1 = project.querySelector('.project-left h1');
      if (h1) {
        setTimeout(() => h1.classList.add('active'), 600);
      }

    } else {
      // 스팬 사라짐
      entry.target.classList.remove('active');

      // h1도 사라짐
      const project = entry.target.closest('.project');
      const h1 = project.querySelector('.project-left h1');
      if (h1) h1.classList.remove('active');
    }
  });
}, { threshold: 0.6 });

spans.forEach(span => observer.observe(span));