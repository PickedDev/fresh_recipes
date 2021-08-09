import React from 'react'
import { useEffect, useState } from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import RecipeBox from './RecipeBox';
// import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {

    },
}));


export default function Home(props) {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [recipes, setRecipes] = useState([])
    const boxes = [
        {
            "title": "personal",
        },
        {
            "title": "family",
        },
    ];
    // useEffect(()=>{

    //     async function fetchRecipes() {
    //         const { data } = await axios.get('https://fresh-recipes-backend.herokuapp.com/api/recipes')
    //         setRecipes(data)
    //     }

    //     fetchRecipes()

    // },[])
    const classes = useStyles();
    // if (error) {
    //     return <div>Ошибка: {error.message}</div>;
    //   } else if (!isLoaded) {
    //     return <div>Загрузка...</div>;
    //   } else {
    return (
        <div className={classes.root}>
            {boxes.map(box => <RecipeBox {...box} />)}
        </div>
    )

}
//} - from else block
