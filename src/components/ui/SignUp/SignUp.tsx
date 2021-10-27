import React from 'react';
import { Dialog } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import sandClock from '../../img/sandClock.jpg';
import passwordClock from '../../img/passwordClock.jpg';
import { useStyles } from './styles';

const color = ['black', '#2DBECD'];

export const SignUp = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

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
        <div>
            <p> Sign Up Form</p>
            <div>
                <p> Welcome! </p>
                <span>Please enter your accounts here </span>
            </div>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={(values: any) => {
                    const errors = { email: '', password: '' };

                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <InputLabel
                            //   type="email"
                            //   name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            //   value={values.email}
                        />
                        <img src={sandClock} alt={sandClock} />

                        <Input
                            type="email"
                            name="email"
                            onBlur={handleBlur}
                            value={values.email}
                            id="standard-adornment-password"
                            // type={values.email ? 'text' : 'email'}
                            // value={values.password}
                            onChange={handleChange('email')}
                        />
                        {errors.email && touched.email && errors.email}
                        <InputLabel htmlFor="standard-adornment-password" />
                        <img src={passwordClock} alt={passwordClock} />

                        <Input
                            onBlur={handleBlur}
                            value={values.password}
                            id="standard-adornment-password"
                            //   type={values.showPassword ? 'text' : 'password'}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {errors.password && touched.password && errors.password}
                        <div>Your password must contain:</div>
                        {/* <img src={CheckoutIcon} /> */}
                        <div>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                // fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                fill={color[0]}
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
                        <div>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                // fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                fill={color[0]}
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
                        <button type="submit" disabled={isSubmitting}>
                            Sign Up
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};
