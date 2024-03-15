import DivStyle from './Div.module.css'
const Div=({children})=>{
    return(
        <div className={DivStyle.div}>{children}</div>
    )
}
export default Div;