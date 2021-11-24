import React, { useRef } from 'react';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import { useStyles } from './styles';

export default function SliderComponent() {
    const classes = useStyles();
    const [value, setValue] = React.useState<number | string | (number | string)[]>(30);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue);
    };

    return (
        <div className={classes.ItemDescription}>
            <div className={classes.sliderData}>
                <span className={classes.minValue}> {'<'}10</span>
                <MuiInput
                    value={value}
                    size="small"
                    id="value-input"
                    disableUnderline
                    className={classes.CurrentValue}
                    onChange={handleInputChange}
                    sx={{ color: '#1FCC79', fontSize: '15px', fontWeight: 'bold' }}
                />

                <span className={classes.maxValue}> {'>'} 60 </span>
            </div>
            <Slider
                max={60}
                defaultValue={30}
                onChange={handleSliderChange}
                sx={{
                    color: '#1FCC79',
                    '.MuiSlider-rail': {
                        color: '#F4F5F7',
                        height: '8px',
                    },
                    '.MuiSlider-thumb': {
                        width: '40px',
                        borderRadius: '32px',
                    },
                    '.MuiSlider-track': {
                        height: '8px',
                    },
                }}
            />
        </div>
    );
}
