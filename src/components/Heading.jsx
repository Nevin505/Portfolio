import HeadingsStyle from './Heading.module.css'

const Heading=({fontSize,children})=>{
    return(
        <div className={HeadingsStyle.heading}>{children}</div>
    );
}
export default Heading;