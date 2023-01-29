import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { API_PERSON } from '@constants/api';
import { getApiResource } from '@utils/network';
import { withErrorApi } from '@hoc-helpers/withErrorApi';


import styles from './PersonPage.module.css';

const PersonPage = ({setErrorApi}) => {
    const [personId, setPersonId] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
        (async () => {
            setPersonId(id);

            const res = await getApiResource(`${API_PERSON}/${id}/`);
            
            if(res) {
                setErrorApi(false);
            } else {
                setErrorApi(true);
            }

        })();
    }, []);

  return (

    <h2>{id}</h2>
  )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func,

  }

export default withErrorApi(PersonPage)