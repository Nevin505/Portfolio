import DivStyle from './Column.module.css'
const Column=({variantType='columnStyles',children})=>{

    let columnStyles=DivStyle.columnStyles;

    if(variantType==='mediumgap'){
         columnStyles+=" "+DivStyle.mediumGap;
    }
    else if(variantType==='largeGap'){
        columnStyles+=" "+DivStyle.largeGap;
    }
    return(
        <div className={columnStyles}>{children}</div>
      
    );
}
export default Column;