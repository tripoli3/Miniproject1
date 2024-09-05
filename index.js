const submitFormEl = document.querySelector('#submitForm');
const modal = new bootstrap.Modal('#myModal');

// form 요소
const nameEl = document.querySelector('[name="name"]');
const emailEl = document.querySelector('[name="email"]');
const messageEl = document.querySelector('[name="message"]');

// 폼 제출 핸들러
const handleSave = () => {
  const emailValue = emailEl.value;

  // 입력값 검증
};

submitFormEl.addEventListener('click', handleSave);

// 메인 화면 보내기
const footerSubmitFormEl = document.querySelector('#footerSubmitForm');
const footernameEl = document.querySelector('[name="footerName"]');
const footeremailEl = document.querySelector('[name="footerEmail"]');
const footermessageEl = document.querySelector('[name="footerMessage"]');

const handleSave2 = (event) => {
  event.preventDefault(); // 폼 제출 시 페이지 리로드 방지
  const emailValue = footeremailEl.value;

  if (!footernameEl.value || !footeremailEl.value || !footermessageEl.value) {
    alert('모든 필드를 입력해주세요.');
  } else if (!emailValue.includes('@')) {
    alert('유효한 이메일 주소를 입력해주세요.');
  } else {
    console.log('Form values:', {
      name: footernameEl.value,
      email: footeremailEl.value,
      message: footermessageEl.value,
    });
  }
};

footerSubmitFormEl.addEventListener('click', handleSave2);
