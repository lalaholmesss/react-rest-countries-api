import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/SearchBar'
import Flags from './components/Flags/Flags'
import { useState, useEffect } from 'react';

function App() {
    const [error, setError] = useState(false);
    const [info, setInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterRegions, setFilterRegions] = useState();

    const REST_API = 'https://restcountries.com/v3.1/all';

    useEffect(() =>{
        const fetchCountries = async () => {
          setIsLoading(true);

          try{
              const response = await fetch(REST_API);
              const info = (await response.json());
              setInfo(info);
          }   catch (e) {
              setError(e);
          }   finally {
              setIsLoading(false);
          }
        };
        fetchCountries();
    }, [])

    if(isLoading) {
        return (
            <div className="loadingState">
                <h1><i className="fa-solid fa-circle-notch"></i></h1>
            </div>
        )
    }

    if(error) {
        return (
            <div className="errorState">
                <h1>Error?!?</h1>
                <p>That wasn’t supposed to happen...</p>
            </div>
        )
    }


    const filteredCountries = filterRegions 
        ? info.filter((country) => country.region === filterRegions)
        : info;

  return (
    <>
      <Navbar />
      <SearchBar info={info} setFilterRegions={setFilterRegions}/>
      <Flags info={filteredCountries} />
    </>
  )
}

export default App
