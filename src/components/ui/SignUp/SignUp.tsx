import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useStyles } from './styles';
import passwordClock from '../../img/password.svg';
import sandClock from '../../img/sand.svg';
import blue from '../../img/checkblue.svg';
import grey from '../../img/checkgrey.svg';

export const SignUp = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

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

                        <div className={classes.requirmentsPassword}>
                            Your password must contain:
                        </div>
                        <div className={classes.requimentsWrapper}>
                            <div className={classes.requirments}>
                                <img src={blue} alt={blue} className={classes.requirmentsImg} />
                                Atleast 6 characters
                            </div>
                            <div className={classes.requirments}>
                                <img src={grey} alt={grey} className={classes.requirmentsImg} />
                                Contain a number
                            </div>
                        </div>
                        <button type="submit" className={classes.formBtn}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
