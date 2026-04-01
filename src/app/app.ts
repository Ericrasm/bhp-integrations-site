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
  protected readonly openDropdown = signal<string | null>(null);

  protected toggleDropdown(name: string): void {
    this.openDropdown.update(current => (current === name ? null : name));
  }

  protected openMenu(name: string): void {
    this.openDropdown.set(name);
  }

  protected closeMenu(name?: string): void {
    if (!name || this.openDropdown() === name) {
      this.openDropdown.set(null);
    }
  }

  protected handleGroupFocusOut(event: FocusEvent, name: string): void {
    const nextTarget = event.relatedTarget;

    if (!(event.currentTarget instanceof HTMLElement) || !(nextTarget instanceof Node)) {
      this.closeMenu(name);
      return;
    }

    if (!event.currentTarget.contains(nextTarget)) {
      this.closeMenu(name);
    }
  }

  protected closeDropdown(): void {
    this.openDropdown.set(null);
  }
}
