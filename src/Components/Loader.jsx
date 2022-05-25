import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { useSelector } from 'react-redux';

export default function LinearBuffer() {
    const isLoading = useSelector(state => state.isLoading)

    return (
        <div hidden={isLoading === true ? false : true}>
            <LinearProgress />
        </div>
    );
}
