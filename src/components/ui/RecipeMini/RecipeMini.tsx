import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Time from '../../img/time.svg';
import Dish from '../../img/dish.svg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        Item: {
            display: 'inline-block',
            textAlign: 'center',
            background: 'transparent',
            verticalAlign: 'top',
            cursor: 'pointer',
            // margin: '2em 1em',
            // width: 'calc(20% - 2em)',
            boxShadow: '-1px 1px 5px rgb(207 207 207 / 65%)',
            // borderRadius: "0 0 5px 5px",
            backgroundColor: '#ffffff',
            borderRadius: '0px 0px 30px 30px',
        },
        thumbsLink: {
            display: 'block',
            fontSize: '20px',
            lineHeight: '1.2',
            padding: '12px',
            textAlign: 'center',
            background: '#51D496',
            color: '#FFFFFF',
            borderRadius: '0 0 10px 10px',
            width: '100%',
        },
        props: {
            display: 'inline-block',
            textAlign: 'center',
            background: 'transparent',
            verticalAlign: 'top',
            cursor: 'pointer',
            margin: '0 50px',
            width: 'calc(20% - 50px)',
            boxShadow: '-1px 1px 5px rgb(207 207 207 / 65%)',
            backgroundColor: '#ffffff',
            borderRadius: '0px 0px 30px 30px',
        },
        ImgWarpper: {
            width: '100%',
            paddingBottom: '50%',
            backfaceVisibility: 'hidden',
            position: 'relative',
            backgroundColor: '#e0dfdf',
            overflow: 'hidden',
        },
        Img: {
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
        },
        thumbTitle: {
            fontSize: ' 14px',
            fontWeight: 500,
            height: '20px',
            display: 'block',
            color: '#000000',
            padding: '10px 0 0',
            transition: 'color 0.3s',
            overflow: ' hidden',
        },
        textItem: {
            display: 'flex',
            alignItems: 'center',
            margin: '12px 0 0 ',
        },
        thumbText: {
            display: 'flex',
            flexDirection: 'column',
            padding: ' 0 10px 5px 10px',
        },
        images: {
            padding: '0 10px 0 0',
        },
    })
);

const preventDefault = (event: any) => event.preventDefault();

export const RecipeMini = (props: any) => {
    const classes = useStyles();

    const handleClick = (event: any) => {
        event.preventDefault();
    };

    return (
        <div className={classes.Item}>
            <div className={classes.ImgWarpper}>
                <img src="https://via.placeholder.com/300x150" alt="" className={classes.Img} />
            </div>
            <div className={classes.thumbText}>
                <strong className={classes.thumbTitle}> {props.title} </strong>
                <div className={classes.textItem}>
                    <img src={Time} alt="" className={classes.images} />
                    <span>{props.time}</span>
                </div>
                <div className={classes.textItem}>
                    <img src={Dish} alt="" className={classes.images} />
                    <span>{props.ingridients}</span>
                </div>
            </div>
            <Button
                variant="contained"
                color="secondary"
                className={classes.thumbsLink}
                to="/recipe/1"
                component={Link}
            >
                Открыть
            </Button>
        </div>
    );
};
