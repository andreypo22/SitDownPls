import { validateForms } from '../functions/validate-forms';

const rules = [
  {
    ruleSelector: '.input-name',
    rules: [
        {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Недопустимый формат. Минимум 3 символа',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите имя!',
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите телефон'
      }
    ]
  },
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите Email'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный Email!'
      }
    ]
  },
];

const rules1 = [
  {
    ruleSelector: '.input-name',
    rules: [
        {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Недопустимый формат. Минимум 3 символа',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите имя!',
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите телефон'
      }
    ]
  }
];


const afterForm = () => {

};

validateForms('.contacts__form', rules, afterForm);
validateForms('.card__form', rules1, afterForm);
