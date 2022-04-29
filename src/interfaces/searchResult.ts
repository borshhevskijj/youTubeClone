

export interface Ivideos {
  etag: String
  items: IvideoItems
  kind: String
  nextPageToken: String
  pageInfo:{
    totalResults:Number
    resultsPerPage:Number
  }
  regionCode: String
}


interface IvideoItems{
      // map(arg0: (item: any) => JSX.Element): import("react").ReactNode
  
      kind:" youtube#searchResult"
      etag: String
      id: {
        kind: String
        videoId: String
      }
      snippet: {
        publishedAt: String
        channelId: String
        title: String
        description: String
        thumbnails: {
          default: {
            url: String
            width: Number
            height: Number
          }
          medium: {
            url: String
            width: Number
            height: Number
          }
          high: {
            url: String
            width: Number
            height: Number
          }
        }
        channelTitle: String
        liveBroadcastContent: String
        publishTime: String
      }
  }

