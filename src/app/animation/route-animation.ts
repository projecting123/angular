import { animate, style, transition, trigger } from "@angular/animations";

export const routeAnimation = trigger('routeAnimation', [
    transition('* <=> *', [style({opacity: 0}), animate('200ms ease-in-out')])
])