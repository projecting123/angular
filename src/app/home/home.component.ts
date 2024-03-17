import { Component, inject } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {
  httpService: HttpService = inject(HttpService);
  isLoading:boolean = false;
}