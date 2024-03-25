import IconStyle from './Icon.module.css'

const Icon = ({iconSource,iconAlternateText}) => {
  return (
   <img className={IconStyle.img} src={iconSource} alt={iconAlternateText} />
  )
}

export default Icon;
