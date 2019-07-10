import React from 'react';
import ReactDOM from 'react-dom';
import AppUsage from './app_usage.js';
import ServiceUsage from './service_usage.js';
import {Siteframe} from 'pivotal-ui/react/siteframe';
import 'pivotal-ui/css/typography';
import 'pivotal-ui/css/positioning';
import 'pivotal-ui/css/colors';
import 'pivotal-ui/css/whitespace';
import 'pivotal-ui/css/vertical-alignment';
import 'pivotal-ui/css/alignment';
import './app.css';

class Reports extends React.Component {

    render() {
        return (
            <Siteframe {...{
                  headerProps: {
                    logo: <div className="pal logo"></div>,
                    companyName: 'Pivotal',
                    productName: 'Telemetry Collector'
                  }
                }}>

                <div className="phxl">
                    
                    <h1 className="pvxxxl plxl">Usage Data  Overview</h1>                     
                    <div className="pbxl">
                        <AppUsage/>
                    </div>
                    <div>
                        <ServiceUsage/>
                    </div>
                </div>
                
            </Siteframe>
        );
    }
}

ReactDOM.render(
    <Reports/>,
    document.getElementById('root')
);