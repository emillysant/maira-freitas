import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [],
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss'
})
export class CallbackComponent implements OnInit {
  token!: string;
  artist: any;
  albums: any[] = [];
  tracks: any[] = [];
  ngOnInit(): void {
    if(!this.token){
      this.token = localStorage.getItem('spotifyToken')!;
    }
    this.loadArtist()
  }
  constructor(private spotifyService: SpotifyService){}
  
  loadArtist(): void {
    this.spotifyService.getArtistInfo('Maira Freitas').subscribe((data) => {
      console.log(data.artists.items[0]);
      this.artist = data.artists.items[0];
   
    });
  }
}
