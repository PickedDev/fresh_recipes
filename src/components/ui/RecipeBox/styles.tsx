import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme?: any) =>
    createStyles({
        container: { maxWidth: '1920px', padding: '0 20px', margin: '3em auto' },
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
    })
);
