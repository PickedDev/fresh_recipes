import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import { v4 as uiId } from 'uuid';
import Time from '../img/time.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxWidth: '1920px',
      padding: '0 20px',
      margin: '3em auto',
    },
    thumbsWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      background: '#9FA5C0',
      margin: '10px,0',
    },
    title: {
      fontWeight: 700,
      textAlign: 'center',
      fontSize: '24px',
      padding: '20px 0',
      background: '#BDC9B8',
      border: '1px solid #000000',
    },
    formWrapper: {
      maxWidth: '620px',
      margin: '0 auto',
    },
    formInner: {
      padding: ' 40px 30px 12px 30px',
      background: '#9FA5C0',
    },
    recipeImg: {
      border: '2px dashed #D0DBEA',
      borderRadius: '16px',
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      width: 100,
      height: 100,
    },
    recipeImgWrapper: {
      position: 'relative',
      width: '100%',
      paddingBottom: '38.46%',
      margin: '0 0 40px 0',
    },
    Item: {
      margin: '0 0 10px 0',
    },
    ItemTitle: {
      background: '#C4C4C4',
      border: '1px solid #000000',
      display: 'block',
      padding: '10px 0 10px 15px',
      fontWeight: 700,
      color: '#3E5481',
    },
    ItemTitleIngr: {
      background: '#C4C4C4',
      border: '1px solid #000000',
      padding: '10px 15px 10px 15px',
      fontWeight: 700,
      color: '#3E5481',
      display: 'flex',
      justifyContent: 'space-between',
    },
    ItemDescription: {
      padding: '30px 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // textAlign: 'center',
    },
    images: {
      padding: '0 30px 0 0',
    },
    ActionBtn: {
      marginTop: '2em',
    },
    ingridients: {
      color: '#000',
      fontWeight: 500,
      margin: '10px 0 0 0 ',
      '&_2': {
        margin: '30px 0 0 0',
      },
    },
    ingridients2: {
      margin: '30px 0 0 0',
    },
    ItemList: {
      display: 'flex',
      flexDirection: 'column',
    },
    MappedListItem: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: '1em',
    },
    Numbers: {
      background: '#3E5481',
      color: '#FFFFFF',
      padding: '5px 10px',
      margin: '0 6px 0 0',
      borderRadius: '12px',
    },
    heading: {
      fontSize: '35px',
      fontWeight: 500,
      lineHeight: '1.2',
      padding: '30px 0',
      textAlign: 'center',
    },
    buttons: {
      display: 'flex',
      justifyContent: 'center',
      borderRadius: '10px',
    },
    btn: {
      background: '#E0E0E0',
      color: '#333333',
      fontWeight: 700,
      textTransform: 'inherit',
      margin: '0 10px 0 0',
      '&:hover': {
        background: '#51D496',
        color: '#fff',
      },
    },
    btnDelete: {
      background: 'red',
      color: '#fff',
      fontWeight: 700,
      textTransform: 'inherit',
      margin: '0 10px 0 0',
    },
    textField: {
      marginTop: '1em',
      width: '80%',
    },
  })
);

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
    setStepsList(stepsList.filter((item) => item !== id));
    console.log(`${id}`);
    stepsList.forEach((item) => console.log(`${item.id}`));
  };

  return (
    <div className={classes.container}>
      <div className={classes.formWrapper}>
        <h1 className={classes.title}>Добавить новый рецепт</h1>
        <div className={classes.formInner}>
          <div className={classes.Item}>
            <span className={classes.ItemTitle}>Название рецепта</span>
            <div className={classes.ItemDescription}>// input</div>
          </div>
          <div className={classes.Item}>
            <span className={classes.ItemTitle}>Описание</span>
            <div className={classes.ItemDescription}>// input</div>
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
                    <button onClick={handleRemoveIngridientItem}>
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
            <span className={classes.ItemTitleIngr}>
              Инструкция приготовления
            </span>
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
