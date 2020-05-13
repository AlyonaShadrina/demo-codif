import { createMuiTheme } from '@material-ui/core';

import colors from '../colors';
import globalStyle from './global';
import palette from './palette';
import typography from './typography';
import MuiButtons from './MuiButtons';

const MuiTheme = createMuiTheme({
    palette: { ...palette },

    typography: { ...typography },

    overrides: {
        MuiCssBaseline: {
            '@global': { ...globalStyle },
        },
        MuiTypography: {
            colorPrimary: {
                color: colors.primary,
            },
        },
        MuiContainer: {
            maxWidthLg: {
                '@media (min-width: 1280px)': {
                    maxWidth: 1280 + 32 * 2,
                },
            },
        },
        // Buttons
        MuiButton: { ...MuiButtons },
        MuiFab: {
            root: {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                '&:hover': {
                    backgroundColor: colors.primaryOpacity,
                },
            },
            sizeSmall: {
                width: 30,
                height: 30,
                minHeight: 30,
            },
            primary: {
                boxShadow: '0px 3px 5px -1px rgba(66,163,255,0.2), 0px 6px 10px 0px rgba(66,163,255,0.14), 0px 1px 18px 0px rgba(66,163,255,0.12)',
                '&[disabled]': {
                    backgroundColor: colors.primaryOpacity,
                    color: colors.primary,
                    opacity: 0.5,
                },
            },
        },
        // Paper
        MuiPaper: {
            root: {
                padding: 30,
            },
            elevation1: {
                boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.1)',
            },
        },
        // Input
        MuiInput: {
            root: {
                width: '100%',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                fontSize: 14,
                padding: 11,
                lineHeight: '17px',
                border: '1px solid transparent',
                '&:hover:not([class*="disabled"])': {
                    boxShadow: '0px 4px 8px rgba(66, 163, 255, 0.25)',
                },
            },
            input: {
                padding: 0,
            },
            formControl: {
                paddingRight: 0,
            },
        },
        // Tabs
        MuiTab: {
            root: {
                borderBottom: `1px solid ${colors.grey}`,
                textTransform: 'none',
                fontWeight: 'normal',
                paddingLeft: 15,
                paddingRight: 15,
                '@media (min-width: 960px)': {
                    minWidth: 'unset',
                },
            },
            wrapper: {
                fontSize: 20,
                color: colors.text,
                position: 'relative',
            },
        },
        // MuiTreeItem
        MuiTreeItem: {
            root: {
                '&:focus > .MuiTreeItem-content': {
                    backgroundColor: 'transparent',
                },
            },
            label: {
                fontFamily: [
                    '"Fira Mono"',
                    'monospace',
                ].join(','),
                fontSize: 14,
            },
            iconContainer: {
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginRight: 5,
                width: 40,
            },
        },
        // Table
        MuiTableRow: {
            head: {
                background: colors.primary,
            },
        },
        MuiTableCell: {
            root: {
                fontSize: 14,
                paddingTop: 10,
                paddingBottom: 10,
                paddingRight: 25,
                wordWrap: 'break-word',
            },
            head: {
                fontSize: 14,
                color: colors.white,
                lineHeight: '1.2rem',
            },
        },
        MuiLinearProgress: {
            root: {
                borderRadius: 12,
            },
            bar: {
                borderRadius: 12,
            },
        },
        MuiPickersInlineWrapper: {
            popoverPaper: {
                padding: '0 0 8px 0',
            },
        },
        MuiMenu: {
            paper: {
                padding: 0,
            },
        },
        MuiMenuItem: {
            root: {
                fontSize: 14,
                minHeight: 40,
            },
            gutters: {
                paddingRight: 30,
                paddingLeft: 30,
            },
        },
        MuiListItem: {
            button: {
                '&:hover': {
                    backgroundColor: colors.primaryOpacity,
                },
            },
        },
        MuiListItemIcon: {
            root: {
                minWidth: 25,
            },
        },
        MuiLink: {
            root: {
                cursor: 'pointer',
            },
        },
        MuiDialog: {
            paperScrollPaper: {
                // maxHeight: '90vh',
            },
        },
        MuiAvatar: {
            colorDefault: {
                backgroundColor: colors.primary,
                color: colors.white,
                fontWeight: 600,
                fontSize: 16,
            },
        },
    },
});

export default MuiTheme;
