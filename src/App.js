import { useState } from 'react';
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
  const [play, setPlay] = useState(true);
  const handlePlayPause = () => {
    setPlay(!play);
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
            width={'100%'}
            height={'100%'}
            url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            muted={true}
            playing={play}
          />
          <PlayerControls play={play} onPlayPause={handlePlayPause} />
        </PlayerWrapper>
      </Container>
    </>
  );
}

export default App;
