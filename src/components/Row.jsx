import RowModuleStyle from './Row.module.css';

const Row=({variantType='smallerGap',children})=>{
    let divStyles=RowModuleStyle.rowStyle
    if(variantType==='smallerGap'){
        divStyles+=" "+RowModuleStyle.smallerGap;
    }
    else if(variantType==='mediumGap'){
        divStyles+=" "+RowModuleStyle.mediumGap;
    }
    else if(variantType==='largerGap'){
        divStyles+=" "+RowModuleStyle.largerGap;
    }
    return(
        <div className={divStyles}>{children}</div>
    );
}
export default Row;