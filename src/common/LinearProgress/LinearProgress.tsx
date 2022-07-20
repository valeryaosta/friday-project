import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export const LinearProgressBar = () => {
    return (
        <Stack sx={{width: '100%', color: 'grey.500'}}>
            <LinearProgress color="secondary" sx={{position: "absolute", top: 0, left: 0, right: 0}}/>
        </Stack>
    );
}