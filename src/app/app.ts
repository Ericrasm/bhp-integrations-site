import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { services } from './data/site-content';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('bhp-site');
  protected readonly services = services;
  protected readonly aboutLinks = [
    { path: '/about/faq', label: 'FAQ' },
    { path: '/about/blogs', label: 'Blogs' },
    { path: '/about/careers', label: 'Careers' },
  ];
}
