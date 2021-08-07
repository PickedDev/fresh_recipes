import React from 'react'
import {useEffect ,useState} from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import RecipeMini from './RecipeMini';

const useStyles = makeStyles((theme) => ({
    container: {
      maxWidth: '1920px',
      padding: '0 20px',
      margin: '3em auto',
    
    },
    thumbsWrapper:{
        display: 'flex',
        flexWrap: 'wrap',
        background: '#9FA5C0',
        margin: '10px,0',
    },
    title:{
        fontWeight:'700',
        textAlign: 'center',
        fontSize: '24px',
        padding: '20px 0',
        background: '#BDC9B8',
        border: '1px solid #000000',
    },
}));


export default function RecipeBox(props) {
    const preventDefault = (event) => event.preventDefault();
    const classes = useStyles();

    const items = [
        {        
            "title": "Some dish",
            "time": "30",
            "ingridients": "Картошка, масло, курица, капуста ",
        },
        {
            "title": "Some dish",
            "time": "1,5",
            "ingridients": "Картошка, масло, курица, капуста",
        },
        {
            "title": "Some dish",
            "time": "47",
            "ingridients": "Картошка, масло, курица, капуста",
        },
        {
            "title": "Some dish",
            "time": "1.83",
            "ingridients": "Картошка, масло, курица, капуста",
        },
        {
            "title": "Some dish",
            "time": "1.21",
            "ingridients": "Картошка, масло, курица, капуста",
        },
        {
            "title": "Some dish",
            "time": "1.57",
            "ingridients": "Картошка, масло, курица, капуста",
        },
        {
            "title": "Some dish",
            "time": "1.45",
            "ingridients": "Картошка, масло, курица, капуста",
        },
        {
            "title": "Some dish",
            "time": "1.66",
            "ingridients": "Картошка, масло, курица, капуста",
        }
    ];

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Your {props.title} recipes </h1>
            <div className={classes.thumbsWrapper}>
              {props.title === "personal" || props.title === "family"  ? items.map(item => <RecipeMini { ...item } />) : null}
            </div>
        </div>
    )
}
