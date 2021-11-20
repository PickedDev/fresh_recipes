import React from 'react';
import { Dialog } from '@material-ui/core';
import Button from '@mui/material/Button';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputBase from '@material-ui/core/InputBase';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import sandClock from '../../assets/img/sand.svg';
import passwordClock from '../../assets/img/password.svg';
import { useStyles } from './styles';

export const SignIn = () => {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (prop: any) => (event: any) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

    return (
        <div className={classes.container}>
            <div className={classes.formWrapper}>
                <h1 className={classes.title}> Sign In Form</h1>
                <div className={classes.formInner}>
                    <div className={classes.subtitle}>
                        <p className={classes.subtitleMessauge}> Welcome! </p>
                        <span className={classes.subtitleText}>
                            Please enter your accounts here
                        </span>
                    </div>
                    <form className={classes.form}>
                        <div className={classes.inputs}>
                            <FormControl variant="standard" className={classes.inputWrapper}>
                                <InputBase
                                    id="input-with-icon-adornment"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <img
                                                src={sandClock}
                                                alt={sandClock}
                                                className={classes.InputWrapperImg}
                                            />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl variant="standard" className={classes.inputWrapper}>
                                <InputBase
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <img
                                                src={passwordClock}
                                                alt={passwordClock}
                                                className={classes.InputWrapperImg}
                                            />
                                        </InputAdornment>
                                    }
                                    endAdornment={
                                        <>
                                            <InputAdornment position="end">
                                                <IconButton
                                                    className={classes.iconEye}
                                                    aria-label="toggle password visibility"
                                                    edge="end"
                                                    onClick={handleClickShowPassword}
                                                >
                                                    {values.showPassword ? (
                                                        <VisibilityOff />
                                                    ) : (
                                                        <Visibility />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        </>
                                    }
                                />
                            </FormControl>
                        </div>

                        <div className={classes.reset}>
                            <a href="#/" className={classes.resetText} onClick={handleClickOpen}>
                                Forgot password?
                            </a>
                        </div>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            maxWidth="lg"
                        >
                            <DialogTitle id="alert-dialog-title">Reset password</DialogTitle>
                            <DialogContent>
                                <TextField
                                    id="outlined-basic"
                                    label="Outlined"
                                    variant="standard"
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleClose}>Reset</Button>
                            </DialogActions>
                        </Dialog>
                        <button type="submit" className={classes.formBtn}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

function setSubmitting(arg0: boolean) {
    throw new Error('Function not implemented.');
}
