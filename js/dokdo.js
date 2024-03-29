window.addEventListener("load", function () {
  function smoothScroll(targetId) {
    var targetSection = document.querySelector(targetId);
    var targetTop = targetSection.offsetTop;
    var headerHeight = document.querySelector("header").offsetHeight;
    var adjustedTop = targetTop - headerHeight;
    window.scrollTo({
      top: adjustedTop,
      behavior: "smooth",
    });
  }
  document.querySelectorAll(".gnb a, .gnb-m a").forEach(function (menuLink) {
    menuLink.addEventListener("click", function (e) {
      e.preventDefault();
      // 모든 링크에서 active 클래스 제거
      document.querySelectorAll(".gnb a.active, .gnb-m a.active").forEach(function (link) {
        link.classList.remove("active");
      });
      // 클릭된 링크에 active 클래스 추가
      this.classList.add("active");
      smoothScroll(this.getAttribute("href"));
    });
  });
  // AOS적용
  AOS.init();
  // 헤더
  let scy = 0;
  let scActive = 50;
  scy = window.document.documentElement.scrollTop;
  let header = document.querySelector("header");
  let logoW = document.querySelector(".logo-w");
  let logoB = document.querySelector(".logo-b");
  window.addEventListener("scroll", () => {
    scy = window.document.documentElement.scrollTop;
    if (scy > scActive) {
      header.classList.add("header-active");
      logoW.style.display = "none";
      logoB.style.display = "block";
    } else {
      header.classList.remove("header-active");
      logoW.style.display = "block";
      logoB.style.display = "none";
    }
  });
  //언어
  const languageWord = document.querySelector(".language-word");
  const languageList = document.querySelector(".languge");
  let isLanguageActive = false;

  languageWord.addEventListener("click", function (event) {
    event.stopPropagation();

    if (isLanguageActive) {
      closeLanguageList();
    } else {
      openLanguageList();
    }
    isLanguageActive = !isLanguageActive;
  });
  document.addEventListener("click", function () {
    if (isLanguageActive) {
      closeLanguageList();
      isLanguageActive = false;
    }
  });
  function openLanguageList() {
    languageList.style.maxHeight = "250px";
  }
  function closeLanguageList() {
    languageList.style.maxHeight = "0";
  }

  // 시간
  var clockTarget = document.getElementById("clock");
  function clock() {
    var date = new Date();
    var month = date.getMonth();
    var clockDate = date.getDate();
    var day = date.getDay();
    var week = ["일", "월", "화", "수", "목", "금", "토"];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    clockTarget.innerText = `${month + 1}월 ${clockDate}일 ${week[day]}요일 ` + `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    clockTarget.style.color = "#191919";
  }
  function init() {
    clock();
    setInterval(clock, 1000);
  }
  init();
  // 다운버튼
  const downButton = document.querySelector(".demo");
  downButton.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 이벤트 동작 방지
    scrollToSection("#page-1");
  });

  function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      const yOffset = -50;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
  // 이유
  const swReason = new Swiper(".swReason", {
    direction: "vertical",
    pagination: {
      el: ".swReason .swiper-pagination",
      clickable: true,
    },
    loop: true,
    speed: 500,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
  });
  // 독도 가는길 예매페이지
  // this.document.getElementById("go-ulleung").addEventListener("click", function () {
  //   // 새로운 페이지 URL
  //   var goUlleung = "https://www.daezer.com/main/main.html";
  //   // 새로운 페이지로 이동
  //   window.location.href = goUlleung;
  // });
  //__________________________________________________________________________________________
  // 독도 행사 swiper
  var swiper = new Swiper(".sw-event", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination-event",
      clickable: true,
    },
    breakpoints: {
      1000: {
        spaceBetween: 15,
        slidesPerView: 4,
      },
      750: {
        spaceBetween: 15,
        slidesPerView: 3,
      },
      570: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
    },
  });
  // 독도 md swiper
  var swiper = new Swiper(".sw-md", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination-md",
      clickable: true,
    },
    breakpoints: {
      1200: {
        spaceBetween: 15,
        slidesPerView: 4,
      },
      780: {
        spaceBetween: 15,
        slidesPerView: 3,
      },
      570: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
    },
  });
  // ============= footer family-site
  var dokdoPlus = document.querySelector(".dokdo-plus");
  var dokdoPlusIcon = dokdoPlus.querySelector("i.fa-angle-down");
  var dokdoPlusUl = document.querySelector(".family ul");
  var familyDiv = document.querySelector(".family");
  var isClicked = false; // 클릭 상태를 저장할 변수를 추가합니다.
  dokdoPlus.addEventListener("click", function (event) {
    event.preventDefault(); // 링크의 기본 동작을 방지합니다.
    dokdoPlusUl.classList.toggle("show"); // ul 요소의 클래스를 토글하여 보이거나 숨깁니다.
    // 아이콘의 회전 각도를 변경하여 화살표 모양을 토글합니다.
    dokdoPlusIcon.classList.toggle("rotate-180");
    // 클릭 상태를 변경합니다.
    isClicked = !isClicked;
    // 클릭 상태에 따라 테두리 모양을 변경합니다.
    if (isClicked) {
      familyDiv.style.borderRadius = "0 0 10px 10px"; // 클릭된 경우 테두리 모양 변경
    } else {
      familyDiv.style.borderRadius = ""; // 클릭되지 않은 경우 테두리 모양 원래대로
    }
  });
  // ==================== promotion 이벤트
  // 인스타 챌린지 팝업 열기
  document.getElementById("openSnsPopup").addEventListener("click", function () {
    // 팝업 창을 열고 이미지를 표시
    window.open("event1.html", "", "width=1000,height=1300");
  });
  // 스탬프 투어 팝업 열기
  document.getElementById("openStempPopup").addEventListener("click", function () {
    // 팝업 창을 열고 이미지를 표시
    window.open("event2.html", "", "width=1000,height=1300");
  });
  // function openSnsPopup() {
  //   // 팝업 창을 열고 크기 조절을 비활성화
  //   var snsPopup = window.open("event1.html", "", "width=1000,height=3136, resizable=no");
  //   // 팝업 창을 포커스
  //   snsPopup.focus();
  // }
  // function openStempPopup() {
  //   // 팝업 창을 열고 크기 조절을 비활성화
  //   var stempPopup = window.open("event2.html", "", "width=1000,height=3136, resizable=no");
  //   // 팝업 창을 포커스
  //   stempPopup.focus();
  // }
  // ==============================================
  function openSnsPopup() {
    var popupURL = "event1.html";
    var popupWidth = 1000;
    var popupHeight = 1300;
    var leftPosition = (window.screen.width - popupWidth) / 2;
    var topPosition = (window.screen.height - popupHeight) / 2;
    window.open(popupURL, "popup", "width=" + popupWidth + ",height=" + popupHeight + ",left=" + leftPosition + ",top=" + topPosition);
  }
  function openStempPopup() {
    var popupURL = "event2.html";
    var popupWidth = 1000;
    var popupHeight = 1300;
    var leftPosition = (window.screen.width - popupWidth) / 2;
    var topPosition = (window.screen.height - popupHeight) / 2;
    window.open(popupURL, "popup", "width=" + popupWidth + ",height=" + popupHeight + ",left=" + leftPosition + ",top=" + topPosition);
  }
});
