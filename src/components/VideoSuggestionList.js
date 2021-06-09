import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';

const VideoSuggestionList = ({ data }) => {
    console.log(data);

    return (
        <>
            {
                data.map((item) => {
                    return (
                        <Paper elevation={6} square style= {{ marginBottom : '20px' }}>
                            <Grid container direction="row" spacing={0}>
                                <Grid item md={6} sm={12} xs={6}>
                                    <img src={item.snippet.thumbnails.medium.url} style={{ border: '0' }} width="100%" alt='img' />
                                </Grid>
                                <Grid item md={6} sm={12} xs={6} style={{ padding: '5px 5px 5px 10px' }}>
                                    <Typography variant="caption">{item.snippet.title}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    )
                })
            }
        </>
    )
}

export default VideoSuggestionList
