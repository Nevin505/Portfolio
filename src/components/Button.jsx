import ButtonStyles from './Button.module.css'
const Button=({children})=>{
    return(
        <button className={ButtonStyles.button}>{children} </button>
    )
}
export default Button;