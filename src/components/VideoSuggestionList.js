import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';

const VideoSuggestionList = ({ cur, list, setCur }) => {

    const handleClick = (e) => {
        list.forEach((val) => {
            if(val.id.videoId === e.target.id)
                setCur(val);
        })
    }

    console.log(cur, list);

    return (
        <>
            {
                list.map((item) => {
                    const a = (item.id.videoId !== cur.id.videoId) ?
                        (<Paper elevation={6} square style= {{ marginBottom : '20px', cursor: 'pointer' }} onClick={handleClick} key={item.id.videoId}>
                            <Grid container direction="row" spacing={0} id={item.id.videoId}>
                                <Grid item md={6} sm={12} xs={6} style={{ pointerEvents: 'none' }}>
                                    <img src={item.snippet.thumbnails.medium.url} style={{ border: '0', pointerEvents: 'none' }} width="100%" height="100%" alt='img' />
                                </Grid>
                                <Grid item md={6} sm={12} xs={6} style={{ padding: '5px 5px 5px 10px', pointerEvents: 'none' }}>
                                    <Typography variant="caption" style={{ pointerEvents: 'none' }}>{item.snippet.title}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>) : (<></>)

                    return a;
                })
            }
        </>
    )
}

export default VideoSuggestionList
