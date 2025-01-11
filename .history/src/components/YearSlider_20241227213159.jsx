import styles from "../Directory.module.css"
import { Slider } from './ui/slider';

const YearSlider = ({year, setYear}) => {
    return (
        <>
        <div className={styles.slider__wrapper}>
            <Slider 
            width="200px"
            min={1888}
            max={2024} 
            value={year}
            onValueChange={(e) => se(e.value)}
            colorPalette="red"
            />
            <div className="slider__text">
                <h1>Year: {year[0]}-{year[1]}</h1>
            </div>
            </div>
        </>
    );
}

export default YearSlider;
