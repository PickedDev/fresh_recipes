import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    tabHeader: {
        backgroundColor: '#F6F7F9',
        height: '100%',
        borderRadius: '20px 20px 0 0',
    },
    tab: {
        fontSize: '14px',
        fontWeight: 500,
        minHeight: '55px',
    },
    toolbar: {
        minHeight: '55px',
        height: '55px',
        display: 'unset',
    },
    contentCard: {
        background: '#F6F7F9',
        boxShadow: 'none',
        overflow: 'hidden',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    pageContainer: {
        width: '100%',
    },
    header: {
        minHeight: '145.5px',
    },
}));
