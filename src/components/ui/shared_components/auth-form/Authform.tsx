import { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Controller, useFormContext } from 'react-hook-form';
import { useStyles } from './styles';
import passwordClock from '../../img/password.svg';
import sandClock from '../../img/sand.svg';
import blue from '../../img/checkblue.svg';
import grey from '../../img/checkgrey.svg';

export const Authform = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);

    const {
        control,
        setValue,
        formState: { errors },
    } = useFormContext();

    /* TO DO
        1. Create separate component for inputs (with BaseSyntheticEvent for onChange value)
        2. Add all fields to Controller component 
        3. Add proper props to Authform
    */

    return (
        <>
            <div className={classes.inputs}>
                <Controller
                    control={control}
                    name="email"
                    render={props => (
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
                    )}
                />

                <FormControl variant="standard" className={classes.inputWrapper}>
                    <InputBase
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
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
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            </>
                        }
                    />
                </FormControl>
            </div>

            <div className={classes.requirmentsPassword}>Your password must contain:</div>
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
        </>
    );
};
