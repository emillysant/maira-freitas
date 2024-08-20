import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, switchMap, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAutenticationService {

  private clientId = environment.spotifyClientId;
  private clientSecret = environment.spotifyClientSecret;
  private tokenUrl = 'https://accounts.spotify.com/api/token';
  private tokenKey = 'spotifyToken';

  private isBrowser: boolean;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  getToken(): Observable<string> {
    if (this.isBrowser) {
      const storedToken = localStorage.getItem(this.tokenKey);

      if (storedToken) {
        return of(storedToken);
      } else {
        return this.fetchToken();
      }
    } else {
      return of('');
    }
  }

  private fetchToken(): Observable<string> {
    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');

    const headers = new HttpHeaders({
      'Authorization': `Basic ${btoa(`${this.clientId}:${this.clientSecret}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<{ access_token: string }>(this.tokenUrl, body.toString(), { headers })
      .pipe(
        tap(response => {
          if (this.isBrowser) {
            localStorage.setItem(this.tokenKey, response.access_token);
          }
        }),
        switchMap(response => of(response.access_token)),
        catchError(error => {
          console.error('Error fetching token', error);
          return of('');
        })
      );
  }
}
