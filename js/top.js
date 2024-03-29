document.addEventListener("DOMContentLoaded", function () {
  // top 버튼
  const topBtn = document.getElementById("go_up_down_bt");
  const goTopImg = document.getElementById("go-top-btn-img");
  const goDownImg = document.getElementById("go-bottom-btn-img");
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // 페이지를 맨 위로 스크롤하는 동안 이미지를 숨깁니다.
    goTopImg.style.display = "none";
  });
  window.addEventListener("scroll", function () {
    // 현재 스크롤 위치를 가져옵니다.
    var scrollY = window.scrollY || window.pageYOffset;
    // 현재 창의 높이를 가져옵니다.
    var windowHeight = window.innerHeight;
    // 스크롤이 맨 위에 위치하고 현재 창의 높이가 0이 아니라면
    if (scrollY !== 0 && windowHeight !== 0) {
      // 이미지를 보이도록 설정합니다.
      goTopImg.style.display = "block";
    } else {
      // 그렇지 않으면 이미지를 숨깁니다.
      goTopImg.style.display = "none";
    }
  });
  goTopImg.addEventListener("click", function () {
    if(scrollY !== 0 && windowHeight !== 0){
    }
    goTopImg.src = goDownImg.src;
  });
  // footer와 관련된 jQuery 코드
  var $w = $(window),
    footerHei = $(".footer.inner").outerHeight(),
    $gotopbt = $(".top-button");
  $w.on("scroll", function () {
    var sT = $w.scrollTop();
    var val = $(document).height() - $w.height() - footerHei;
    if (sT >= val) $gotopbt.addClass("on");
    else $gotopbt.removeClass("on");
  });
});
// document.addEventListener("DOMContentLoaded", function () {
//   top 버튼
//   const topBtn = document.getElementById("go_up_down_bt");
//   const goTopImg = document.getElementById("go-top-btn-img");
//   const goBottomImg = document.getElementById("go-bottom-btn-img");
//   topBtn.addEventListener("click", function (event) {
//     event.preventDefault();
//     if (window.scrollY == 0) {
//       window.scrollTo({
//         top: 9999,
//         behavior: "smooth",
//       });
//       goTopImg.style.display = "block";
//       goBottomImg.style.display = "none";
//     } else {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//       goBottomImg.style.display = "block";
//       goTopImg.style.display = "none";
//     }
//   });
//   const topBtn = document.getElementById("go_up_down_bt");
//   const goTopImg = document.getElementById("go-top-btn-img");
//   topBtn.addEventListener("click", function (event) {
//     event.preventDefault();
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//     // 페이지를 맨 위로 스크롤하는 동안 이미지를 숨깁니다.
//     goTopImg.style.display = "none";
//   });
//   window.addEventListener("scroll", function () {
//     // 현재 스크롤 위치를 가져옵니다.
//     var scrollY = window.scrollY || window.pageYOffset;
//     // 현재 창의 높이를 가져옵니다.
//     var windowHeight = window.innerHeight;
//     // 스크롤이 맨 위에 위치하고 현재 창의 높이가 0이 아니라면
//     if (scrollY !== 0 && windowHeight !== 0) {
//       // 이미지를 보이도록 설정합니다.
//       goTopImg.style.display = "block";
//     } else {
//       // 그렇지 않으면 이미지를 숨깁니다.
//       goTopImg.style.display = "none";
//     }
//   });
//   // ===============================================
//   // =====================================================
// });
// $(function () {
//   var $w = $(window),
//     footerHei = $(".footer.inner").outerHeight(),
//     $gotopbt = $(".top-button");
//   $w.on("scroll", function () {
//     var sT = $w.scrollTop();
//     var val = $(document).height() - $w.height() - footerHei;
//     if (sT >= val) $gotopbt.addClass("on");
//     else $gotopbt.removeClass("on");
//   });
// });
