import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme?: any) =>
    createStyles({
        container: { maxWidth: '1920px', padding: '0 20px', margin: '3em auto' },
        thumbsWrapper: {
            // display: 'flex',
            // flexWrap: 'wrap',
            background: '#9FA5C0',
            padding: '1.5rem',
            [theme.breakpoints.up('xl')]: {
                padding: '2.5rem',
            },
            [theme.breakpoints.down('xs')]: {
                gridTemplateColumns: '1fr',
            },
        },

        title: {
            fontWeight: 700,
            textAlign: 'center',
            fontSize: '24px',
            padding: '20px 0',
            background: '#BDC9B8',
            border: '1px solid #000000',
        },
    })
);
