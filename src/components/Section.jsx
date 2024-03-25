import SectionStyles from './Section.module.css';

const Section = ({children,normal,idName}) => {
  return (
    <section id={idName} className={SectionStyles.section}>
      {children}
    </section>
  )
}

export default Section
