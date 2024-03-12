import DivStyle from './Div.module.css'
const Div=({variantType,children})=>{
    return(
        <div className={variantType==='smallerDivCircle'?DivStyle.smallerDivCircle:DivStyle.div}>{children}</div>
    )
}
export default Div;