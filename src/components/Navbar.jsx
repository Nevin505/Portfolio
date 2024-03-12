import NavBarStyles from './NavBar.module.css'
const NavBar=({variantType,children})=>{
    return(
        <nav className={NavBarStyles.navStyle}>
            {children}
        </nav>
    );
}

export default NavBar;