import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { companySnapshot, differentiators, industries } from '../../data/site-content';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export default class About {
  protected readonly companySnapshot = companySnapshot;
  protected readonly differentiators = differentiators;
  protected readonly industries = industries;
}
