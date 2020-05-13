import { MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';


const SelectFilter = ({
    makeRequest, value = '', filterValue, options, updateOptionsOnRender,
}) => {
    const handleChange = (e) => {
        makeRequest({ [filterValue]: e.target.value });
    };

    const [optionsToShow, setOptionsToShow] = useState(options);

    useEffect(() => {
        if (updateOptionsOnRender) {
            setOptionsToShow(updateOptionsOnRender(options));
        }
    }, []);

    return (
        <Select
            onChange={handleChange}
            value={value}
            disableUnderline
            className={value ? 'notEmpty' : ''}
        >
            <MenuItem value="" />
            {
                optionsToShow.map((option) => (
                    <MenuItem
                        value={option.value}
                        key={option.value}
                    >
                        {option.text}
                    </MenuItem>
                ))
            }
        </Select>
    );
};

export default SelectFilter;
