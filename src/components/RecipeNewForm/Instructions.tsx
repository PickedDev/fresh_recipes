import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { v4 as uiId } from 'uuid';
import { useStyles } from './styles';

export default function Instructions() {
    const classes = useStyles();
    const initialValue1 = [
        {
            id: uiId(),
        },
    ];

    const handleRemoveStepItem = (e: any) => {
        const { id } = e.target;
        setStepsList(stepsList.filter((item: any) => item !== id));
        console.log(`${id}`);
        stepsList.forEach((item: any) => console.log(`${item.id}`));
    };

    const [stepsList, setStepsList] = React.useState(initialValue1);

    return (
        <div className={classes.Item}>
            <span className={classes.ItemTitleIngr}>Инструкция приготовления</span>
            <div className={classes.ItemList}>
                {stepsList.map((ingridient, index) => (
                    <div key={uiId()} className={classes.MappedListItem}>
                        <span className={classes.ListIndex}>{index + 1}</span>
                        <div className={classes.ItemInput}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                minRows={4}
                                maxRows={10}
                                multiline
                                placeholder="Tell a little about your food"
                                className={classes.ItemText}
                            />
                        </div>
                        <span className={classes.ActionBtn}>
                            <svg
                                width="24"
                                height="24"
                                id={ingridient.id}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={handleRemoveStepItem}
                            >
                                <path
                                    d="M19.2 12H4.8"
                                    stroke="#2DBECD"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => setStepsList(stepsList.concat([{ id: uiId() }]))}
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
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
