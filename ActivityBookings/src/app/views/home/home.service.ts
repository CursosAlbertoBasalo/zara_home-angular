import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/shared/models/activity.type';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private url: string = 'http://localhost:3000/activities';

  public favorites: string[] = [
    'standup-surfing_laco-di-como_2023-08-01',
    'kayaking-grand_canyon_2024-07-14',
  ];

  constructor(private http: HttpClient) {}

  public getActivities$(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.url);
  }

  public toggleFavorite(slug: string): void {
    const index = this.favorites.indexOf(slug);
    if (index === -1) {
      this.favorites.push(slug);
    } else {
      this.favorites.splice(index, 1);
    }
  }
}
