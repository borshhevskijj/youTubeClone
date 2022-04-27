
// useEffect(() => {
//   axios.get('https://jsonplaceholder.typicode.com/todos')
//   .then(res => {
//     const video:JsonPlhdr[] = res.data
//     setVideos(video)
//   })
// }, [inputValue])

//  const ytv=fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=the%20weekend&key=AIzaSyD5EbfHvULtLR2bYf1BdbiOjz6zU52hILw')
//     .then(response => response.json())`
//     .then(json => json.items)




// json видосики


export const jsonVideosResult = {
  kind: "youtube#searchListResponse",
  etag: "MmID9MbUNCkkDnpktgSqyf-5gqw",
  nextPageToken: "CAoQAA",
  regionCode: "BY",
  pageInfo: {
    totalResults: 1000000,
    resultsPerPage: 10
  },
  items: [
    {
      kind: "youtube#searchResult",
      etag: "8v0ogqTmzQWllcV1CCHuj-TxTWw",
      id: {
        kind: "youtube#video",
        videoId: "XXYlFuWEuKI" // ЭТО ID видоса https://www.youtube.com/watch?v={XXYlFuWEuKI}
      },
      snippet: {
        publishedAt: "2021-01-05T17:00:12Z",
        channelId: "UCF_fDSgPpBQuh1MsUTgIARQ", // это 2
        title: "The Weeknd - Save Your Tears (Official Music Video)", // это 1
        description: "Official music video by The Weeknd performing \"Save Your Tears\"– 'After Hours' available everywhere now: ...", //это 3
        thumbnails: {
          default :{
            url: "https://i.ytimg.com/vi/XXYlFuWEuKI/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/XXYlFuWEuKI/mqdefault.jpg",
            width: 320,
            height: 180
          },
          high: {
            url: "https://i.ytimg.com/vi/XXYlFuWEuKI/hqdefault.jpg",
            width: 480,
            height: 360
          }
        },
        channelTitle: "TheWeekndVEVO",
        liveBroadcastContent: "none",
        publishTime: "2021-01-05T17:00:12Z"
      }
    },

    {
      kind: "youtube#searchResult",
      etag: "RXJs6yJjwCItxkP2dhxo_eJCHEA",
      id: {
        kind: "youtube#video",
        videoId: "4NRXx6U8ABQ"
      },
      snippet: {
        publishedAt: "2020-01-21T18:00:10Z",
        channelId: "UCF_fDSgPpBQuh1MsUTgIARQ",
        title: "The Weeknd - Blinding Lights (Official Video)",
        description: "Official music video for The Weeknd \"Blinding Lights\" - available everywhere now: http://theweeknd.co/blindinglightsYD ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/4NRXx6U8ABQ/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/4NRXx6U8ABQ/mqdefault.jpg",
            width: 320,
            height: 180
          },
          high: {
            url: "https://i.ytimg.com/vi/4NRXx6U8ABQ/hqdefault.jpg",
            width: 480,
            height: 360
          }
        },
        channelTitle: "TheWeekndVEVO",
        liveBroadcastContent: "none",
        publishTime: "2020-01-21T18:00:10Z"
      }
    },
    {
      kind: "youtube#searchResult",
      etag: "FYXN4ShzeUmRE6dSTowuJrxxHY4",
      id: {
        kind: "youtube#video",
        videoId: "waU75jdUnYw"
      },
      snippet: {
        publishedAt: "2015-01-21T15:00:12Z",
        channelId: "UCF_fDSgPpBQuh1MsUTgIARQ",
        title: "The Weeknd - Earned It (from Fifty Shades Of Grey) (Official Video - Explicit)",
        description: "Receive “Earned It” instantly when you pre-order the Fifty Shades of Grey (Original Motion Picture Soundtrack) here: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/waU75jdUnYw/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/waU75jdUnYw/mqdefault.jpg",
            width: 320,
            height: 180
          },
          high: {
            url: "https://i.ytimg.com/vi/waU75jdUnYw/hqdefault.jpg",
            width: 480,
            height: 360
          }
        },
        channelTitle: "TheWeekndVEVO",
        liveBroadcastContent: "none",
        publishTime: "2015-01-21T15:00:12Z"
      }
    },
    {
      kind: "youtube#searchResult",
      etag: "mvdEyFtKTkcoG4payxTyIM-G3us",
      id: {
        kind: "youtube#video",
        videoId: "VafTMsrnSTU"
      },
      snippet: {
        publishedAt: "2022-01-07T20:00:09Z",
        channelId: "UCF_fDSgPpBQuh1MsUTgIARQ",
        title: "The Weeknd - Sacrifice (Official Music Video)",
        description: "EPILEPSY WARNING ******** *****EPILEPSY WARNING ******** *****EPILEPSY WARNING ******** Official music video for The ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/VafTMsrnSTU/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/VafTMsrnSTU/mqdefault.jpg",
            width: 320,
            height: 180
          },
          high: {
            url: "https://i.ytimg.com/vi/VafTMsrnSTU/hqdefault.jpg",
            width: 480,
            height: 360
          }
        },
        channelTitle: "TheWeekndVEVO",
        liveBroadcastContent: "none",
        publishTime: "2022-01-07T20:00:09Z"
      }
    },
    {
      kind: "youtube#searchResult",
      etag: "MqBTvqHkPMFB_4fpDgeBaYiM8eQ",
      id: {
        kind: "youtube#video",
        videoId: "yzTuBuRdAyA"
      },
      snippet: {
        publishedAt: "2015-05-27T13:00:03Z",
        channelId: "UCF_fDSgPpBQuh1MsUTgIARQ",
        title: "The Weeknd - The Hills (Official Video)",
        description: "The Weeknd - The Hills (Official Video) Download Song: http://theweeknd.co/BeautyBehindTheMadness Taken from the new ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/yzTuBuRdAyA/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/yzTuBuRdAyA/mqdefault.jpg",
            width: 320,
            height: 180
          },
          high: {
            url: "https://i.ytimg.com/vi/yzTuBuRdAyA/hqdefault.jpg",
            width: 480,
            height: 360
          }
        },
        channelTitle: "TheWeekndVEVO",
        liveBroadcastContent: "none",
        publishTime: "2015-05-27T13:00:03Z"
      }
    },
    {
      kind: "youtube#searchResult",
      etag: "J3o09VPPWAZ4ixna945WgZ2HBZY",
      id: {
        kind: "youtube#video",
        videoId: "34Na4j8AVgA"
      },
      snippet: {
        publishedAt: "2016-09-28T16:00:01Z",
        channelId: "UCF_fDSgPpBQuh1MsUTgIARQ",
        title: "The Weeknd - Starboy ft. Daft Punk (Official Video)",
        description: "Starboy ft. Daft Punk (Official Video) Taken from the new album Starboy http://theweeknd.co/StarboyYD Connect with The ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/34Na4j8AVgA/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/34Na4j8AVgA/mqdefault.jpg",
            width: 320,
            height: 180
          },
          high: {
            url: "https://i.ytimg.com/vi/34Na4j8AVgA/hqdefault.jpg",
            width: 480,
            height: 360
          }
        },
        channelTitle: "TheWeekndVEVO",
        liveBroadcastContent: "none",
        publishTime: "2016-09-28T16:00:01Z"
      }
    },
    {
      kind: "youtube#searchResult",
      etag: "KOIH9A2iDh5I8GS90qm_OqkcUiY",
      id: {
        kind: "youtube#video",
        videoId: "rhTl_OyehF8"
      },
      snippet: {
        publishedAt: "2021-08-06T04:00:09Z",
        channelId: "UCF_fDSgPpBQuh1MsUTgIARQ",
        title: "The Weeknd - Take My Breath (Official Music Video)",
        description: "EPILEPSY WARNING ******** *****EPILEPSY WARNING ******** *****EPILEPSY WARNING ******** Official music video for “Take ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/rhTl_OyehF8/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/rhTl_OyehF8/mqdefault.jpg",
            width: 320,
            height: 180
          },
          high: {
            url: "https://i.ytimg.com/vi/rhTl_OyehF8/hqdefault.jpg",
            width: 480,
            height: 360
          }
        },
        channelTitle: "TheWeekndVEVO",
        liveBroadcastContent: "none",
        publishTime: "2021-08-06T04:00:09Z"
      }
    },
    {
      kind: "youtube#searchResult",
      etag: "hCjSkgYOgBELUcGbfnItaR7tOvE",
      id: {
        kind: "youtube#video",
        videoId: "u9n7Cw-4_HQ"
      },
      snippet: {
        publishedAt: "2021-10-22T04:00:11Z",
        channelId: "UCF_fDSgPpBQuh1MsUTgIARQ",
        title: "Swedish House Mafia and The Weeknd - Moth To A Flame (Official Video)",
        description: "Swedish House Mafia and The Weeknd “Moth To A Flame” available now: https://SwedishHouseMafia.lnk.to/MothToAFlameID ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/u9n7Cw-4_HQ/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/u9n7Cw-4_HQ/mqdefault.jpg",
            width: 320,
            height: 180
          },
          high: {
            url: "https://i.ytimg.com/vi/u9n7Cw-4_HQ/hqdefault.jpg",
            width: 480,
            height: 360
          }
        },
        channelTitle: "TheWeekndVEVO",
        liveBroadcastContent: "none",
        publishTime: "2021-10-22T04:00:11Z"
      }
    },
    {
      kind: "youtube#searchResult",
      etag: "Qb0dND-mPvdXpvXiBuWDHm8Z6lA",
      id: {
        kind: "youtube#video",
        videoId: "qFLhGq0060w"
      },
      snippet: {
        publishedAt: "2017-03-10T05:00:03Z",
        channelId: "UCF_fDSgPpBQuh1MsUTgIARQ",
        title: "The Weeknd - I Feel It Coming ft. Daft Punk (Official Video)",
        description: "I Feel It Coming ft. Daft Punk (Official Video) Taken from the album Starboy https://TheWeeknd.lnk.to/IFeelItComingDaftPunkYD ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/qFLhGq0060w/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/qFLhGq0060w/mqdefault.jpg",
            width: 320,
            height: 180
          },
          high: {
            url: "https://i.ytimg.com/vi/qFLhGq0060w/hqdefault.jpg",
            width: 480,
            height: 360
          }
        },
        channelTitle: "TheWeekndVEVO",
        liveBroadcastContent: "none",
        publishTime: "2017-03-10T05:00:03Z"
      }
    },
    {
      kind: "youtube#searchResult",
      etag: "fHmoW69XvfWTP1YVpQlL1TmXOWk",
      id: {
        kind: "youtube#channel",
        channelId: "UC0WP5P-ufpRfjbNrmOWwLBQ"
      },
      snippet: {
        publishedAt: "2011-02-25T00:18:20Z",
        channelId: "UC0WP5P-ufpRfjbNrmOWwLBQ",
        title: "The Weeknd",
        description: "Official YouTube channel for The Weeknd. dawn FM - theweeknd.co/dawnfm.",
        thumbnails: {
          default: {
            url: "https://yt3.ggpht.com/QiI-c4cFyRPD0qVwTQooC3dlgJqHA_t6CpEAv818om-mqL9bqNDL4L_qXQVXx_eY76D_7cLD=s88-c-k-c0xffffffff-no-rj-mo"
          },
          medium: {
            url: "https://yt3.ggpht.com/QiI-c4cFyRPD0qVwTQooC3dlgJqHA_t6CpEAv818om-mqL9bqNDL4L_qXQVXx_eY76D_7cLD=s240-c-k-c0xffffffff-no-rj-mo"
          },
          high: {
            url: "https://yt3.ggpht.com/QiI-c4cFyRPD0qVwTQooC3dlgJqHA_t6CpEAv818om-mqL9bqNDL4L_qXQVXx_eY76D_7cLD=s800-c-k-c0xffffffff-no-rj-mo"
          }
        },
        channelTitle: "The Weeknd",
        liveBroadcastContent: "none",
        publishTime: "2011-02-25T00:18:20Z"
      }
    }
  ]
}
// json видосики


// https://www.youtube.com/watch?v=TE66McLMMEw гайд

  //(1)key=AIzaSyD5EbfHvULtLR2bYf1BdbiOjz6zU52hILw`
  //(2)key=AIzaSyDqQJB2oc4j5fZDY2K6BjorTRtP5TvGE9s`