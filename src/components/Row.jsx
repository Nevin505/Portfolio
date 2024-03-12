import RowModuleStyle from './Row.module.css';

const Row=({children})=>{
    return(
        <div className={RowModuleStyle.rowStyle}>{children}</div>
    );
}
export default Row;