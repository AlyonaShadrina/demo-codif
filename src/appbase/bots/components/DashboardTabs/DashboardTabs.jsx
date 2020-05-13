import { makeStyles, Tab, Tabs } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import colors from '../../../../styles/colors';
import BotListContainer from '../../containers/BotListContainer';
import * as actions from '../../state/actions';


const useStyles = makeStyles((theme) => ({
    tabs: {
        marginTop: 70,
        marginBottom: 50,
        '& [aria-selected="true"]': {
            backgroundColor: theme.palette.primary.light,
        },
    },
    scroller: {
        paddingTop: 10,
    },
    button: {
        overflow: 'unset',
    },
    badge: {
        position: 'static',
    },
    idle: {
        // backgroundColor: theme.palette.common.white,
        // color: theme.palette.common.black,
        // border: `1px solid ${colors.highlight}`,
    },
    completed: {
        backgroundColor: colors.green,
    },
    failed: {
        backgroundColor: theme.palette.error.main,
    },
}));

const DashboardTabs = ({ userStatuses, getBotStatuses, userId }) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [value, setValue] = useState(0);

    const getBotListWithStatus = () => {
        dispatch(actions.getBotsWithStatus({ id: userId, statusObj: userStatuses[value] }));
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        getBotStatuses();
    };

    useEffect(() => {
        getBotListWithStatus();
    }, [value, userId]);

    return (
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="BOTs status"
                className={classes.tabs}
                classes={{
                    scroller: classes.scroller,
                }}
            >
                {userStatuses.map((status, i) => (
                    <Tab
                        label={(
                            <Badge
                                badgeContent={status.count}
                                className={classes.badge}
                                color="primary"
                                classes={{
                                    colorPrimary: classes[status.code],
                                }}
                            >
                                <div>
                                    {status.title}
                                </div>
                            </Badge>
                        )}
                        className={classes.button}
                        key={i}
                    />
                ))}
            </Tabs>
            <BotListContainer statusObj={userStatuses[value]} />
        </div>
    );
};

export default DashboardTabs;
