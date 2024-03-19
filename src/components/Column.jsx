import divStyle from './Column.module.css'
const Column=({variantType='columnStyles',children})=>{

    let columnStyles=divStyle.columnStyles;

    if(variantType==='mediumgap'){
         columnStyles+=" "+divStyle.mediumGap;
    }
    else if(variantType==='largeGap'){
        columnStyles+=" "+divStyle.largeGap;
    }
    return(
        <div className={columnStyles}>{children}</div>
      
    );
}
export default Column;