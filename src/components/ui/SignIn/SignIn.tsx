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
import Link from '@material-ui/core/Link';
import sandClock from '../../img/sandClock.jpg';
import passwordClock from '../../img/passwordClock.jpg';
import { useStyles } from './styles';

export const SignIn = () => {
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
            <p> Sign In Form</p>
            <div>
                <p> Welcome back! </p>
                <span>Please enter your accounts here </span>
            </div>
            <Formik // i haven't installed formik so won't work
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
                onSubmit={(values: any, { setSubmitting: any }) => {
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
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // value={values}
                        />
                        <img src={sandClock} alt={sandClock} />

                        <Input
                            type="email"
                            name="email"
                            // onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            id="standard-adornment-password"
                            // type={values.email ? 'text' : 'email'}
                            // value={values.password}
                            onChange={handleChange('email')}
                        />
                        {errors.email && touched.email && errors.email}
                        <InputLabel htmlFor="standard-adornment-password" />
                        <img src={passwordClock} alt={sandClock} />

                        <Input
                            // type="password"
                            name="password"
                            // onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {errors.password && touched.password && errors.password}
                        <div>Forgot password?</div>
                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

function setSubmitting(arg0: boolean) {
    throw new Error('Function not implemented.');
}
