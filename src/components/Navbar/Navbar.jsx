import styles from "./Navbar.module.css"

export default function Navbar() {

    return(
        <nav className={`${styles.navbar}`}>
            <div className={`${styles.navbarHeader}`}><h1>Around the world </h1></div>
            
            <div className={`${styles.modeSwitch}`}>
            <button><i className="fa-solid fa-moon"></i></button>
            {<p>Dark Mode</p>}
            </div>
        </nav>
    )
} 