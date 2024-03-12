import RowModuleStyle from './Row.module.css';

const Row=({variantType,children})=>{
    let divStyles=RowModuleStyle.rowStyle
    if(variantType==='smallerGap'){
        divStyles+=" "+RowModuleStyle.smallerGap;
    }
    return(
        <div className={divStyles}>{children}</div>
    );
}
export default Row;