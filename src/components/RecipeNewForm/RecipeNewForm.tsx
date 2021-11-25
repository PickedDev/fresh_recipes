import React from 'react';
import { useStyles } from './styles';
import SliderComponent from './SliderComponent';
import Ingridients from './Ingridients';
import RecipeButtons from './RecipeButtons';
import Instructions from './Instructions';
import RecipeName from './RecipeName';
import RecipeDescription from './RecipeDescription';

export const RecipeNewForm = (props: any) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.formWrapper}>
                <h1 className={classes.title}>Добавить новый рецепт</h1>
                <div className={classes.formInner}>
                    <div className={classes.Item}>
                        <span className={classes.ItemTitle}>Поменять фото рецепта</span>
                    </div>
                    <RecipeName />
                    <RecipeDescription />
                    <SliderComponent />
                    <Ingridients />
                    <Instructions />
                    <RecipeButtons />
                </div>
            </div>
        </div>
    );
};
