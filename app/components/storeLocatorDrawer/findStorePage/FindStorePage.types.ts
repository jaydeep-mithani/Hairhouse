export interface FindStorePageProps {
  isLoaded: boolean
  onLoad: (autocomplete: google.maps.places.Autocomplete) => void
  onPlaceChanged: () => void
  inputValue: string
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
