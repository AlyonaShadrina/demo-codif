import React from 'react';
import { makeStyles, Paper, Grid, Typography, LinearProgress, Fab, Hidden } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import { Field } from 'redux-form';

import Play from '../../../../assets/icons/Play';
import Delete from '../../../../assets/icons/Delete';
import AddButtonOutlined from "../../../_common/AddButtonOutlined";


const useStyles = makeStyles(theme => ({
    container: {
        marginBottom: 30,
    },
}));

const renderField = ({ input, label, type, meta: { touched, error }, id }) => (
    <>
        <input {...input} type={type}
               placeholder={label}
               value={id}
        />
        {touched && error && <span>{error}</span>}
    </>
);


const SubbotList = ({ list, match, editable }) => {
    const classes = useStyles();

    return (
        <Paper elevation={ editable ? 1 : 0 }>
            <div >
                {/*<div className={editable ? classes.container : ''}>*/}
                {
                    false && list.map((item, i) => (
                        <Grid
                            container
                            key={i}
                            alignItems="center"
                            spacing={3}
                        >
                            {
                                editable
                                    ? (
                                        <Field
                                            name={`subbot[${i}].text`}
                                            type="hidden"
                                            component={renderField}
                                            id={item.id}
                                        />
                                    )
                                    : null
                            }

                            <Grid item xs={ editable ? 10 : 12 }>
                                <Grid container justify="space-between">
                                    <Grid item>
                                        <Typography variant="subtitle1">
                                            {item.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">
                                            {item.progress * 100}%
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <LinearProgress
                                    // className={classes.margin}
                                    variant="determinate"
                                    color="secondary"
                                    value={item.progress * 100}
                                />
                            </Grid>
                            <Hidden xsUp={!editable}>
                                <Grid item xs={2}>
                                    <Fab size="small" color="primary" title="Start bot">
                                        <Play fill="white" className={classes.addBtnIcon}/>
                                    </Fab>
                                    {/*<Delete*/}
                                    {/*    title="delete"*/}
                                    {/*    fill="lightgrey"*/}
                                    {/*    onClick={() => list.remove(i)}*/}
                                    {/*/>*/}
                                </Grid>
                            </Hidden>
                        </Grid>
                    ))
                }
            </div>
            <Hidden xsUp={!editable}>
                {/*<Link to={`/bot/${match.params.id}/id`}>*/}
                <AddButtonOutlined text="Add new subbot"/>
                {/*</Link>*/}
            </Hidden>
        </Paper>
    )
};

export default withRouter(SubbotList);
