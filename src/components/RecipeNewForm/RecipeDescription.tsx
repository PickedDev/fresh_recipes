import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { useStyles } from './styles';

// enum GenderEnum {
//     female = 'female',
//     male = 'male',
//     other = 'other',
// }

// interface IFormInput {
//     firstName: string;
//     gender: GenderEnum;
// }

export default function RecipeDescription() {
    const classes = useStyles();
    // const { register, handleSubmit } = useForm<IFormInput>();
    // const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

    return (
        <div className={classes.Item}>
            <span className={classes.ItemTitle}>Описание</span>
            <div className={classes.ItemDescription}>
                <TextField
                    variant="outlined"
                    fullWidth
                    minRows={2}
                    maxRows={10}
                    multiline
                    placeholder="Tell a little about your food"
                    className={classes.ItemText}
                />
            </div>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input {...register('firstName', { required: true, maxLength: 10 })} />
                <label>Gender Selection</label>
                <select {...register('gender')}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <input type="submit" />
            </form> */}
        </div>
    );
}
