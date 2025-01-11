import { Slider } from '@chakra-ui/react';
import React from 'react';

const YearSlider = () => {
    return (
        <div>
            <Slider width="200px" defaultValue={[30, 60]}/>
        <div/>
    );
}

export default YearSlider;
