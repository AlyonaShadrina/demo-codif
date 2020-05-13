import colors from '../colors';

const globalStyle = {
    body: {
        background: colors.background,
        position: 'relative',
        minHeight: '100vh',
    },
    a: {
        textDecoration: 'none',
    },
    '*': {
        scrollBehavior: 'smooth',
    },
    '.pageTitle': {
        marginBottom: 20,
    },
    '.loadingErrorContainer': {
        minHeight: '50vh',
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    '.largeHeading': {
        fontSize: 50,
        marginBottom: 20,
        fontWeight: 'bold',
        lineHeight: 1,
    },
    '.notEmpty': {
        border: `1px solid ${colors.primary} !important`,
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    },
    '.bordered': {
        border: `1px solid ${colors.lightGrey}`,
    },
    '.CircularProgressbar-text': {
        fontSize: 50,
        fontWeight: 300,
    },
    '.scaleBtn': {
        animation: '.25s scale',
    },
    '@keyframes scale': {
        '0%': {
            transform: 'scale(1)',
        },
        '20%': {
            transform: 'scale(.95)',
        },
        '50%': {
            transform: 'scale(.90)',
        },
        '90%': {
            transform: 'scale(.95)',
        },
        '100%': {
            transform: 'scale(1)',
        },
    },
    // !important, as after build MuiCssBaseline is before MuiTypography
    '.primaryHeading': {
        color: colors.primary,
        fontStyle: 'normal',
        fontWeight: 'bold !important',
        fontSize: '60px !important',
        // lineHeight: 1,
        marginBottom: '40px !important',
    },
    // !important, as we override library style
    '.Highlight__part': {
        backgroundColor: `${colors.highlight} !important`,
        boxSizing: 'content-box',
        padding: '0 1px 5px',
        borderRadius: 3,
    },
    '.capitalize': {
        textTransform: 'capitalize',
    },
    '.maxWidth400': {
        maxWidth: 400,
    },
    '.maxWidth300': {
        maxWidth: 300,
    },
    '.deleteButton': {
        color: colors.red,
        '&:hover': {
            backgroundColor: colors.redLight,
        },
    },
};

export default globalStyle;
