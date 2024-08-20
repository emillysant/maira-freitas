interface ArtistImage {
    height: number;
    url: string;
    width: number;
  }
  
  interface Artist {
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string | null;
      total: number;
    };
    genres: string[];
    href: string;
    id: string;
    images: ArtistImage[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
  }
  