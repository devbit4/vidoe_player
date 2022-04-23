import { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { styled } from '@mui/system';
import PlayerControls from './components/PlayerControls';

const PlayerWrapper = styled('div')({
  width: '100%',
  backgroundColor: 'red ',
  position: 'relative',
});

function App() {
  // middle controller
  const [play, setPlay] = useState(true);
  const handlePlayPause = () => {
    setPlay(!play);
  };
  const player = useRef();
  const handleRewind = () => {
    player.current.seekTo(player.current.getCurrentTime() - 30);
  };
  const handleForward = () => {
    player.current.seekTo(player.current.getCurrentTime() + 30);
  };
  // bottom controller
  const [muted, setMuted] = useState(false);
  const handleMuted = () => {
    setMuted(!muted);
    setVolume(!muted ? 0 : 0.2);
  };
  const [volume, setVolume] = useState(0.5);
  const handleVolumeChange = (e) => {
    const newValue = Number(e.target.value);
    setVolume(newValue / 100);
    setMuted(newValue === 0 ? true : false);
  };
  const handleVolumeKeyChange = (e) => {
    const newValue = Number(e.target.value);
    setVolume(newValue / 100);
    setMuted(newValue === 0 ? true : false);
  };
  const [speedRate, setSpeedRate] = useState(1);
  const handleSpeedRateClick = (speed) => {
    setSpeedRate(speed);
  };

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6'>React Video Player</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth='md'>
        <PlayerWrapper>
          <ReactPlayer
            ref={player}
            width={'100%'}
            height={'100%'}
            url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            muted={muted}
            playing={play}
            volume={volume}
          />
          <PlayerControls
            play={play}
            onPlayPause={handlePlayPause}
            onRewind={handleRewind}
            onForward={handleForward}
            muted={muted}
            onMuted={handleMuted}
            volume={volume}
            onVolumeChange={handleVolumeChange}
            onVolumeKeyChange={handleVolumeKeyChange}
            speedRate={speedRate}
            onSpeedRateClick={handleSpeedRateClick}
          />
        </PlayerWrapper>
      </Container>
    </>
  );
}

export default App;
