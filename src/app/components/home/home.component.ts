import { Component } from '@angular/core';
import { SpotifyAutenticationService } from '../../services/spotify-autentication.service';
import { SpotifyService } from '../../services/spotify.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  token!: string;
  artist: any;
  albums: any[] = [];
  tracks: any[] = [];

  constructor(private spotifyService: SpotifyService){}
  
  ngOnInit(): void {
    this.loadArtist();
  }
  loadArtist(): void {
    this.spotifyService.getArtistInfo('Maira Freitas').subscribe((data) => {
      console.log(data.artists.items[0]);
      this.artist = data.artists.items[0];
      this.loadAlbums(this.artist.id);
    });
  }

  loadAlbums(artistId: string): void {
    this.spotifyService.getAlbums(artistId).subscribe(data => {
      this.albums = data.items;

    });
  }

  loadTracks(albumId: string): void {
    this.spotifyService.getTracks(albumId).subscribe(tracksData => {
      this.tracks = tracksData.items;
      
    });
  }

}
