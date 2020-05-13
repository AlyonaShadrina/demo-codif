import colors from '../colors';


const typography = {
    fontFamily: [
        'Montserrat',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
    ].join(','),
    fontSize: 16,
    fontWeight: 'normal',
    h1: {
        fontWeight: 500,
        fontSize: 26,
        marginTop: 0,
        marginBottom: 10,
    },
    h2: {
        fontWeight: 'normal',
        fontSize: 20,
    },
    body1: {
        fontSize: 16,
    },
    body2: {
        fontSize: 14,
    },
    subtitle1: {
        fontSize: 12,
    },
    subtitle2: {
        fontSize: 10,
    },
    overline: {
        fontSize: 10,
        color: colors.grey,
    },
    caption: {
        fontSize: 16,
        fontWeight: 500,
    },
};

export default typography;
