import styles from "../Directory.module.css"
import React from 'react';
import { Slider } from './ui/slider';

const YearSlider = () => {
    return (
        <>
        <div className={styles.slider__wrapper}>
            <Slider 
            width="200px"
            min= 
            defaultValue={[1888, 2024]}
            colorPalette="red"
            />
            <div className="slider__text">
                <h1>Years: 1888-2024</h1>
            </div>
            </div>
        </>
    );
}

export default YearSlider;
