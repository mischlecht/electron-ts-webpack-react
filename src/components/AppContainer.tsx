import React from 'react';
import useStyles from './AppContainer.styles';
import { Grid, Typography } from '@mui/material';
// import Playlists from './features/playlist/Playlists';
// import VideoPlayer from './features/video-player/VideoPlayer';

const AppContainer = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Grid className={classes.videoPlayerContainer} item xs={9}>
        <Typography variant="h1">Video Player</Typography>
      </Grid>
      <Grid
        className={classes.playlistsContainer}
        item
        xs={3}
        spacing={1}
        justifyContent={'space-between'}
      >
        <Typography variant="h3">Playlists</Typography>
      </Grid>
    </Grid>
  );
};

export default AppContainer;
