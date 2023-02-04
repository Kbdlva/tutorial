import React from 'react';
import icon from './img/bookmark.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import styles from './Favorite.module.css';

const Favorite = () => {
    const [count, setCount] = useState();
    const storeDate = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        const length = Object.keys(storeDate).length;
        length.toString().length > 2 ? setCount('...') : setCount(length)
        setCount(length);
    });
    
    return (
        <div className={styles.container}>
            <Link to="/favorites">
                <span className={styles.counter}>{count}</span>
                <img className={styles.icon} src={icon} alt="bookmarks" />
            </Link>
        </div>
    )
}

export default Favorite
