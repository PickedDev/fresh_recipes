import React from 'react'
import {useEffect ,useState} from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import RecipeBox from './RecipeBox';

const useStyles = makeStyles((theme) => ({
    root: {
    
    },
}));


export default function Home(props) {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const boxes = [
        {        
            "title": "personal",
        },
        {
            "title": "family",
        },
    ];
    // useEffect(()=>{
    //     fetch("../data.json")
     
    //     .then(res  => res.json())
   
    //         .then((result) => {
    //             setIsLoaded(true);
    //             setItems(result)
    //         }
    //     )
    // },[])
    const classes = useStyles();
    // if (error) {
    //     return <div>Ошибка: {error.message}</div>;
    //   } else if (!isLoaded) {
    //     return <div>Загрузка...</div>;
    //   } else {
    return (        
            <div className={classes.root}>
                {boxes.map(box => <RecipeBox { ...box } />)}
            </div>
        )

}
//} - from else block
