import react from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import ReactPlayer from 'react-player';

import { styled } from '@mui/system';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const PlayerWrapper = styled('div')({
  width: '100%',
  backgroundColor: 'red ',
  position: 'relative',
});
const ControlsWrapper = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.6)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  zIndex: 1,
});
const ControlIcon = styled(IconButton)({
  color: '#777',
  fontSize: 50,
  transform: 'scale(0.9)',
  '&hover': {
    color: '#fff',
    transform: 'scale(1)',
  },
});

function App() {
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
            playing={true}
          />
          <ControlsWrapper>
            {/* top controller */}
            <Grid
              container
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              style={{ padding: 16 }}
            >
              <Grid item>
                <Typography variant='h5' style={{ color: '#fff' }}>
                  Video Title
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  color='primary'
                  startIcon={<BookmarkIcon />}
                >
                  Bookmark
                </Button>
              </Grid>
            </Grid>
            {/* middle controller */}
            <Grid
              container
              direction='row'
              alignItems='center'
              justify='center'
            >
              <ControlIcon aria-label='rewind'>
                <FastRewindIcon fontSize='inherit' />
              </ControlIcon>
              <ControlIcon aria-label='play'>
                <PlayArrowIcon fontSize='inherit' />
              </ControlIcon>
              <ControlIcon aria-label='forward'>
                <FastForwardIcon fontSize='inherit' />
              </ControlIcon>
            </Grid>
          </ControlsWrapper>
        </PlayerWrapper>
      </Container>
    </>
  );
}

export default App;
