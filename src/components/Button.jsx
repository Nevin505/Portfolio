import ButtonStyles from './Button.module.css'
const Button=({variantType,children})=>{

    return(
        <button className={variantType?ButtonStyles.classicButton:ButtonStyles.button}>{children} </button>
    )
}
export default Button;