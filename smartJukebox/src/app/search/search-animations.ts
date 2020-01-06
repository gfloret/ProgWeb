import {
    transition,
    trigger,
    style,
    animate
} from '@angular/animations';

export const divAnimation = [
    trigger(
        'changeViewAnimation', [
            transition(':enter', [
                style({opacity: 0}),
                animate(400)
            ]),
            transition(':leave', [
                style({opacity: 0}),
                animate(400)
            ])
        ]
    ),
    trigger(
        'alertAnimation', [
            transition(':enter', [
                style({opacity: 1}),
                animate(800)
            ]),
            transition(':leave', [
                style({opacity: 0}),
                animate(3000)
            ])
        ]
    )
];