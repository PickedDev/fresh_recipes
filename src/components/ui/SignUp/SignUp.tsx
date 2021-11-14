import React from 'react';
import history from '../../../@history';
import { useForm, FormProvider } from 'react-hook-form';
import { useStyles } from './styles';

export const SignUp = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const methods = useForm();

    /* TO DO
        1. SignIn / SignUp pages should contain only AuthForm component with different props
        2. Check if page works
    */

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const onSubmit = async (model: { email: string; password: string }) => {
        // history.push('/');
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
                    <FormProvider {...methods}>
                        <form
                            className={classes.form}
                            onSubmit={methods.handleSubmit(onSubmit)}
                        ></form>
                    </FormProvider>
                </div>
            </div>
        </div>
    );
};
