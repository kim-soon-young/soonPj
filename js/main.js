window.onload = function () {
  const navBar = document.querySelector("header");
  let prevScrollPos = window.scrollY;
  window.addEventListener("scroll", function () {
    let currScrollPos = window.scrollY;
  
    if (currScrollPos > prevScrollPos) {
      navBar.style.transform = `translateY(-105%)`;
    } else {
      navBar.style.transform = `translateY(0%)`;
    }
  
    prevScrollPos = currScrollPos;
  });
  //상단 스크롤 기능
  const header = document.querySelector(".header");
  const mbt = document.querySelector(".mbt");
  const gnbBg = document.getElementById("gnb_bg");
  let scy = 0;

  window.addEventListener("scroll", function () {
    scy = this.document.documentElement.scrollTop;
    if (scy > 0) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
  // 상단 스크롤 기능
  const navMb = document.querySelector(".nav-mb");
  const overlay = document.querySelector(".overlay");
  
  // 햄버거 버튼 클릭 이벤트
  mbt.addEventListener("click", function () {
    const state = this.classList.contains("ani");
    if (state) {
      this.classList.remove("ani");
      navMb.classList.remove("active");
      overlay.classList.remove("active");
    } else {
      this.classList.add("ani");
      navMb.classList.add("active");
      overlay.classList.add("active");
    }
  });

  // 오버레이 클릭 시 메뉴 닫기
  overlay.addEventListener("click", function () {
    mbt.classList.remove("ani");
    navMb.classList.remove("active");
    overlay.classList.remove("active");
  });
  // s_visual
  var swiper = new Swiper(".sw-vistual", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
  // s_program
  var swiper = new Swiper(".sw-program", {
    slidesPerView: 1.2,
    spaceBetween: 0,
    breakpoints: {
      1920: {
        slidesPerView: 5,
        spaceBetween: 10,        
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,           
      }   ,                 
      1000: {
        slidesPerView: 3.8,
        spaceBetween: 10,
      },
      800: {
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });
}
// s_recommend
var swiper = new Swiper(".sw-recommend", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true
  },
  loop: true,
  pagination: {
    el: ".sw-recommend-pg",
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 2
    },
    1560: {
      slidesPerView: 3
    }
  }
});


// 제이쿼리 ***********************************************************************************************
$(document).ready(function () {
  $(".menu > a").click(function (event) {
    event.preventDefault(); // 기본 이벤트 방지

    let submenu = $(this).next(".hide");
    submenu.slideToggle(); // 부드럽게 슬라이드 업 또는 다운

    // 화살표 회전 토글
    $(this).find('.material-symbols-outlined').toggleClass('active');
  });
});