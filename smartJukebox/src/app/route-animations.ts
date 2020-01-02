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
        transition('Channels => Auth', [
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

        transition('Home => Players', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Home => Search', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Home => Channels', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Youtube => Spotify', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Youtube => Search', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Youtube => Channels', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Spotify => Search', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Spotify => Channels', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Search => Channels', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Players => Search', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Players => Channels', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.2s ease-in-out',
                        style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),

        transition('Channels => Search', [
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
        transition('Channels => Players', [
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
        transition('Channels => Home', [
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
        transition('Search => Players', [
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
        transition('Search => Home', [
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
        transition('Players => Home', [
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
        transition('Youtube => Home', [
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
        transition('Spotify => Youtube', [
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
        transition('Spotify => Home', [
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
        transition('Youtube => Players', [
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
