import { Component } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { routeAnimation } from './animation/route-animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [routeAnimation]
})
export class AppComponent {
  title = 'special';

  constructor(private contexts: ChildrenOutletContexts){
  }
  
  getRouteAnimationData(){
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation']
  }
}
