import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { companySnapshot, differentiators, industries, services } from '../../data/site-content';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {
  protected readonly companySnapshot = companySnapshot.slice(0, 4);
  protected readonly differentiators = differentiators;
  protected readonly industries = industries;
  protected readonly services = services;
}
