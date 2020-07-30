import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect, useRef } from 'react';
import YouTubePlayer from 'youtube-player';
import './App.css';

// aS41Y_eyNrU

function YoutubePlayer(props) {
  const [videoId, setVideoId] = useState('M7lc1UVf-VE');
  const [isPlaying, setIsPlaying] = useState(false);
  const playerDivRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(function() {
    playerRef.current = YouTubePlayer(playerDivRef.current);
  }, []);

  useEffect(function() {
    const player = playerRef.current;
    player.loadVideoById(videoId);
    player.playVideo();
  }, [videoId]);

  useEffect(function() {
    const player = playerRef.current;
    if(isPlaying){
      player.playVideo();
      isPlaying = false;
    }
    else{
      player.stopVideo();
      isPlaying = true;
    }

  }, [isPlaying]);

  return (
    <div>
      <div>
      <button onClick={setIsPlaying(!isPlaying)} />
      <input type="text" value={videoId} onChange={(e) => setVideoId(e.target.value)} />
      </div>
      <div className='player-div' ref={playerDivRef} />
    </div>
  );
}


const App = () => {

  return (
    <div>
      <h1>Hello World</h1>
      <YoutubePlayer />
    </div>
  )
};


// main.js
// const root = document.querySelector('main');
// ReactDOM.render(<App />, root);


export default App;
