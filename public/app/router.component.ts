import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {HomeComponent} from './components/home/home.component'


@Component({
    selector: 'router',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    styles:[]
})

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent }
])

export class AppRouterComponent {}