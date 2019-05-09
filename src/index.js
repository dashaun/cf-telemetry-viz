import React from 'react';
import ReactDOM from 'react-dom';
import AppUsage from './app_usage.js';
import ServiceUsage from './service_usage.js';

class Reports extends React.Component {

    render() {
        return (
            <div>
                <AppUsage/>
                <ServiceUsage/>
            </div>
        );
    }
}

ReactDOM.render(
    <Reports/>,
    document.getElementById('root')
);