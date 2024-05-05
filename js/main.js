document.addEventListener("DOMContentLoaded", function () {
// aos 적용
  AOS.init();
// 탑버튼
  const topButton = document.getElementById("top-button");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      // 스크롤이 발생하면
      topButton.style.display = "block"; // 보이기
    } else {
      topButton.style.display = "none"; // 숨기기
    }
  });
//검색창
  const searchEl = document.querySelector(".search");
  const searchInputEl = searchEl.querySelector("input");
  searchEl.addEventListener("click", function () {
    searchInputEl.focus();
  });
  searchInputEl.addEventListener("focus", function () {
    searchEl.classList.add("focused");
    searchInputEl.setAttribute("placeholder", "");
  });
  searchInputEl.addEventListener("blur", function () {
    searchEl.classList.remove("focused");
    searchInputEl.setAttribute("placeholder", "");
  });
// 햄버거 버튼, 오버레이
  const mbt = document.querySelector(".mbt");
  const navMb = document.querySelector(".nav-mb");

  mbt.addEventListener("click", function () {
    const state = this.classList.contains("ani");
    if (state) {
      this.classList.remove("ani");
      navMb.classList.remove("active");
      // menu의 .hide 숨기기
      $(".menu > .hide").slideUp();
    } else {
      this.classList.add("ani");
      navMb.classList.add("active");
    }
  });
// 카테고리 스크롤
  $(document).ready(function () {
    var menu_start02 = "0";
    var $wrap = $("#mobile_nav02").parent(); //스크롤을 넣고 싶을 경우 삽입
    $("#mobile_nav02").sly({
      horizontal: 1,
      itemNav: "centered",
      smart: 1,
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: menu_start02,
      scrollBar: $wrap.find(".scrollbar"), //스크롤을 넣고 싶을 경우 삽입
      scrollBy: 1, //스크롤을 넣고 싶을 경우 삽입
      speed: 300,
      elasticBounds: 1,
      dragHandle: 1,
      dynamicHandle: 1,
    });
    $(window).resize(function (e) {
      $("#mobile_nav02").sly("reload");
    });
  });
// 프로그램
  var swiper = new Swiper(".sw-s_program", {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    loopedSlides: 5,

    breakpoints: {
      1800: {
        slidesPerView: 5,
      },
      1000: {
        slidesPerView: 4.5,
      },
      900: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2.5,
      },
      400: {
        slidesPerView: 1.5,
      },
    },
    autoplay: {
      delay: 2000,
    },
  });
// 이달의 할인 배너 및 리뷰 적립
  var swiper = new Swiper(".sw-s_banner2", {
    spaceBetween: 30,
    pagination: {
      el: ".sw-s_banner2-pg",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
  });
// 처음이라면
  var swiper = new Swiper(".sw-s_foryou", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //   delay: 5000, // 슬라이드 간의 시간 간격 (밀리초)
    //   disableOnInteraction: false, // 사용자 상호 작용 후에도 자동 재생을 유지할지 여부
    //   reverseDirection: false, // 슬라이드 방향 반대로
    //   stopOnLastSlide: false, // 마지막 슬라이드에서 재생 중지
    //   waitForTransition: true, // 다음 슬라이드로 넘어가기 전에 현재 슬라이드의 전환을 기다림
    //   disableOnInteraction: false, // 사용자 상호 작용 후에도 자동 재생 유지
    // },
  });
});
// 모바일 메뉴
$(document).ready(function () {
  $(".menu > a").click(function (event) {
    event.preventDefault(); // 기본 이벤트 방지

    let submenu = $(this).next(".hide");
    submenu.slideToggle(); // 부드럽게 슬라이드 업 또는 다운

 // 화살표 회전 토글
    $(this).find(".material-symbols-outlined").toggleClass("active");
  });
// 하트 채움
  $(document).ready(function () {
    $(".heart").click(function () {
      event.preventDefault();
      $(this).toggleClass("far fas");
    });
  });
});
