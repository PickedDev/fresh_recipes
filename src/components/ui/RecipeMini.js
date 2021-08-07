import React from 'react'
import {useEffect ,useState} from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import Time from '../img/time.svg'
import Dish from '../img/dish.svg'
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    container: {
      maxWidth: '1920px',
      padding: '0 20px',
      margin: '0 auto',
    
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
    thumbsLink:{
        display: "block",
        fontSize: "20px",
        lineHeight: "1.2",
        padding: '12px',
        textAlign: 'center',
        background: '#51D496',
        color: '#FFFFFF',
        borderRadius: '0 0 10px 10px',
        width: '100%',
    },
    props:{
        display: "inline-block",
        textAlign: 'center',
        background: 'transparent',
        verticalAlign: "top",
        cursor: "pointer",
        margin: "0 50px",
        width: 'calc(20% - 50px)',               
        boxShadow: "-1px 1px 5px rgb(207 207 207 / 65%)",
        backgroundColor: "#ffffff",    
        borderRadius: '0px 0px 30px 30px',
    },
    ImgWarpper:{
        width: "100%",
        paddingBottom: "50%",   
        backfaceVisibility:" hidden",
        position: "relative",
        backgroundColor: "#e0dfdf",
        overflow: "hidden",
    },
    Img:{
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        width: "100%",
        height: "100%",   
        backfaceVisibility: "hidden",
    },
    thumbTitle:{
        fontSize:" 14px",
        fontWeight: "500",
        height: '20px',
        display: "block",
        color: "#000000",
        padding: "10px 0 0",
      
      
        transition: "color 0.3s",
        overflow:" hidden",    
    },
    textItem:{
        display: 'flex',
        alignItems: 'center',   
        margin:"12px 0 0 ",
    },
    thumbText:{
        display: 'flex',
        flexDirection: 'column',
        padding:" 0 10px 5px 10px",
    },
    images:{
        padding : '0 10px 0 0',
    },
}));

const preventDefault = (event) => event.preventDefault();

export default function RecipeMini(props) {
    const classes = useStyles();
    return (
        <div className={classes.Item} >                                    
            <div className={classes.ImgWarpper}>
                <img src="https://via.placeholder.com/300x150" alt="" className={classes.Img} />
            </div>   
            <div className={classes.thumbText}>
                <strong className={classes.thumbTitle}> {props.title}  </strong>
                <div className={classes.textItem}> 
                <img src={Time} alt="" className={classes.images}/>
                <span>
                {props.time}
                </span>
            </div>
            <div className={classes.textItem}> 
            <img src={Dish} alt="" className={classes.images} />
                <span>
                    {props.ingridients}
                </span>
            </div>
            </div>    
            <Link href="/recipe/1" onClick={preventDefault} variant="body2">
                <Button variant="contained" color="secondary" className={classes.thumbsLink}>
                    Открыть
                </Button>   
            </Link>                                    
        </div>
    )
}
