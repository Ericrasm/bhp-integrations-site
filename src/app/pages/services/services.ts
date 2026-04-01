import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { services } from '../../data/site-content';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export default class Services {
  protected readonly services = services;
}
