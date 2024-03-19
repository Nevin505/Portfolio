import ButtonStyles from './Button.module.css'
// Buttons Included With icon

const Button=({variantType='classicButton',icon,children,ClickEventHandler})=>{
  let styles;
    if(variantType==='easeInButton'){
        styles=ButtonStyles.defaultStyle+" "+ButtonStyles.buttonEaseIn
    }
    else if(variantType==='classicButton'){
        styles=ButtonStyles.defaultStyle+" "+ButtonStyles.classicButton;
    }

    return(
        <button className={styles} onClick={ClickEventHandler}>
            <div className={ButtonStyles.textIcon}>
                
                {children}
                {icon && icon}
            </div>
        </button>
    )
}
export default Button;