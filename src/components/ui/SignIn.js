import React from 'react'
import { Dialog } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
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
import sandClock from '../img/sandClock.jpg'
import passwordClock from '../img/passwordClock.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
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
  }));

export default function SignIn() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    return (
      <div>
        <p>  Sign In Form</p>
        <div>
      <p>  Welcome back! </p>
      <span>Please enter your accounts here </span> 
        </div>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
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
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                <img src={sandClock} />
             
                  <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    id="standard-adornment-password"
                    // type={values.email ? 'text' : 'email'}
                    // value={values.password}
                    onChange={handleChange('email')}                   
                  />
                {errors.email && touched.email && errors.email}
                <InputLabel htmlFor="standard-adornment-password"/>
                <img src={passwordClock} />
                
                <Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
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
              <Formik   
         
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            {({              
                isSubmitting,
                /* and other goodies */
            }) => (
                <div className='GoogleAuth'>
                  <div>
                    Or continue with
                  </div>
                  <button type="submit" disabled={isSubmitting}>
                      Google
                  </button>
                  <div>
                    Don’t have any account? <a href='#'>Sign up</a>
                  </div>
                </div>
                )}
              </Formik>

               
      
          
      </div>
    )
}
