import { Button } from '@material-ui/core';
import React from 'react';
import ChooseFilesButton from '../../../_common/ChooseFilesButton';


const ManageAvatar = ({ change, setTemporaryAvatar }) => {
    const uploadFile = (files) => {
        if (Array.isArray(files)) {
            files.map((file) => {
                const formData = new FormData();
                formData.append('avatar', file);
                change('avatar', formData);

                const FR = new FileReader();
                FR.addEventListener('load', (e) => {
                    setTemporaryAvatar(e.target.result);
                });
                FR.readAsDataURL(file);
            });
        } else {
            Object.keys(files).map((key) => {
                const file = files[key];
                const formData = new FormData();
                formData.append('avatar', file);
                change('avatar', formData);

                const FR = new FileReader();
                FR.addEventListener('load', (e) => {
                    setTemporaryAvatar(e.target.result);
                });
                FR.readAsDataURL(file);
            });
        }
    };

    const clearAvatar = () => {
        change('avatar', null);
    };

    const buttonProps = {
        color: 'primary',
        size: 'small',
        variant: 'text',
        style: {
            fontSize: 12,
        },
    };

    return (
        <ChooseFilesButton
            uploadFile={uploadFile}
            buttonProps={buttonProps}
            buttonText="Change profile photo"
        />
    );
};

export default ManageAvatar;
