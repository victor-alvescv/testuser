
import React from 'react';
import { Slider } from './ui/slider';

const YearSlider = () => {
    return (
        <>
            <Slider 
            width="200px" 
            defaultValue={[30, 60]}
            colorPallet
            />
        </>
    );
}

export default YearSlider;
