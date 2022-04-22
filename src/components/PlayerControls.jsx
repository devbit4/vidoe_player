import { useState } from 'react';
import ReactPlayer from 'react-player';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import Popper from '@mui/material/Popper';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

import { styled } from '@mui/system';

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
const PlayerWrapper = styled('div')({
  width: '100%',
  backgroundColor: 'red ',
  position: 'relative',
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
const PrettoSlider = styled(Slider)({
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});
const BottomIcon = styled(IconButton)({
  color: '#999',
  '&:hover': {
    color: '#fff',
  },
});
const VolumeSlider = styled(Slider)({
  width: 100,
});
const SpeedPopper = styled(Popper)({
  zIndex: '1',
});

function PlayerControls() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSpeedClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'playbackrate-popper' : undefined;
  return (
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
        justifyContent='center'
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
      {/* bottom controller */}
      <Grid
        container='row'
        alignItems='center'
        justifyContent='space-between'
        style={{ padding: 16 }}
      >
        <Grid item xs={12}>
          <PrettoSlider
            min={0}
            max={100}
            defaultValue={20}
            valueLabelDisplay='auto'
          />
        </Grid>
        <Grid item>
          <Grid container direction='row' alignItems='center'>
            <BottomIcon>
              <PlayArrowIcon fontSize='large' />
            </BottomIcon>
            <BottomIcon>
              <VolumeUpIcon fontSize='large' />
            </BottomIcon>
            <VolumeSlider min={0} max={100} defaultValue={100}></VolumeSlider>
            <Button variant='text' style={{ color: '#fff', marginLeft: 16 }}>
              <Typography>05:05</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <BottomIcon variant='text' onClick={handleSpeedClick}>
            <Typography>1X</Typography>
          </BottomIcon>
          <SpeedPopper
            id={id}
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
            placement={'top'}
          >
            <Grid container direction='column-reverse'>
              {[0.5, 1, 1.5, 2].map((rate) => (
                <Button variant='contained'>
                  <Typography>{rate}X</Typography>
                </Button>
              ))}
            </Grid>
          </SpeedPopper>
          <BottomIcon>
            <FullscreenIcon fontSize='large' />
          </BottomIcon>
        </Grid>
      </Grid>
    </ControlsWrapper>
  );
}

export default PlayerControls;
