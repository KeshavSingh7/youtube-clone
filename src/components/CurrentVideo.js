import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const CurrentVideo = ({ data }) => {
    
    const url = `https://www.youtube.com/embed/${data.id.videoId}`;

    return (
        <>
            <Paper elevation={6} style={{ height : '50%' }} square>
                <iframe src={url} title="title" style={{ border: '0' }} width="100%" height="100%" />
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }} square>
                <Typography variant="h6" color="textPrimary">{data.snippet.title}</Typography>
                <Typography variant="subtitle" color="textSecondary">{data.snippet.description}</Typography>
            </Paper>
        </>
    )
}

export default CurrentVideo
