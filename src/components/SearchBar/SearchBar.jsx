import { useState } from "react"
import styles from "./SearchBar.module.css"

export default function SearchBar(props) {
    const {info, setFilterRegions} = props;

   
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const uniqueRegions = [...new Set(info.map((country) => country.region))].filter(
        (region) => region 
      );

    return(
        <div className={`${styles.searchContainer}`}>
            <div className={`${styles.searchInput}`}>
                <input type="text" placeholder="Type to search.."/>
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>

            <div className={`${styles.filterDropdown}`}>
               
                <button className={`${styles.dropdownBtn}`} onClick={toggleDropdown}>Filter by Region 
                <i className="fa-solid fa-angle-down"></i>
                </button>
                {isOpen && (
                    <div className={`${styles.dropdownContent}`}>
                    {uniqueRegions.map((region, index) => <button onClick={() => setFilterRegions(region)}  key={index}>{region}</button>)}
                    </div>
                )}
            </div>
        </div>
    )
}