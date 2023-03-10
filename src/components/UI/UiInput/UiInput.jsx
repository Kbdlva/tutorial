import React from 'react';
import cn from 'classnames';

import icon from './img/cancel.svg'
import styles from './UiInput.module.css';

const UiInput = ({
    value,
    handleInputChange,
    placeholder,
    classes 
}) => (
    <div className={cn(styles.wrapper__input, classes)}>
        <input 
        type="text" 
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder ={placeholder}
        className={styles.input}
        />
        <img 
        onClick={() => value && handleInputChange('')} 
        className={cn(styles.clear, !value && styles.clear__disabled)}
        src={icon} alt='Clear'/>
    </div>
)

export default UiInput