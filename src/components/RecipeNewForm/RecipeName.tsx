import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useStyles } from './styles';

export default function RecipeName() {
    const classes = useStyles();
    return (
        <div className={classes.Item}>
            <span className={classes.ItemTitle}>Название рецепта</span>
            <div className={classes.ItemDescription}>
                <OutlinedInput
                    style={{ borderRadius: 32 }}
                    fullWidth
                    placeholder="Enter food name"
                    id="outlined-basic"
                    className={classes.ItemText}
                />
            </div>
        </div>
    );
}
