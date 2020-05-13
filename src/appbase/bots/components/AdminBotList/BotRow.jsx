import {
    makeStyles, TableCell, TableRow, Typography,
} from '@material-ui/core';
import React from 'react';

import botStatusNotEditable from '../../../../utils/botStatusNotEditable';
import { userCreationDatetimeFormat } from '../../../../config';
import { paths } from '../../../../dictionary';
import cropText from '../../../../utils/cropText';
import formatDateFromUtc from '../../../../utils/formatDateFromUtc';
import RouterStyledLink from '../../../_common/RouterStyledLink';
import UsersAssignContainer from '../../containers/UsersAssignContainer';
import withAuth from '../../../../hocs/withAuth';


const useStyles = makeStyles((theme) => ({
    textRight: {
        textAlign: 'right',
        paddingRight: 15,
    },
    title: {
        '&:not(:hover)': {
            color: theme.palette.text.primary,
        },
    },
    timezone: {
        marginLeft: 2,
        verticalAlign: 'super',
    },
}));

const BotRow = ({
 bot, id, usersForBotCreation, profile,
}) => {
    const classes = useStyles();

    const created_at = formatDateFromUtc(bot.created_at, userCreationDatetimeFormat);
    const start_datetime = formatDateFromUtc(bot.start_datetime, userCreationDatetimeFormat);

    if (!bot) {
        return null;
    }

    const isAssigned = !!bot.users.find((user) => user.id === profile.id);

    return (
        <TableRow>
            <TableCell className="maxWidth300">
                {
                    bot.users && bot.users.length ? (
                        <RouterStyledLink
                            to={`${paths.users}/${isAssigned ? profile.id : bot.users[0].id}${paths.bots}/${id}`}
                            className={classes.title}
                        >
                            {cropText((bot.name || id), 60)}
                        </RouterStyledLink>
                    ) : bot.name ? cropText(bot.name, 60) : id
                }
            </TableCell>
            <TableCell>
                <Typography variant="body2">
                    {created_at.date}
                    <Typography variant="subtitle1" component="span" className={classes.timezone}>
                        {created_at.timezone}
                    </Typography>
                </Typography>
            </TableCell>
            <TableCell>
                <Typography variant="body2">
                    {start_datetime.date}
                    <Typography variant="subtitle1" component="span" className={classes.timezone}>
                        {start_datetime.timezone}
                    </Typography>
                </Typography>
            </TableCell>
            <TableCell className="maxWidth300">
                {cropText(bot.aa_bot_name, 60)}
            </TableCell>
            <TableCell className="maxWidth400">
                <UsersAssignContainer
                    bot={bot}
                    size="small"
                    usersForBotCreation={usersForBotCreation}
                    botStatusNotEditable={botStatusNotEditable(bot)}
                />
            </TableCell>
            <TableCell
                className={classes.textRight}
            >
                {bot.status.title}
            </TableCell>
        </TableRow>
    );
};

export default withAuth(BotRow);
