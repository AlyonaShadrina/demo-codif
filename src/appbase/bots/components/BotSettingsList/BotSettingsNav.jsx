import {
    Container, Grid, makeStyles, Tab, Tabs,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';


const useStyles = makeStyles((theme) => ({
    container: {
        position: 'fixed',
        zIndex: 1,
        bottom: 0,
        width: '100%',
        left: 0,
        backgroundColor: theme.palette.common.white,
    },
    label: {
        fontSize: 14,
        height: 48,
        '& a': {
            color: theme.palette.text.primary,
        },
    },
    link: {
        height: 48,
        display: 'flex',
        alignItems: 'center',
        padding: 10,
    },
    tabRoot: {
        padding: 0,
        '&[aria-selected="true"]': {
            backgroundColor: theme.palette.primary.light,
        },
        '&[aria-selected="true"] a': {
            color: theme.palette.primary.main,
        },
    },
    submit: {
        textAlign: 'right',
    },
}));

const BotSettingsNav = ({ navData, visibleSection, isUser }) => {
    const classes = useStyles();

    const [value, setValue] = useState(visibleSection);

    useEffect(() => {
        setValue(visibleSection);
    }, [visibleSection]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.container}>
            <Container>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item xs={12}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="BOTs status"
                        >
                            {navData.map((item, i) => {
                                if (isUser && !item.visibleForUser) {
                                    return <Tab style={{ padding: 0 }} key={i} />;
                                }
                                return (
                                    <Tab
                                        label={(
                                            <a href={`#${item.id}`} className={classes.link}>
                                                {item.name}
                                            </a>
                                        )}
                                        className={classes.tab}
                                        classes={{
                                            wrapper: classes.label,
                                            root: classes.tabRoot,
                                        }}
                                        key={i}
                                    />
                                );
                            })}
                        </Tabs>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default BotSettingsNav;
