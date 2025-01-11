import styles from "../Directory.module.css"
import React from 'react';
import { Slider } from './ui/slider';

const YearSlider = () => {
    return (
        <>
        <div className={styles.slider__wrapper}>
            <Slider 
            width="200px" 
            defaultValue={[30, 60]}
            colorPalette="red"
            />
            </div>
        </>
    );
}

export default YearSlider;
