import { trigger, sequence, state, animate, transition, style } from '@angular/animations';

export const rowsAnimation =
    trigger('rowsAnimation', [
      transition('void => *', [
        style({ height: '*', opacity: '0', transform: 'translateX(-400px)', 'box-shadow': 'none'}),
        sequence([
        //   animate('.35s ease', style({ background: 'linear-gradient(-90deg, #d7d2cc, #cfdef3)', height: '*', opacity: '.15', transform: 'translateX(0)', 'box-shadow': 'none', })),
        animate('.35s ease', style({ background: '#6c5b7b', height: '*', opacity: '.15', transform: 'translateX(0)', 'box-shadow': 'none', })),
        animate('.35s ease', style({ height: '*', opacity: 1, transform: 'translateX(0)' }))
        ])
      ])
    ]);
