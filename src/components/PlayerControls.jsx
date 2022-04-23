import { useState } from 'react';

import Typography from '@mui/material/Typography';
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
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
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

function PlayerControls(props) {
  const {
    play,
    onPlayPause,
    onRewind,
    onForward,
    muted,
    onMuted,
    volume,
    onVolumeChange,
    speedRate,
    onSpeedRateClick,
    onFullScreen,
    played,
    onPlayedChange,
  } = props;
  const [speed, setSpeed] = useState(null);
  const handleSpeedClick = (e) => {
    setSpeed(speed ? null : e.target);
  };
  const handleClose = () => {
    setSpeed(null);
  };
  const open = Boolean(speed);
  //   const id = open ? 'speed-poper' : undefined;

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
        <ControlIcon aria-label='rewind' onClick={onRewind}>
          <FastRewindIcon fontSize='inherit' />
        </ControlIcon>
        {!play ? (
          <ControlIcon aria-label='play' onClick={onPlayPause}>
            <PlayArrowIcon fontSize='inherit' />
          </ControlIcon>
        ) : (
          <ControlIcon aria-label='play' onClick={onPlayPause}>
            <PauseIcon fontSize='inherit' />
          </ControlIcon>
        )}

        <ControlIcon aria-label='forward' onClick={onForward}>
          <FastForwardIcon fontSize='inherit' />
        </ControlIcon>
      </Grid>
      {/* bottom controller */}
      <Grid
        container
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        style={{ padding: 16 }}
      >
        <Grid item xs={12}>
          <PrettoSlider
            min={0}
            max={100}
            value={played * 100}
            valueLabelDisplay='auto'
            onChange={onPlayedChange}
          />
        </Grid>
        <Grid item>
          <Grid container direction='row' alignItems='center'>
            {!play ? (
              <BottomIcon onClick={onPlayPause}>
                <PlayArrowIcon fontSize='large' />
              </BottomIcon>
            ) : (
              <BottomIcon onClick={onPlayPause}>
                <PauseIcon fontSize='large' />
              </BottomIcon>
            )}
            {muted ? (
              <BottomIcon onClick={onMuted}>
                <VolumeOffIcon fontSize='large' />
              </BottomIcon>
            ) : (
              <BottomIcon onClick={onMuted}>
                <VolumeUpIcon fontSize='large' />
              </BottomIcon>
            )}
            <VolumeSlider
              min={0}
              max={100}
              value={volume * 100}
              onChange={onVolumeChange}
              //   onChangeCommitted={onVolumeKeyChange}
            />
            <Button variant='text' style={{ color: '#fff', marginLeft: 16 }}>
              <Typography>05:05</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <BottomIcon variant='text' onClick={handleSpeedClick}>
            <Typography>{speedRate}X</Typography>
          </BottomIcon>
          <SpeedPopper
            id='speedPopper'
            open={open}
            onClose={handleClose}
            anchorEl={speed}
            placement='top'
          >
            <Grid container direction='column-reverse'>
              {[0.5, 1, 1.5, 2].map((rate) => (
                <Button
                  variant='contained'
                  key={rate}
                  onClick={() => onSpeedRateClick(rate)}
                >
                  <Typography
                    color={speedRate === rate ? 'secondary' : 'default'}
                  >
                    {rate}X
                  </Typography>
                </Button>
              ))}
            </Grid>
          </SpeedPopper>
          <BottomIcon onClick={onFullScreen}>
            <FullscreenIcon fontSize='large' />
          </BottomIcon>
        </Grid>
      </Grid>
    </ControlsWrapper>
  );
}

export default PlayerControls;
