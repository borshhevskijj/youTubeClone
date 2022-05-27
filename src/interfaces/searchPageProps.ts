import { Ivideos } from "./searchResult"

export interface IsearchPageProps {
  isLoaded: boolean
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>
  toggle: boolean
  debouncedInput: string
  inputValueToUrl: string
}
export interface IvideosSearchPageProps {
  videos: Ivideos
}
