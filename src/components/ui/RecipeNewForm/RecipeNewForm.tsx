import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import { v4 as uiId } from 'uuid';
import Time from '../img/time.svg';
import { useStyles } from './styles';

export const RecipeNewForm = (props: any) => {
    const classes = useStyles();
    // const recipe =
    //     {
    //         "title": "Some dish",
    //         "time": "30",
    //         "ingridients": ["Картошка", "масло", "курица", "капуста","капуста",'корица','корица' ],
    //         'description': 'Обычная овсяная каша с яблоком и бананом',
    //         "steps": ["Нарезать обычная овсяная каша с яблоком и бананом", "Перемешать обычная овсяная каша с яблоком и бананом", "Нарезать обычная овсяная каша с яблоком и бананом", "Нарезать обычная овсяная каша с яблоком и бананом","Нарезать обычная овсяная каша с яблоком и бананом",'Нарезать обычная овсяная каша с яблоком и бананом','Нарезать обычная овсяная каша с яблоком и бананом' ],
    //     };
    // code слайдера
    // const [value, setValue] = React.useState(30);

    // const handleSliderChange = (event, newValue) => {
    //   setValue(newValue);
    // };

    // const handleInputChange = (event) => {
    //   setValue(event.target.value === '' ? '' : Number(event.target.value));
    // };

    // const handleBlur = () => {
    //   if (value < 0) {
    //     setValue(0);
    //   } else if (value > 100) {
    //     setValue(100);
    //   }
    // };
    const initialValue1 = [
        {
            id: uiId(),
        },
    ]; // needed to be transform in arrays of object like [{title: "string", id: "this will be used for key"}]

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
        <div className={classes.container}>
            <div className={classes.formWrapper}>
                <h1 className={classes.title}>Добавить новый рецепт</h1>
                <div className={classes.formInner}>
                    <div className={classes.Item}>
                        <span className={classes.ItemTitle}>Название рецепта</span>
                        <div className={classes.ItemDescription}>input</div>
                    </div>
                    <div className={classes.Item}>
                        <span className={classes.ItemTitle}>Описание</span>
                        <div className={classes.ItemDescription}>input</div>
                    </div>
                    <div className={classes.Item}>
                        <span className={classes.ItemTitle}>Время готовки (в минутах)</span>
                        <div className={classes.ItemDescription}>
                            {/* <div className={classes.root}>
                                    <Typography id="input-slider" gutterBottom>
                                        Volume
                                    </Typography>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                                        <VolumeUp />
                                        </Grid>
                                        <Grid item xs>
                                        <Slider
                                            value={typeof value === 'number' ? value : 0}
                                            onChange={handleSliderChange}
                                            aria-labelledby="input-slider"
                                        />
                                        </Grid>
                                        <Grid item>
                                        <Input
                                            className={classes.input}
                                            value={value}
                                            margin="dense"
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            inputProps={{
                                            step: 10,
                                            min: 0,
                                            max: 100,
                                            type: 'number',
                                            'aria-labelledby': 'input-slider',
                                            }}
                                        />
                                        </Grid>
                                    </Grid>
                                </div>*/}
                        </div>
                    </div>
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
                                                setIngridientList(
                                                    ingridientsList.concat([{ id: uiId() }])
                                                )
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
                    <div className={classes.Item}>
                        <span className={classes.ItemTitleIngr}>Инструкция приготовления</span>
                        <div className={classes.ItemList}>
                            {stepsList.map((ingridient, index) => (
                                <div key={uiId()} className={classes.MappedListItem}>
                                    <TextField
                                        className={classes.textField}
                                        label="Напишите ингридиент..."
                                        variant="outlined"
                                    />
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
                                            onClick={() =>
                                                setStepsList(stepsList.concat([{ id: uiId() }]))
                                            }
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
                    <div className={classes.heading}> Приятного апетита!</div>
                    <div className={classes.buttons}>
                        <Button color="primary" className={classes.btnDelete}>
                            {' '}
                            Удалить рецепт{' '}
                        </Button>
                        <Button color="primary" className={classes.btn}>
                            {' '}
                            Редактировать рецепт{' '}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
