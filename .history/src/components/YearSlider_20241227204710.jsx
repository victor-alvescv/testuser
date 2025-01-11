import styles from "../Directory.module.css"
import React from 'react';
import { Slider } from './ui/slider';

const YearSlider = () => {
    return (
        <>
        <div className={styles.slider__wrapper}>
            <Slider 
            width="200px" 
            defaultValue={[1888, 60]}
            colorPalette="red"
            />
            <div className="slider__text">
                <h1>Year:1888</h1>
            </div>
            </div>
        </>
    );
}

export default YearSlider;
