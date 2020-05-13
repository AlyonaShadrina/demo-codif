import React from 'react';
import { notifications } from '../../../dictionary';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({
            hasError: true,
            error,
            info,
        });
        // console.error('ErrorBoundary', error)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="loadingErrorContainer">
                    <h1>{notifications.errors.default}</h1>
                    <p>Try to reload page with cache refresh (ctrl + F5)</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;