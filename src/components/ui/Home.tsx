// import React from 'react';
import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { RecipeBox } from './RecipeBox';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

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
