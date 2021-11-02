import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export const Footer = () => {
    const classes = useStyles();
    return <footer className={classes.footer}> &#169;Copyright 2021 Fresh Recipes</footer>;
};
