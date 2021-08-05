import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import Time from '../img/time.svg'
import Dish from '../img/dish.svg'
const useStyles = makeStyles((theme) => ({
    container: {
      maxWidth: '1920px',
      padding: '0 20px',
      margin: '0 auto',
    
    },
    thumbsWrapper:{
        display: 'flex',
        flexWrap: 'wrap',
        background: '#9FA5C0',
    },
    title:{
        fontWeight:'700',
        textAlign: 'center',
        fontSize: '24px',
        padding: '20px 0',
        background: '#BDC9B8',
        border: '1px solid #000000',
    },
    thumbsLink:{
        display: "block",
        fontSize: "20px",
        lineHeight: "1.2",
        padding: '12px',
        textAlign: 'center',
        background: '#51D496',
        color: '#FFFFFF',
        borderRadius: '0 0 10px 10px'
    },
    Item:{
        display: "inline-block",
        textAlign: 'center',
        background: 'transparent',
        verticalAlign: "top",
        cursor: "pointer",
        margin: "0 50px",
        width: 'calc(20% - 50px)',               
        boxShadow: "-1px 1px 5px rgb(207 207 207 / 65%)",
        // borderRadius: "0 0 5px 5px",
        backgroundColor: "#ffffff",    
        borderRadius: '0px 0px 30px 30px',
    },
    ImgWarpper:{
        width: "100%",
        paddingBottom: "50%",   
        backfaceVisibility:" hidden",
        position: "relative",
        backgroundColor: "#e0dfdf",
        overflow: "hidden",
    },
    Img:{
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        width: "100%",
        height: "100%",   
        backfaceVisibility: "hidden",
    },
    thumbTitle:{
        fontSize:" 14px",
        fontWeight: "500",
        height: '20px',
        // lineHeight: "18px",
        display: "block",
        color: "#000000",
        padding: "10px 0 0",
      
      
        transition: "color 0.3s",
        overflow:" hidden",    
    },
    textItem:{
        display: 'flex',
        alignItems: 'center',   
        margin:"12px 0 0 ",
    },
    thumbText:{
        display: 'flex',
        flexDirection: 'column',
        padding:" 0 10px 5px 10px",
    },
    // marginFix:{
    //     margin: "-50px 0 0 -50px",
    //     fontSize: "0",
    //     lineHeight: "0",
    // },
    images:{
        padding : '0 10px 0 0',
    }
}));


export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
        {/* <div className={classes.titleWrapper}>   */}
            <h1 className={classes.title}>Your personal recipes </h1>
        {/* </div> */}
        <div className={classes.thumbsWrapper}>
          {/* <div className={classes.marginFix}> */}
                <div className={classes.Item}>                                    
                        <div className={classes.ImgWarpper}>
                            <img src="https://via.placeholder.com/300x150" alt="" className={classes.Img} />
                        </div>   
                        <div className={classes.thumbText}>
                            <strong className={classes.thumbTitle}>  Recipe name  </strong>
                            <div className={classes.textItem}> 
                                <img src={Time} alt="" className={classes.images}/>
                                <span>
                                    6 hours
                                </span>
    
                            </div>
                            <div className={classes.textItem}> 
                                <img src={Dish} alt="" className={classes.images} />
                                <span>
                                  Картошка, масло, курица, капуста 
                                </span>
                            </div>
                        </div>        
                        <a href='https://placeholder.com/' className={classes.thumbsLink}>   
                            Открыть
                        </a>
                </div>
                <div className={classes.Item}>                                    
                        <div className={classes.ImgWarpper}>
                            <img src="https://via.placeholder.com/300x150" alt="" className={classes.Img} />
                        </div>   
                        <div className={classes.thumbText}>
                            <strong className={classes.thumbTitle}>  Recipe name  </strong>
                            <div className={classes.textItem}> 
                                <img src={Time} alt="" />
                                <span>
                                    6 hours
                                </span>
    
                            </div>
                            <div className={classes.textItem}> 
                                <img src={Dish} alt="" />
                                <span>
                                  Картошка, масло, курица, капуста 
                                </span>
                            </div>
                        </div>        
                        <a href='https://placeholder.com/' className={classes.thumbsLink}>   
                            Открыть
                        </a>
                </div>
                <div className={classes.Item}>                                    
                        <div className={classes.ImgWarpper}>
                            <img src="https://via.placeholder.com/300x150" alt="" className={classes.Img} />
                        </div>   
                        <div className={classes.thumbText}>
                            <strong className={classes.thumbTitle}>  Recipe name  </strong>
                            <div className={classes.textItem}> 
                                <img src={Time} alt="" />
                                <span>
                                    6 hours
                                </span>
    
                            </div>
                            <div className={classes.textItem}> 
                                <img src={Dish} alt="" />
                                <span>
                                  Картошка, масло, курица, капуста 
                                </span>
                            </div>
                        </div>        
                        <a href='https://placeholder.com/' className={classes.thumbsLink}>   
                            Открыть
                        </a>
                </div>
                <div className={classes.Item}>                                    
                        <div className={classes.ImgWarpper}>
                            <img src="https://via.placeholder.com/300x150" alt="" className={classes.Img} />
                        </div>   
                        <div className={classes.thumbText}>
                            <strong className={classes.thumbTitle}>  Recipe name  </strong>
                            <div className={classes.textItem}> 
                                <img src={Time} alt="" />
                                <span>
                                    6 hours
                                </span>
    
                            </div>
                            <div className={classes.textItem}> 
                                <img src={Dish} alt="" />
                                <span>
                                  Картошка, масло, курица, капуста 
                                </span>
                            </div>
                        </div>        
                        <a href='https://placeholder.com/' className={classes.thumbsLink}>   
                            Открыть
                        </a>
                </div>
                <div className={classes.Item}>                                    
                        <div className={classes.ImgWarpper}>
                            <img src="https://via.placeholder.com/300x150" alt="" className={classes.Img} />
                        </div>   
                        <div className={classes.thumbText}>
                            <strong className={classes.thumbTitle}>  Recipe name  </strong>
                            <div className={classes.textItem}> 
                                <img src={Time} alt="" />
                                <span>
                                    6 hours
                                </span>
    
                            </div>
                            <div className={classes.textItem}> 
                                <img src={Dish} alt="" />
                                <span>
                                  Картошка, масло, курица, капуста 
                                </span>
                            </div>
                        </div>        
                        <a href='https://placeholder.com/' className={classes.thumbsLink}>   
                            Открыть
                        </a>
                </div>
          {/* </div> */}
        </div>
          
        </div>
    )
}
