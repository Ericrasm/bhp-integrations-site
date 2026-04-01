import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { services } from '../../data/site-content';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export default class Contact {
  protected readonly services = services;
}
