import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme?: any) =>
    createStyles({
        footer: {
            backgroundColor: ' #D1D1D1',
            textAlign: 'center',

            padding: '20px 0',
            // position: 'absolute',
            // left: 0,
            // bottom: 0,
            // width: '100%',
        },
    })
);
