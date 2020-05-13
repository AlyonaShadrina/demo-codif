import { InputBase } from '@material-ui/core';
import React from 'react';


const NewOptionInput = ({ setCurrentOptions, className }) => {
    const handleKeydown = (e) => {
        const { value } = e.currentTarget;

        if (e.key === 'Enter' && value.length > 0) {
            setCurrentOptions(oldArr => [...oldArr, value])
            e.currentTarget.value = '';
        }
    };

    return (
        <InputBase
            type="text"
            onClick={e => e.stopPropagation()}
            onKeyDown={handleKeydown}
            placeholder="Type here, 'Enter' to add"
            className={className}
        />
    )
};

export default NewOptionInput;