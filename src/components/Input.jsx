import inputStyles from './Input.module.css';

const Input = ({textArea,inputType,placeholder}) => {
  return (
       textArea ? <textarea></textarea>:<input className={inputStyles.defaultStyle} type={inputType} placeholder={placeholder}/>
  )
}

export default Input;
