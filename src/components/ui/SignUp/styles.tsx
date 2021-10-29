import { makeStyles, createStyles } from '@material-ui/core';

const color = {
    grey: '#9FA5C0',
};

export const useStyles = makeStyles((theme?: any) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        container: {
            maxWidth: '620px',
            padding: '20px',
            margin: '60px auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: color.grey,
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
    })
);
