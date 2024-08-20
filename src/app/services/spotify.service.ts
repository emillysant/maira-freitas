import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private apiUrl = 'https://api.spotify.com/v1';

  
  constructor(private http: HttpClient) { }

  getArtistInfo( artistName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?q=${artistName}&type=artist`);
  }

  getAlbums( artistId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/artists/${artistId}/albums`);
  }

  getTracks( albumId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/tracks/${albumId}`);
  }
}
