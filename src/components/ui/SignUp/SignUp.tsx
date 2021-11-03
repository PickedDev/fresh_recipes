import React from 'react';
import { Dialog } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { useStyles } from './styles';
import passwordClock from '../../img/passwordClock.jpg';
import sandClock from '../../img/sandClock.jpg';

const green = '#51D496';

function HomeIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

const color = ['black', '#2DBECD'];

export const SignUp = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [name, setName] = React.useState('Composed TextField');
    return (
        <div className={classes.container}>
            <div className={classes.formWrapper}>
                <h1 className={classes.title}> Sign Up Form</h1>
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

                        <div className={classes.requirmentsPassword}>
                            Your password must contain:
                        </div>
                        {/* <img src={CheckoutIcon} /> */}
                        <div className={classes.requirments}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                // fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                fill={color[0]}
                                className={classes.requirmentsImg}
                            >
                                <path
                                    d="M22.8 12C22.8 17.9647 17.9647 22.8 12 22.8C6.03532 22.8 1.2 17.9647 1.2 12C1.2 6.03532 6.03532 1.2 12 1.2C17.9647 1.2 22.8 6.03532 22.8 12Z"
                                    strokeWidth="2.4"
                                />
                                <path
                                    d="M19.2 7.20001L9.70745 16.2L4.8 11.1595"
                                    stroke={`${color[1]}`}
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Atleast 6 characters
                        </div>
                        <div className={classes.requirments}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                // fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                fill={color[0]}
                                className={classes.requirmentsImg}
                            >
                                <path
                                    d="M22.8 12C22.8 17.9647 17.9647 22.8 12 22.8C6.03532 22.8 1.2 17.9647 1.2 12C1.2 6.03532 6.03532 1.2 12 1.2C17.9647 1.2 22.8 6.03532 22.8 12Z"
                                    strokeWidth="2.4"
                                />
                                <path
                                    d="M19.2 7.20001L9.70745 16.2L4.8 11.1595"
                                    stroke={`${color[1]}`}
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Contain a number
                        </div>
                        {/* <img src={CheckoutIcon} /> */}
                        <button type="submit" className={classes.formBtn}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
