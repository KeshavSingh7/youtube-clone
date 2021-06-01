import { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import youtube from './api/youtubeAPI';
import SearchBar from './components/SearchBar';
import CurrentVideo from './components/CurrentVideo';
import VideoSuggestionList from './components/VideoSuggestionList';

function App() {
  const [currentVideo, setCurrentVideo] = useState();
  const [videoList, setVideoList] = useState();

  const callback = async (value) => {
    const videoData = await youtube.get('search', {
      params: {
        key: 'AIzaSyByvqIeKbMnxwM9QDnOH40r6GdK0KjCxEE',
        maxResults: 5,
        part: 'snippet',
        q: value
      }
    });

    setCurrentVideo(videoData.data.items[0]);
    setVideoList(videoData.data.items);
  }

  useEffect(() => {
  }, [currentVideo])

  return (
    <>
      <Grid container justify="center" spacing={0}>
        <Grid item xs={12}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              {/* SearchBar */ }
              <SearchBar parentCallback={callback} />
            </Grid>
          </Grid>
          <Grid item xs={8}>
              {/* Currently playing video */}
              <CurrentVideo data={currentVideo} />
          </Grid>
          <Grid item xs={4}>
              {/* Video suggestion List */}
              <VideoSuggestionList data={videoList} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
