import react from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ReactPlayer from 'react-player';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';

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
                  startIcon={<BookmarkIcon></BookmarkIcon>}
                >
                  Bookmark
                </Button>
              </Grid>
            </Grid>
          </ControlsWrapper>
        </PlayerWrapper>
      </Container>
    </>
  );
}

export default App;
