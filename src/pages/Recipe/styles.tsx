import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme?: any) =>
    createStyles({
        container: {
            maxWidth: '1920px',
            padding: '0 20px',
            margin: '3em auto',
        },
        thumbsWrapper: {
            display: 'flex',
            flexWrap: 'wrap',
            background: '#9FA5C0',
            margin: '10px,0',
        },
        title: {
            fontWeight: 700,
            textAlign: 'center',
            fontSize: '24px',
            padding: '20px 0',
            background: '#BDC9B8',
            border: '1px solid #000000',
        },
        formWrapper: {
            maxWidth: '620px',
            margin: '0 auto',
        },
        formInner: {
            padding: ' 40px 30px 12px 30px',
            background: '#9FA5C0',
        },
        recipeImg: {
            width: '100%',
            height: '100%',
            border: '2px dashed #D0DBEA',
            borderRadius: '16px',
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
        recipeImgWrapper: {
            position: 'relative',
            width: '100%',
            paddingBottom: '38.46%',
            margin: '0 0 40px 0',
        },
        Item: {
            margin: '0 0 10px 0',
        },
        ItemTitle: {
            background: '#C4C4C4',
            border: '1px solid #000000',
            display: 'block',
            padding: '10px 0 10px 15px',
            fontWeight: 700,
            color: '#3E5481',
        },
        ItemDescription: {
            padding: '30px 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 500,
            // textAlign: 'center',
        },
        ItemDescriptionImg: {
            display: 'flex',
            padding: '30px 0',
            alignItems: 'center',
            // justifyContent: 'center',
        },
        textItemContent: {
            fontSize: '17px',
        },
        images: {
            padding: '0 30px 0 0',
        },
        ingridients: {
            color: '#000',
            fontWeight: 500,
            margin: '10px 0 0 0 ',
            '&_2': {
                margin: '30px 0 0 0',
            },
        },
        ingridients2: {
            margin: '30px 0 0 0',
        },
        ItemLists: {
            display: 'flex',
            flexDirection: 'column',
        },
        Numbers: {
            background: '#3E5481',
            color: '#FFFFFF',
            padding: '5px 10px',
            margin: '0 12px 0 0',
            borderRadius: '12px',
            fontWeight: 'bold',
        },
        heading: {
            fontSize: '35px',
            fontWeight: 500,
            lineHeight: '1.2',
            padding: '30px 0',
            textAlign: 'center',
            letterSpacing: '0.007em',
        },
        buttons: {
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '10px',
        },
        btn: {
            background: '#E0E0E0',
            color: '#333333',
            fontWeight: 700,
            textTransform: 'inherit',
            margin: '0 10px 0 0',
            width: '50%',
            borderRadius: '20px',
            '&:hover': {
                background: '#51D496',
                color: '#fff',
            },
        },
        btnDelete: {
            background: 'red',
            color: '#fff',
            fontWeight: 700,
            textTransform: 'inherit',
            margin: '0 25px 0 0',
            width: '50%',
            borderRadius: '20px',
        },
        time: {
            fontWeight: 500,
        },
    })
);
