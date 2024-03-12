import DivStyle from './Detail.module.css'

const Detail=({LabelName,candiateDetails})=>{
  return (
    <div>
    <label htmlFor="" className={DivStyle.label}>{LabelName}</label>
    <span className={DivStyle.span}> : {candiateDetails}</span>
    </div>
  );
}
export default Detail;