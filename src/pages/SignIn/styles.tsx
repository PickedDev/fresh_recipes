import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme?: any) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        container: {
            maxWidth: '1920px',
            padding: '0 20px',
            margin: '3em auto',
        },
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: '25ch',
        },
        title: {
            fontWeight: 700,
            textAlign: 'center',
            fontSize: '24px',
            padding: '20px 0',
            background: '#BDC9B8',
            border: '1px solid #000000',
        },
        subtitle: {
            textAlign: 'center',
            margin: '0 0 20px 0',
        },
        inputWrapper: {
            padding: '0 10px',
            backgroundColor: '#fff',
            borderBottom: '2px solid #51D496',
            borderRadius: '10px',
            margin: '0 0 30px 0',
            '&:last-child': {
                margin: '0',
            },
        },
        iconEye: {
            color: '#51D496',
        },
        inputs: {
            margin: '0 0 17px 0',
            display: 'flex',
            flexDirection: 'column',
        },
        InputWrapperImg: {
            width: '25px',
            height: '20px',
        },
        requirmentsPassword: {
            fontSize: '18px',
            margin: '0 0 17px 0',
        },
        requirments: {
            display: 'flex',
            justifyContent: 'center',
            margin: '0 0 10px 0',
            '&:last-child': {
                margin: '0',
            },
        },
        requimentsWrapper: {
            margin: '0 0 30px 0',
        },
        requirmentsImg: {
            margin: '0 17px 0 0',
        },
        formBtn: {
            background: '#51D496',
            padding: '5px 30px',
            width: '100%',
            fontSize: '20px',
            fontWeight: 900,
            color: '#fff',
            borderRadius: '10px',
            transition: 'color .3s, background .3s',
            '&:hover': {
                background: 'transparent',
                color: '#51D496',
            },
        },
        form: {
            textAlign: 'center',
        },
        subtitleMessauge: {
            fontSize: '24px',
        },
        subtitleText: {
            color: '#524F4F',
        },
        formWrapper: {
            maxWidth: '620px',
            margin: '0 auto',
        },
        formInner: {
            padding: ' 140px 30px',
            background: '#9FA5C0',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            [theme.breakpoints.down('sm')]: {
                padding: '40px 10px',
            },
        },
        reset: {
            textAlign: 'right',
            margin: '0 0 25px 0',
        },
        resetText: {
            cursor: 'pointer',
            transition: 'color .3s',
            '&:hover': {
                color: '#51D496',
            },
        },
    })
);
