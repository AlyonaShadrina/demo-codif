import { Popover, Input } from '@material-ui/core';
import React from 'react';


// Initially we used 'Select' component.
// But typing to our input fired onKeyPress event on ul ('Menu') ,
// that worked like some kind of search in 'MenuItem's and we have been loosing focus from input.
// Also it required more events customization.

const RenderSelectField = ({
    input,
    meta: { touched, error },
    endAdornment,
    children,
    onExit,
    options,
}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        onExit();
    };

    const opened = !!anchorEl;
    const id = opened ? 'popover' : undefined;

    return (
        <div>
            <Input
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
                disableUnderline
                endAdornment={endAdornment}
                placeholder={options.length ? options.join(', ') : 'Click to see values'}
                disabled
            />
            <Popover
                id={id}
                open={opened}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                PaperProps={{
                    style: {
                        padding: 0,
                        minWidth: 200,
                    },
                }}
            >
                {children}
            </Popover>
        </div>
    );
};

export default RenderSelectField;