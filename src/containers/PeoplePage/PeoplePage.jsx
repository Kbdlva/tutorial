import { useState, useEffect } from 'react';
import { getApiResource } from '../../utils/network';
import styles from './PeoplePage.module.css';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId } from '../../services/getPeopleData';

const PeoplePage = () => {
  const [people, setPeople] = useState(null);

  // const getResource = async (url) => {
  //   const res = await getApiResource(url);

  //   const peopleList = res.results.map(({ name, url }) => { // array
  //     console.log(id);
  //     return {
  //       name, // or name: name  --> key: value
  //       url   //    url: url 
  //     }
  //   })

  //   console.log(peopleList)

  //   setPeople(peopleList);
  // }

  // useEffect(() => {
  //   getResource(API_PEOPLE);
  // }, []);

  const getResponse = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);

        return {
          id,
          name,
          url
        }
      });
      console.log(peopleList)

      setPeople(peopleList);
    }

  };

  useEffect(() => {
    getResponse(API_PEOPLE);
  }, []);



  return (
    <>
      {people && ( // if there are people to return // we need this line because by default we set it ass null
        <ul>
          {people.map(({ name, url }) =>
            <li key={name}>{name}</li> // key is omething like id for each element
          )}
        </ul>
      )}

    </>
  )
}

export default PeoplePage; 