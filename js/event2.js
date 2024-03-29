document.addEventListener("DOMContentLoaded", function () {
  function checkOnlyOne(element) {
    const checkboxes = document.getElementsByName("ok");
    Array.from(checkboxes).forEach((cb) => {
      cb.checked = false;
    });
    element.checked = true;
  }
  // 각 체크박스에 대한 이벤트 리스너 추가
  const checkboxes = document.getElementsByName("ok");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", function () {
      checkOnlyOne(this);
    });
  });
  // 제출 버튼 클릭 시 이벤트 처리
  document.getElementById("pass_application").addEventListener("click", function (event) {
    // 양식 제출을 막기 위해 기본 동작을 취소합니다.
    event.preventDefault();
    // 필수 입력 필드를 검사합니다.
    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var address = document.getElementById("address").value.trim();
    var agreement = document.querySelector('input[name="ok"]:checked');
    // 필수 입력 필드가 모두 작성되었는지 확인합니다.
    if (name !== "" && phone !== "" && address !== "") {
      // 동의 여부를 확인합니다.
      if (agreement && agreement.value === "no") {
        // 동의하지 않음을 클릭한 경우 알림을 표시합니다.
        alert("개인정보 제공에 동의하지 않을 경우 신청이 불가합니다.");
      } else if (!agreement) {
        // 필수 입력 필드를 모두 작성하지 않고 동의하지 않음을 클릭한 경우 알림을 표시합니다.
        alert("모든 내용을 작성해주시기 바랍니다.");
      } else {
        // 모든 필수 입력 필드가 작성되고 동의한 경우 알림을 표시합니다.
        alert("신청이 완료되었습니다.");
        // 양식 내용을 초기화합니다.
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("address").value = "";
        document.querySelector('input[name="ok"]:checked').checked = false;
      }
    } else {
      // 필수 입력 필드를 모두 작성하지 않은 경우 알림을 표시합니다.
      alert("모든 내용을 작성해주시기 바랍니다.");
    }
  });
});
