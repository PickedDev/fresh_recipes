import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Time from '../img/time.svg'

const useStyles = makeStyles((theme) => ({
    container: {
      maxWidth: '1920px',
      padding: '0 20px',
      margin: '3em auto',
    
    },
    thumbsWrapper:{
        display: 'flex',
        flexWrap: 'wrap',
        background: '#9FA5C0',
        margin: '10px,0',
    },
    title:{
        fontWeight:'700',
        textAlign: 'center',
        fontSize: '24px',
        padding: '20px 0',
        background: '#BDC9B8',
        border: '1px solid #000000',
        
    },
    formWrapper:{
        maxWidth: "620px",
        margin:  '0 auto',
    },
    formInner:{
        padding: ' 40px 30px 12px 30px', 
        background: '#9FA5C0',
    },
    recipeImg:{
       width: "100%",
       height: '100%',
       border: "2px dashed #D0DBEA",
       borderRadius: "16px",
       position: "absolute",
       top: "0",
       bottom: "0",
       left: "0",
       right: "0",
       width: "100%",
       height: "100%",
    },
    recipeImgWrapper:{
        position: 'relative',
        width: '100%',
        paddingBottom: '38.46%',
        margin: '0 0 40px 0',
    },
    Item:{
        margin: '0 0 10px 0',
    },
    ItemTitle:{
        background: "#C4C4C4",
        border: "1px solid #000000",
        display: 'block',
        padding: '10px 0 10px 15px',
        fontWeight: '700',
        color: '#3E5481',
    },
    ItemDescription:{
        padding: '30px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        // textAlign: 'center',
    },
    images:{
        padding: '0 30px 0 0',
    },
    ingridients:{
        color: '#000',
        fontWeight: '500',
        margin: '10px 0 0 0 ', 
        '&_2':{
            margin: '30px 0 0 0',
        }  
    },    
    ingridients2:{
        margin: '30px 0 0 0',
    },
    ItemLists:{
        display: 'flex',
        flexDirection:'column',       
    },
    Numbers:{
        background: '#3E5481',
        color: '#FFFFFF',
        padding: '5px 10px',
        margin: "0 6px 0 0",
        borderRadius: "12px", 
    },
    heading:{
        fontSize: "35px",
        fontWeight: "500",
        lineHeight: "1.2",
        padding: "30px 0",
        textAlign: "center",    
    },
    buttons:{
        display: 'flex',
        justifyContent:'center',
        borderRadius: '10px',
    },
    btn:{
        background: '#E0E0E0',
        color: "#333333",
        fontWeight: "700",
        textTransform: 'inherit',
        margin: '0 10px 0 0',
        '&:hover':{
            background:"#51D496",
            color: '#fff',
           
        }
    },
    btnDelete:{
        background: 'red',
        color: "#fff",
        fontWeight: "700",
        textTransform: 'inherit',
        margin: '0 10px 0 0',
    }
}));

export default function Recipe(props) {
    const classes = useStyles();
    const recipe = 
        {        
            "title": "Some dish",
            "time": "30",
            "ingridients": ["Картошка", "масло", "курица", "капуста","капуста",'корица','корица' ],
            'description': 'Обычная овсяная каша с яблоком и бананом',
            "steps": ["Нарезать обычная овсяная каша с яблоком и бананом", "Перемешать обычная овсяная каша с яблоком и бананом", "Нарезать обычная овсяная каша с яблоком и бананом", "Нарезать обычная овсяная каша с яблоком и бананом","Нарезать обычная овсяная каша с яблоком и бананом",'Нарезать обычная овсяная каша с яблоком и бананом','Нарезать обычная овсяная каша с яблоком и бананом' ],
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
                            <span className={classes.ItemTitle} > 
                               Описание
                            </span>
                            <div className={classes.ItemDescription}>
                                {recipe.description}
                            </div>
                        </div>
                        <div className={classes.Item}>
                            <span className={classes.ItemTitle} > 
                            Время готовки (в минутах)
                            </span>
                            <div className={classes.ItemDescription}>
                               <img src={Time} alt="" className={classes.images} />
                               <span> {recipe.time}</span>
                            </div>
                        </div>
                        <div className={classes.Item}>
                            <span className={classes.ItemTitle}> 
                                Ингридиенты
                            </span>
                            <div className={classes.ItemLists}>            
                                {recipe.ingridients.map((x,index) => 
                                    <span className={classes.ingridients}>{index +1} . {x}</span>
                                )}                                               
                            </div>
                        </div>
                        <div className={classes.Item}>
                            <span className={classes.ItemTitle}> 
                                Инструкция приготовления
                            </span>
                            <div className={classes.ItemLists}>            
                                {recipe.steps.map((x,index) =>                                 
                                    <div className={classes.ingridients2}>
                                        <span className={classes.Numbers}>{index +1}
                                        </span> 
                                        {x}
                                    </div>
                                )}                                               
                            </div>                     
                        </div>
                        <div class={classes.heading}> Приятного апетита!</div>
                        <div className={classes.buttons}>
                            <Button  color="primary" className={classes.btnDelete}> Удалить рецепт </Button>
                            <Button color="primary" className={classes.btn}> Редактировать рецепт </Button>
                        </div>
                    </div>
               </div>
        </div>
    )
}
