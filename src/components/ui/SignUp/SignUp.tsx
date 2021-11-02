import React, { useState } from 'react';
import { Formik, FormikHelpers, FormikProps, Form, Field } from 'formik';
import * as yup from 'yup';
import { Container, Typography, Grid, Button, Box } from '@material-ui/core';
import { FormTextField } from './FormTextField';
import { useStyles } from './styles';
import passwordClock from '../../img/passwordClock.jpg';
import sandClock from '../../img/sandClock.jpg';

interface FormValues {
    name: string;
    password: string;
}
const validationSchema = yup.object().shape({
    name: yup.string().required('Required'),
    password: yup.string().required('Required'),
});

export const SignUp = () => {
    const classes = useStyles();

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
                    <Formik
                        initialValues={{
                            name: '',
                            password: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(
                            values: FormValues,
                            formikHelpers: FormikHelpers<FormValues>
                        ) => {
                            alert(JSON.stringify(values, null, 2));
                            formikHelpers.setSubmitting(false);
                        }}
                    >
                        {(formikProps: FormikProps<FormValues>) => (
                            <Form noValidate autoComplete="off">
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field
                                            name="name"
                                            label="Name"
                                            size="small"
                                            component={FormTextField}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            name="password"
                                            label="password"
                                            size="small"
                                            component={FormTextField}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="outlined"
                                            size="large"
                                            color="primary"
                                            disabled={formikProps.isSubmitting}
                                        >
                                            Sign Up
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};
