import inputStyles from './Input.module.css';

const Input = ({textArea,inputType,placeholder}) => {
  return (
       textArea ? <textarea className={inputStyles.textArea} placeholder={placeholder}></textarea>:<input className={inputStyles.defaultStyle} type={inputType} placeholder={placeholder}/>
  )
}

export default Input;
