export interface Ivideos {
  etag: string
  items: IvideoItems
  kind: string
  nextPageToken: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  regionCode: string
}

export interface IvideoItems {
  [x: string]: any
  // map(arg0: (item: any) => JSX.Element): import("react").ReactNode

  kind: "youtube#searchResult"
  etag: string
  id: {
    kind?: string
    videoId: string
  }
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      default: {
        url: string
        width?: number
        height?: number
      }
      medium: {
        url: string
        width?: number
        height?: number
      }
      high: {
        url: string
        width?: number
        height?: number
      }
    }
    channelTitle: string
    liveBroadcastContent: string
    publishTime: string
  }
}
