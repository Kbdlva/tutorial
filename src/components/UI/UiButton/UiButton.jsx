import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './UiButton.module.css';
import '../index.css';


const UiButton = ({ 
    text, 
    onClick, 
    disabled,
    theme='dark' 
 }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(styles.button, styles[theme])}>
            {text}
        </button>
    )
}

UiButton.propTypes = {
    text: PropTypes.string,
    onCLick: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string

}

export default UiButton;
