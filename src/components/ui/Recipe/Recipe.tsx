import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Time from '../../img/time.svg';
import { useStyles } from './styles';

export const Recipe = (props: any) => {
    // const [recipe, setRecipe] = useState([])
    const classes = useStyles();
    // useEffect(()=>{

    //     async function fetchRecipe() {
    //          const { data } = await axios.get(`https://fresh-recipes-backend.herokuapp.com/api/recipe/${props.match.params.id}`)
    //         setRecipe(data)
    //     }

    //     fetchRecipe()

    // },[])
    const recipe = {
        title: 'Some dish',
        time: '30',
        ingridients: ['Картошка', 'масло', 'курица', 'капуста', 'капуста', 'корица', 'корица'],
        description: 'Обычная овсяная каша с яблоком и бананом',
        steps: [
            'Нарезать обычная овсяная каша с яблоком и бананом',
            'Перемешать обычная овсяная каша с яблоком и бананом',
            'Нарезать обычная овсяная каша с яблоком и бананом',
            'Нарезать обычная овсяная каша с яблоком и бананом',
            'Нарезать обычная овсяная каша с яблоком и бананом',
            'Нарезать обычная овсяная каша с яблоком и бананом',
            'Нарезать обычная овсяная каша с яблоком и бананом',
        ],
    };

    return (
        <div className={classes.container}>
            <div className={classes.formWrapper}>
                <h1 className={classes.title}>{recipe.title}</h1>
                <div className={classes.formInner}>
                    {/* <div className={classes.recipeImgWrapper}>
                            <img className={classes.recipeImg} src="https://via.placeholder.com/520x200" alt="" />
                        </div> */}
                    <div className={classes.Item}>
                        <span className={classes.ItemTitle}>Описание</span>
                        <div className={classes.ItemDescription}>{recipe.description}</div>
                    </div>
                    <div className={classes.Item}>
                        <span className={classes.ItemTitle}>Время готовки (в минутах)</span>
                        <div className={classes.ItemDescription}>
                            <img src={Time} alt="" className={classes.images} />
                            <span> {recipe.time}</span>
                        </div>
                    </div>
                    <div className={classes.Item}>
                        <span className={classes.ItemTitle}>Ингридиенты</span>
                        <div className={classes.ItemLists}>
                            {recipe.ingridients.map((x, index) => (
                                <span className={classes.ingridients}>
                                    {index + 1} . {x}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className={classes.Item}>
                        <span className={classes.ItemTitle}>Инструкция приготовления</span>
                        <div className={classes.ItemLists}>
                            {recipe.steps.map((x, index) => (
                                <div className={classes.ingridients2}>
                                    <span className={classes.Numbers}>{index + 1}</span>
                                    {x}
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
