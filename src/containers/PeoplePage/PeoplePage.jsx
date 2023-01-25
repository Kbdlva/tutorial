import { useState, useEffect } from 'react';
import { getApiResource } from '../../utils/network';
import styles from './PeoplePage.module.css';
import { API_PEOPLE } from '../../constants/api';

const PeoplePage = () => {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);

    const peopleList = res.results.map(({ name, url }) => { // array
      return {
        name, // or name: name  --> key: value
        url   //    url: url 
      }
    })

    console.log(peopleList)

    setPeople(peopleList);
  }

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return (
    <>
      {people && ( // if there are people retrun // we need this line because by default we set it ass null
        <ul>
          {people.map(({ name, url }) =>
            <li key={name}>{name}</li>
          )}
        </ul>
      )}

    </>
  )
}

export default PeoplePage; 