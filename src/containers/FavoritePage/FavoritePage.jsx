import React from 'react';
import { useSelector } from 'react-redux';
import PeopleList from '@components/PeoplePage/PeopleList'

import styles from './FavoritePage.module.css';
import { useState, useEffect } from 'react';

const FavoritePage = () => {
  const [people, setPeople] = useState([]);
  const storeDate = useSelector(state => state.favoriteReducer);

  // {
  //   1: {
  //     name: 'Luke Skywalker',
  //     img: 'https://starwars-visualguide.com/assets/img/characters/1.jpg'
  //   }
  //   9 : {
  //     name: 'Biggs Darklighter',
  //     img: 'https://starwars-visualguide.com/assets/img/characters/9.jpg'
  //   }
  // }

  useEffect(() => {
    const arr = Object.entries(storeDate);

    if (arr.length) {
      const res = arr.map(item => {
        return {
          id: item[0],
          ...item[1] // it is like  name: item[1].name
          //                    img: item[2].img
        }
      })
      setPeople(res);
    }
  }, []);

  return (
    <>
      <h1 className='header__text'>FavoritePage</h1>
      {people.length ?
      <PeopleList people={people} /> :
      <h2 className={styles.comment}>No data </h2>

      }
    </>
  )
}

export default FavoritePage