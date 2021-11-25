import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { v4 as uiId } from 'uuid';
import { useStyles } from './styles';

export default function Ingridients() {
    const initialValue1 = [
        {
            id: uiId(),
        },
    ]; // needed to be transform in arrays of object like [{title: "string", id: "this will be used for key"}]
    const classes = useStyles();
    const [ingridientsList, setIngridientList] = React.useState(initialValue1);
    const [stepsList, setStepsList] = React.useState(initialValue1);

    const disabledIngridientsMinus = ingridientsList.length === 1 && true;
    const disabledStepMinus = stepsList.length === 1 && true;

    const handleRemoveIngridientItem = (e: any) => {
        const { id } = e.target;
        setIngridientList(ingridientsList.filter((item: any) => item.title !== id));
        console.log(`${id}`);
        stepsList.forEach((item: any) => console.log(`${item.id}`));
    };

    // / problem with Key and Id, need to generate Key even when adding an new list item
    const handleRemoveStepItem = (e: any) => {
        const { id } = e.target;
        setStepsList(stepsList.filter((item: any) => item !== id));
        console.log(`${id}`);
        stepsList.forEach((item: any) => console.log(`${item.id}`));
    };

    return (
        <div className={classes.Item}>
            <span className={classes.ItemTitleIngr}>Ингридиенты</span>
            <div className={classes.ItemList}>
                {ingridientsList.map((ingridient, index) => (
                    <div key={uiId()} className={classes.MappedListItem}>
                        <TextField
                            className={classes.textField}
                            label="Напишите ингридиент..."
                            variant="outlined"
                        />
                        <span className={classes.ActionBtn}>
                            <button onClick={handleRemoveIngridientItem} type="button">
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
                                onClick={() =>
                                    setIngridientList(ingridientsList.concat([{ id: uiId() }]))
                                }
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
            </div>
        </div>
    );
}
