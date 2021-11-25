import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { useStyles } from './styles';

export default function RecipeDescription() {
    const classes = useStyles();
    return (
        <div className={classes.Item}>
            <span className={classes.ItemTitle}>Описание</span>
            <div className={classes.ItemDescription}>
                <TextField
                    variant="outlined"
                    fullWidth
                    minRows={2}
                    maxRows={10}
                    multiline
                    placeholder="Tell a little about your food"
                    className={classes.ItemText}
                />
            </div>
        </div>
    );
}
