import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { useStyles } from './styles';

export default function RecipeButtons() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.heading}> Приятного апетита!</div>
            <div className={classes.buttons}>
                <Button color="primary" className={classes.btnDelete}>
                    {' '}
                    Удалить рецепт{' '}
                </Button>
                <Button color="primary" className={classes.btn}>
                    {' '}
                    Редактировать рецепт{' '}
                </Button>
            </div>
        </>
    );
}
