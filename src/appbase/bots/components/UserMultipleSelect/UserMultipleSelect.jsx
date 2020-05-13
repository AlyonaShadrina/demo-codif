import { Fab } from '@material-ui/core';
import React from 'react';
import Select from 'react-select';

import ChevronDown from '../../../../assets/icons/ChevronDown';
import ChevronDownSmall from '../../../../assets/icons/ChevronDownSmall';


// material ui autocomplete worked wrong on chip deletion
// and 'getTagProps is not a function'
// so we use 'react-select'

// we style our chips instead of using Chip component because of to much functions manipulations
const customStyles = {
    input: () => ({
        // padding: 11,
    }),
    control: (provided) => ({
        ...provided,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        border: 'none',
        '&:hover': {
            boxShadow: '0px 3px 5px -1px rgba(66,163,255,0.2), 0px 6px 10px 0px rgba(66,163,255,0.14), 0px 1px 18px 0px rgba(66,163,255,0.12)',
        },
    }),
    multiValue: (provided) => ({
        ...provided,
        whiteSpace: 'nowrap',
        borderRadius: 16,
        '& > :nth-of-type(1)': {
            paddingLeft: 10,
            paddingRigth: 10,
        },
        '& > :nth-of-type(2)': {
            borderRadius: 16,
            '&:hover': {
                backgroundColor: 'transparent',
                cursor: 'pointer',
            },
        },
    }),
};

const DropdownIndicator = (small) => (props) => (
    <Fab size="small">
        {
            small ? (
                <ChevronDownSmall title="Show available users" fill="lightgrey" />
            ) : (
                <ChevronDown title="Show available users" fill="lightgrey" />
            )
        }
    </Fab>
);

// we don't show ClearIndicator to avoid accidental deletion of values
// but instead we could write custom component with ActionConfirmButton
const UserMultipleSelect = ({ small, ...props }) => (
    <Select
        closeMenuOnSelect={false}
        isMulti
        placeholder="Select users"
        styles={customStyles}
        components={{ DropdownIndicator: DropdownIndicator(small), ClearIndicator: null }}
        {...props}
    />
);

export default UserMultipleSelect;
