import { useState } from "react"
import styles from "./Flags.module.css"
import { useEffect } from "react";


export default function Flags(props) {
    const {info} = props;
    
    return(
        <div className={`${styles.mainContainer}`}>
            {info.map((country, index) => (
                <div key={index} className={`${styles.countriesContent}`}>
                <div>
                <img  src={country.flags?.svg || "placeholder-image-url"}
                alt={`Flag of ${country.name.common}`}
                className={`${styles.flagImage}`} />
                </div>
                <div className={`${styles.countriesTextInfo}`}>
                    <h1>{country.name.common}</h1>
                    <p><span className={`${styles.nameBold}`}>Population: </span>{country.population.toLocaleString()}</p>
                    <p><span className={`${styles.nameBold}`}>Region: </span>{country.region}</p>
                    <p><span className={`${styles.nameBold}`}>Capital: </span >{country.capital ? country.capital.join(", ") : "N/A"}</p>
                   
                </div>
            </div>))}
            
        </div>
    )
}