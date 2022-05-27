export interface IVideosFavoritesPage {
  favorites: string[]
  DeleteVideo: (video: string) => void
}
