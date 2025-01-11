import styles from "../Directory.module.css"
import React, { useState } from 'react';
import { Slider } from './ui/slider';

const YearSlider = () => {
const [year, setYear] = useState([1888, 2024]);

    return (
        <>
        <div className={styles.slider__wrapper}>
            <Slider 
            width="200px"
            min={1888}
            max={2024} 
            value={year}
            onValueChange={(e) => setYear(e.value)}
            colorPalette="red"
            />
            <div className="slider__text">
                <h1>Years: {year[0]}-{</h1>
            </div>
            </div>
        </>
    );
}

export default YearSlider;
