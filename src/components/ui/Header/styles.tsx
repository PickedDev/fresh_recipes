import { alpha, makeStyles, createStyles } from '@material-ui/core';

const blueColor = '#2DBECD';
const greenColor = '#51D596';

export const useStyles = makeStyles((theme?: any) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            // flexGrow:'1',

            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            // backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
                // backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                margin: '0 auto',
                // marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '25ch',
            },
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
                alignItems: 'center',
            },
        },
        headerButtons: {
            backgroundColor: blueColor,
            borderRadius: '10px',
            fontSize: '14px',
            padding: '6px 8px',
            textTransform: 'none',
            marginLeft: '10px',
            color: '#1B1B25',
            fontWeight: 700,
        },
        headerIcon: {
            fill: '#1B1B25',
            width: '20px',
            // fontSize: '14px',
            // fontFamily: 'Roboto,sans-serif',
        },
        leftHeader: {
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
        },
        logo: {
            flexGrow: 0,
            display: 'flex',
        },
        searchFiels: {
            flexGrow: 0,
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        btnText: {
            padding: '0 0 0 5px ',
        },
        headerLink: {
            margin: '0 20px 0 50px',
            color: '#fff',
            fontSize: '20px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            [theme.breakpoints.down('xs')]: {
                margin: '0 10px 0 10px',
                fontSize: '15px',
            },
        },
        toolbar: {
            backgroundColor: greenColor,
        },
    })
);
