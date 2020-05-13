import {
    Paper, Button, Grid, Select, MenuItem,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { reduxFormNames } from '../../../../config';
import { paths, placeholders } from '../../../../dictionary';


const RenderField = ({ input, children, ...restProps }) => (
    <Select
        {...input}
        disableUnderline
        {...restProps}
    >
        {children}
    </Select>
);

const VDIInfo = ({
    botStatusNotEditable, botId, vdiList, updateBotVdi, handleSubmit, userId, pristine,
}) => (
    <Paper>
        <form onSubmit={handleSubmit(updateBotVdi)}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={botStatusNotEditable ? 12 : 8}>
                    <Field
                        component={RenderField}
                        name="vdi_id"
                        disabled={botStatusNotEditable}
                        placeholder={placeholders.bot.vdi}
                    >
                        <MenuItem value={null}> </MenuItem>
                        {Object.values(vdiList).map((vdi) => (
                            <MenuItem key={vdi.id} value={vdi.id}>
                                {`${vdi.app_name} (${vdi.app_common_name})`}
                            </MenuItem>
                        ))}
                    </Field>
                </Grid>
                {!botStatusNotEditable && (
                    <Grid item md={4}>
                        <Box component="span" mr={3}>
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                disabled={pristine}
                            >
                                Update
                            </Button>
                        </Box>
                        <Link to={`${paths.users}/${userId}${paths.bots}/${botId}${paths.botsVdi}`}>
                            <Button color="primary" variant="outlined">
                                Go to VDI list
                            </Button>
                        </Link>
                    </Grid>
                )}
            </Grid>
        </form>
    </Paper>
);

export default reduxForm({
    form: reduxFormNames.editBotVDI,
    enableReinitialize: true,
})(VDIInfo);
