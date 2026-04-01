import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { serviceMap, services } from '../../data/site-content';

@Component({
  standalone: true,
  selector: 'app-service-detail',
  imports: [RouterLink],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.css',
})
export default class ServiceDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly slug = toSignal(this.route.paramMap.pipe(map(params => params.get('slug') ?? '')));

  protected readonly service = computed(() => {
    const slug = this.slug() ?? '';
    return serviceMap[slug] ?? null;
  });
  protected readonly siblingServices = services;
}
