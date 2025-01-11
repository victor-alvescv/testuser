
import React from 'react';
import { slider } from './ui/slider';

const YearSlider = () => {
    return (
        <>
            <slider width="200px" defaultValue={[30, 60]}/>
        </>
    );
}

export default YearSlider;
