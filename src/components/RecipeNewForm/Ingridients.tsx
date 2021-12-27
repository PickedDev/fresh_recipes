import React from 'react';
import { Button, TextField } from '@material-ui/core';
import {
    useFormContext,
    useFieldArray,
    useForm,
    FormProvider,
    SubmitHandler,
} from 'react-hook-form';
import { v4 as uiId } from 'uuid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { IRecipe } from './interfaces/IRecipe';
import { useStyles } from './styles';

type CountryProps = {
    name: string;
    index: number;
};

export default function Ingridients() {
    const initialValue1 = [
        {
            id: uiId(),
        },
    ];
    const classes = useStyles();
    const { control, register, watch, getValues } = useFormContext<IRecipe>();
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray<
        IRecipe,
        'instructions',
        'instructionId'
    >({
        control,
        name: 'instructions',
        keyName: 'instructionId',
    });

    // console.log('instructions are', watch('instructions'));
    // console.log(getValues(`instructions.${0}.message`));

    // needed to be transform in arrays of object like [{title: "string", id: "this will be used for key"}]

    const [ingridientsList, setIngridientList] = React.useState(initialValue1);
    const [stepsList, setStepsList] = React.useState(initialValue1);

    // const disabledIngridientsMinus = ingridientsList.length === 1 && true;
    // const disabledStepMinus = stepsList.length === 1 && true;

    // const handleRemoveIngridientItem = (e: any) => {
    //     const { id } = e.target;
    //     setIngridientList(ingridientsList.filter((item: any) => item.title !== id));
    //     console.log(`${id}`);
    //     stepsList.forEach((item: any) => console.log(`${item.id}`));
    // };

    // / problem with Key and Id, need to generate Key even when adding an new list item
    // const handleRemoveStepItem = (e: any) => {
    //     const { id } = e.target;
    //     setStepsList(stepsList.filter((item: any) => item !== id));
    //     console.log(`${id}`);
    //     stepsList.forEach((item: any) => console.log(`${item.id}`));
    // };

    return (
        <div className={classes.Item}>
            <span className={classes.ItemTitleIngr}>Ингридиенты</span>
            {/* <div className={classes.ItemList}> */}
            {ingridientsList.map((ingridient, index) => (
                <div key={uiId()} className={classes.MappedListItem}>
                    {/* <> */}

                    <div className={classes.ItemInput}>
                        {/* {fields.map((item, index) => (
                                <li key={item.id}>
                                    <OutlinedInput
                                        style={{ borderRadius: 32 }}
                                        fullWidth
                                        placeholder="Enter ingredient"
                                        id="outlined-basic"
                                        className={classes.ItemText}
                                        // ref={register()}
                                    />
                                    <button onClick={() => remove(index)}>Delete</button>
                                </li>
                            ))} */}
                        <OutlinedInput
                            style={{ borderRadius: 32 }}
                            fullWidth
                            placeholder="Enter ingredient"
                            id="outlined-basic"
                            className={classes.ItemText}
                            // ref={register()}
                        />
                    </div>
                    <span className={classes.ActionBtn}>
                        <button type="button">
                            <svg
                                width="24"
                                height="24"
                                id={ingridient.id}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.2 12H4.8"
                                    stroke="#2DBECD"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button
                            type="button"
                            // onClick={() => {
                            //     append({ firstName: 'appendBill', lastName: 'appendLuo' });
                            // }}
                            // onClick={() =>
                            //     setIngridientList(ingridientsList.concat([{ id: uiId() }]))
                            // }
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.2 12H4.8"
                                    stroke="#2DBECD"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 4.80001V19.2"
                                    stroke="#2DBECD"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </span>
                </div>
            ))}
            {/* </div> */}
        </div>
    );
}
