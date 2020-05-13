import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Field } from 'redux-form';

import { placeholders, paths } from '../../../../dictionary';
import { maxBotNameLength } from '../../../../config';
import cropText from '../../../../utils/cropText';
import RouterStyledLink from '../../../_common/RouterStyledLink';
import RenderField from './RenderField';


const useStyles = makeStyles((theme) => ({
    titleLink: {
        '&:not(:hover)': {
            color: theme.palette.text.primary,
        },
        wordWrap: 'break-word',
    },
    title: {
        wordWrap: 'break-word',
    },
    inputTitle: {
        fontSize: 26,
        fontWeight: 500,
        display: 'block',
    },
    inputDescr: {
        fontSize: 16,
        display: 'block',
        lineHeight: '24px',
        maxHeight: 400,
        overflow: 'auto',
    },
    description: {
        wordWrap: 'break-word',
    },
}));

/**
 * Component shows editable or not editable bot description.
 * If editable:
 *  - must be inside redux form;
 *  - will show tip about name field length restrictions.
 *
 * @param {Object} bot - from state
 * @param {boolean} editable - if true, inputs will be rendered
 * @param {boolean} titleIsLink - if true and editable === false, bot name will be link to bot page.
 * @param {string | number} userId - required if titleIsLink === true
 * @param {string} className - container could be styled
 */

// TODO: validation errors are weird. refactor, maybe
const BotDescription = ({
    bot, titleIsLink, editable, userId, className,
}) => {
    const classes = useStyles();

    const [nameFieldChars, setNameFieldChars] = useState((bot ? bot.name.length : 0));

    const checkLength = (e) => {
        const { value } = e.target;
        setNameFieldChars(value.length);
    };

    const NameInfoTip = ({ touched }) => (
        <Typography
            variant="subtitle1"
            color={(
                (nameFieldChars > 0 && nameFieldChars <= maxBotNameLength)
                || !touched
            ) ? 'textSecondary' : 'error'}
        >
            {`${nameFieldChars}/${maxBotNameLength} characters`}
        </Typography>
    );

    if (editable) {
        return (
            <div className={className}>
                <Field
                    className={classes.inputTitle}
                    name="name"
                    placeholder={placeholders.bot.name}
                    multiline
                    component={RenderField}
                    beforeOnChange={checkLength}
                    InfoTip={NameInfoTip}
                />
                <Field
                    className={classes.inputDescr}
                    name="description"
                    placeholder={placeholders.bot.description}
                    multiline
                    component={RenderField}
                />
            </div>
        );
    }

    return (
        <div className={className}>
            {titleIsLink
                ? (
                    <Typography
                        component="h2"
                        variant="h1"
                    >
                        <RouterStyledLink to={`${paths.users}/${userId}${paths.bots}/${bot.id}`} className={classes.titleLink}>
                            {cropText((bot.name || bot.id), 100)}
                        </RouterStyledLink>
                    </Typography>
                )
                : (
                    <Typography
                        component="h2"
                        variant="h1"
                        className={classes.title}
                    >
                        {cropText((bot.name || bot.id), 100)}
                    </Typography>
                )}
            <div className={classes.description}>
                {cropText(bot.description, 300)}
            </div>
        </div>
    );
};

export default BotDescription;
