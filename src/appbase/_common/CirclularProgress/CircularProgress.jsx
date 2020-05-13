import { makeStyles } from '@material-ui/core';
import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import hexToRgb from '../../../utils/hexToRgb';
import withColorSwitch from '../../../hocs/withColorSwitch';


// we had to do 'rgba(255,255,255,0)' instead of 'transparent' because of safari
const useStyles = makeStyles(() => ({
    shadow: ({ percentage, color }) => {
        const { r, g, b } = hexToRgb(color);
        return ({
            background: `
            linear-gradient(to bottom, white 0%, white 30%, rgba(255,255,255,0) 100%),
            radial-gradient(
                ellipse at center,
                rgba(255,255,255,0) 1%,
                rgba(255,255,255,0) 56%,
                rgba(${r}, ${g}, ${b}, ${percentage}) 57%,
                rgba(${r}, ${g}, ${b}, ${percentage}) 100%
            )
        `,
            borderRadius: '100%',
        });
    },
}));


const CircularProgress = ({
    percentage, className, color, ...restProps
}) => {
    const percentValue = percentage || 0;

    const props = {
        percentage: percentValue > 25 ? (percentValue / 100) / 1.5 : 0.25,
        color,
    };

    const classes = useStyles(props);

    return (
        <div className={`${classes.shadow} ${className}`} {...restProps}>
            <CircularProgressbar
                value={percentValue}
                text={`${percentValue}%`}
                strokeWidth={5}
                styles={buildStyles({
                    strokeLinecap: 'round',
                    pathTransitionDuration: 0.5,
                    pathColor: color,
                    textColor: color,
                    trailColor: `rgba(${hexToRgb(color).r}, ${hexToRgb(color).g}, ${hexToRgb(color).b}, .4)`,
                })}
            />
        </div>
    );
};

export default withColorSwitch(CircularProgress);
