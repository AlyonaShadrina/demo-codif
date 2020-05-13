import colors from '../colors';

const MuiButtons = {
    root: {
        borderRadius: 30,
        minWidth: 170,
        textTransform: 'unset',
        // border: `1px solid transparent`,
        '&:hover': {
            backgroundColor: colors.primaryOpacity,
        },
    },
    contained: {
        boxShadow: '0 15px 10px -9px rgba(66, 163, 255, .25);',
        // borderColor: colors.primary,
        '&[disabled][class*="Primary"]': {
            backgroundColor: colors.primaryOpacity,
            boxShadow: `inset 0px 0px 0px 1px${colors.primary}`,
            color: colors.primary,
            opacity: 0.5,
        },
    },
    outlined: {
        borderColor: '#000',
    },
    sizeSmall: {
        paddingTop: 3,
        paddingBottom: 3,
        minWidth: 130,
    },
    sizeLarge: {
        fontSize: 20,
        minWidth: 220,
        paddingTop: 7,
        paddingBottom: 7,
    },
};

export default MuiButtons;
