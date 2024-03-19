import divStyle from './Detail.module.css'

const Detail=({LabelName,candiateDetails})=>{
  return (
    <div>
    <label className={divStyle.label}>{LabelName}</label>
    <span className={divStyle.span}> : {candiateDetails}</span>
    </div>
  );
}
export default Detail;