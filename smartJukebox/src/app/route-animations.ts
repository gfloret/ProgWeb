import {
    transition,
    trigger,
    query,
    style,
    animate,
    group} from '@angular/animations';

export const slideInAnimation =

    trigger('routeAnimations', [

        transition('Players => Auth', [
            style({opacity: 0}),
            animate(200)
        ]),
        transition('Search => Auth', [
            style({opacity: 0}),
            animate(200)
        ]),
        transition('Youtube => Auth', [
            style({opacity: 0}),
            animate(200)
        ]),
        transition('Spotify => Auth', [
            style({opacity: 0}),
            animate(200)
        ]),
        transition('Channel => Auth', [
            style({opacity: 0}),
            animate(200)
        ]),
        transition('Home => Auth', [
            style({opacity: 0}),
            animate(200)
        ]),
        
        transition('Auth => Home', [
            style({opacity: 0}),
            animate(200)
        ]),
        transition('Signup => Home', [
            style({opacity: 0}),
            animate(200)
        ]),
        transition('Login => Home', [
            style({opacity: 0}),
            animate(200)
        ]),

        transition('* => *', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),
    ]);
