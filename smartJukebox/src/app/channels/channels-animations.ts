import {
    transition,
    trigger,
    style,
    animate
} from '@angular/animations';

export const divAnimation = [
    trigger(
        'formAnimation', [
            transition(':enter', [
                style({transform: 'translateX(-100%)', opacity: 0}),
                animate('200ms', style({transform: 'translateX(0)', opacity: 1}))
            ]),
            transition(':leave', [
                style({transform: 'translateX(0)', opacity: 1}),
                animate('300ms', style({transform: 'translateX(-100%)', opacity: 0}))
            ])
        ]
    ),
    trigger(
        'changeViewAnimation', [
            transition(':enter', [
                style({opacity: 0}),
                animate(200)
            ])
        ]
    )
];