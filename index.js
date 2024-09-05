const submitFormEl = document.querySelector('#submitForm');

const modal = new bootstrap.Modal('#myModal');

//form 요소
const nameEl = document.querySelector('[name="name"]');
const emailEl = document.querySelector('[name="email"]');
const messageEl = document.querySelector('[name="message"]');

// 폼 제출 핸들러
const handleSave = () => {
  if (nameEl.value && emailEl.value && messageEl.value) {
    console.log('Form values:', {
      name: nameEl.value,
      email: emailEl.value,
      message: messageEl.value,
    });
    modal.hide();
  } else {
    console.log('Form validation failed');
  }
};

// const handleInputChange = () => {
//   const value = nameEl.value;
// };

// const handleInputChange2 = () => {
//   const value = emailEl.value;
// };

// const handleInputChange3 = () => {
//   const value = messageEl.value;
// };

submitFormEl.addEventListener('click', handleSave);

// nameEl.addEventListener('change', handleInputChange);

// emailEl.addEventListener('change', handleInputChange2);

// messageEl.addEventListener('change', handleInputChange3);

// 메인화면 보내기

const footerSubmitFormEl = document.querySelector('#footerSubmitForm');

const footernameEl = document.querySelector('[name="footerName"]');
const footeremailEl = document.querySelector('[name="footerEmail"]');
const footermessageEl = document.querySelector('[name="footerMessage"]');

const handleSave2 = (event) => {
  console.log(event);
  event.preventDefault(); // 폼 제출 시 페이지 리로드 방지
  if (footernameEl.value && footeremailEl.value && footermessageEl.value) {
    console.log('Form values:', {
      name: footernameEl.value,
      email: footeremailEl.value,
      message: footermessageEl.value,
    });
  } else {
    console.log('Form validation failed');
  }
};

footerSubmitFormEl.addEventListener('click', handleSave2);

// CHAP GPT 참조 //
// document.addEventListener('DOMContentLoaded', function () {
//   const submitButton = document.getElementById('submitForm');

//   submitButton.addEventListener('click', function () {
//     const emailInput = document.getElementById('emailInput').value;
//     const nameInput = document.getElementById('nameInput').value;
//     const messageInput = document.getElementById('messageInput').value;

//     // Validate the form if needed
//     const form = document.getElementById('modalForm');
//     if (form.checkValidity()) {
//       console.log('Email:', emailInput);
//       console.log('Name:', nameInput);
//       console.log('Message:', messageInput);
//       // You can also display the data in an alert if you prefer
//       alert(
//         'Email: ' +
//           emailInput +
//           '\nName: ' +
//           nameInput +
//           '\nMessage:' +
//           messageInput
//       );
//     } else {
//       // Show form validation errors if needed
//       form.classList.add('was-validated');
//     }
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const footerSubmitButton = document.getElementById('footerSubmitButton');

//   footerSubmitButton.addEventListener('click', function () {
//     const emailInput = document.getElementById('footerEmailInput').value;
//     const nameInput = document.getElementById('footerNameInput').value;
//     const messageInput = document.getElementById('footerMessageInput').value;

//     // Validate the form if needed
//     const form = document.getElementById('footerForm');
//     if (form.checkValidity()) {
//       console.log('Email:', emailInput);
//       console.log('Name:', nameInput);
//       console.log('Message:', messageInput);

//       // You can also display the data in an alert
//       alert(
//         'Email: ' +
//           emailInput +
//           '\nName: ' +
//           nameInput +
//           '\nMessage: ' +
//           messageInput
//       );
//     } else {
//       // Show form validation errors if needed
//       form.classList.add('was-validated');
//     }
//   });
// });
