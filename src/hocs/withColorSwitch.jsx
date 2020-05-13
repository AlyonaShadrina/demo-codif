import React from 'react';
import colors from '../styles/colors';

const withColorSwitch = (WrappedComponent) => {
    return class extends React.Component {
        color = () => {
            switch (this.props.fill) {
            case 'primary':
                return colors.primary;
            case 'lightgrey':
                return colors.grey;
            case 'white':
                return colors.white;
            case 'red':
                return colors.red;
            case 'green':
                return colors.green;
            case 'text':
                return colors.text;


            // for progress bars
            case 'idle':
                return colors.grey;
            case 'failed':
                return colors.red;
            case 'scheduled':
                return colors.primary;
            case 'pending':
                return colors.primary;
            case 'in_progress':
                return colors.primary;
            case 'completed':
                return colors.green;
            case 'confirm':
                return colors.violet;
            default:
                return "#4F4F4F";
            }
        };

        render() {
            return <WrappedComponent color={this.color()} {...this.props} />;
        }
    }
};

export default withColorSwitch;