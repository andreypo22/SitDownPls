import JustValidate from 'just-validate';
import Inputmask from "inputmask";
import GraphModal from 'graph-modal';
const modal = new GraphModal();



const modalOpenMain = document.querySelector('.graph-modal__main');
const disScrollMain = document.querySelector('.page__body-main');
const modalOpenCard = document.querySelector('.graph-modal__container--call');
const modalOpenBay = document.querySelector('.graph-modal__container--bay');
const btnCard = document.querySelector('.form__btn');



export const validateForms = (selector, rules, afterSend) => {
  const form = document?.querySelector(selector);
  const telSelector = form?.querySelector('input[type="tel"]');

  if (!form) {
    console.error('Нет такого селектора!');
    return false;
  }

  if (!rules) {
    console.error('Вы не передали правила валидации!');
    return false;
  }

  if (telSelector) {
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    for (let item of rules) {
      if (item.tel) {
        item.rules.push({
          rule: 'function',
          validator: function() {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
          errorMessage: item.telError
        });
      }
    }
  }

  const validation = new JustValidate('.contacts__form');

  for (let item of rules) {
    validation
      .addField(item.ruleSelector, item.rules);
  }

  validation.onFail(() => {

    // modalOpenCard.classList.remove('graph-modal-open');
    // modalOpenBay.classList.add('graph-modal-open');
      modalOpenMain.classList.remove('is-open');
      disScrollMain.classList.remove('disable-scroll');

      modalOpenBay.classList.add('graph-modal-open');
      modalOpenCard.classList.remove('graph-modal-open');

      // disScrollCard.classList.remove('disable-scroll');




    // disScrollCard.classList.remove('disable-scroll');
  })



  validation.onSuccess((ev) => {

    // btn.disabled = false;

    // let formData = new FormData(ev.target);

    // let xhr = new XMLHttpRequest();

    // xhr.onreadystatechange = function () {
    //   if (xhr.readyState === 4) {
    //     if (xhr.status === 200) {
    //       if (afterSend) {
    //         afterSend();
    //       }
    //
    //     }
    //   }
    // }

    // xhr.open('POST', 'mail.php', true);
    // xhr.send(formData);

    ev.target.reset();

  });


  // const validationCont = new JustValidate('.contacts__form');
  // for (let item of rules) {
  //   validationCont
  //     .addField(item.ruleSelector, item.rules);
  // }

  // validationCont.onFail(() => {

  // })

  // validationCont.onSuccess((ev) => {
  //   ev.target.reset();
  // })

};

