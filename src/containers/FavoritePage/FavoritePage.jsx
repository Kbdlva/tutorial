import React from 'react';
import { useSelector } from 'react-redux';
import styles from './FavoritesPage.module.css';

const FavoritePage = () => {
    const storeDate = useSelector(state => state.favoriteReducer);
    console.log(storeDate)
  return (
    <div>FavoritePage</div>
  )
}

export default FavoritePage