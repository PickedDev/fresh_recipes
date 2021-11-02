import React, { useEffect, useState } from 'react';
import { RecipeBox } from '../RecipeBox/RecipeBox';
import { useStyles } from './styles';

export const Home = (props: any) => {
    const boxes = [
        {
            title: 'personal',
        },
        {
            title: 'family',
        },
    ];

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {boxes.map((box: any) => (
                <RecipeBox {...box} />
            ))}
        </div>
    );
};
