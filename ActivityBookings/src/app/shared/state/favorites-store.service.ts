import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesStoreService {
  // favorites: string[] = []

  private oldFavorites: string[] = [];
  private favorites: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(
    []
  );
  public favorites$: Observable<string[]> = this.favorites.asObservable();

  public getFavorites$(): Observable<string[]> {
    return this.favorites$;
  }

  public get snapshot(): string[] {
    return this.favorites.value;
  }

  constructor() {}

  public setFavorites(favorites: string[]): void {
    console.log('setFavorites', favorites);
    this.oldFavorites = this.favorites.value;
    this.favorites.next(favorites);
  }

  public resetFavorites(): void {
    console.log('resetFavorites', this.oldFavorites);
    this.favorites.next(this.oldFavorites);
  }
}
