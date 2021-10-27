import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme?: any) =>
    createStyles({
        footer: {
            height: ' 1px',
            display: 'table-row',
            backgroundColor: ' #D1D1D1',
            textAlign: 'center',
        },
    })
);
