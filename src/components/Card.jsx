import CardStyle from '../components/Card.module.css'
const Card = ({children}) => {
  return (
    <div className={CardStyle.smallCard}>
      {children}
    </div>
  )
}

export default Card;
