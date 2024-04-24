import { createPopper, right} from '@popperjs/core';

const el = document.querySelector('.tooltip__btn');
const tooltip = document.querySelector('.tooltip__txt');
const arrow = document.querySelector('.tooltip__arrow');

createPopper(el, tooltip, {
  placement: 'top',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 8],
      },
    },
    {
      name: 'arrow',
      options: {
        element: arrow,
        paddding: 20,
      },
    },
  ],
});
