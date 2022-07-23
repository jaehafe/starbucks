// 돋보기를 클릭하면 focus됨

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = 'none';
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // 배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));

// ''선택자들을 전부 선택해서 fadeEls라는 변수에 할당
const fadeEls = document.querySelectorAll('.visual .fade-in');
// fade-in이라는 요소들의 개수만큼 forEach라는 메소드에, 인수로 적은 함수가 실행이 된다.
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(반복되는 요소, 지속시간, 옵션(객체 데이터 형태));
  gsap.to(fadeEl, 1, {
    delay: (index + 1)* .7, // 0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});


// 
// (요소, 지속시간, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});