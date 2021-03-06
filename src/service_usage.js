import React from 'react';
import {Container, LineChart, setTheme} from 'davi-js';
import serviceUsage from './telemetry/usage_service/service_usage.json';

setTheme('dark')

class ServiceUsage extends React.Component {
    constructor(props) {
        super(props);
        const serviceNames = [];
        const serviceData = [];

        for (let i = 0; i < serviceUsage.monthly_service_reports.length; i++) {
            let sn = serviceUsage.monthly_service_reports[i].service_name;
            serviceNames.push(sn);
            let sData = [];
            let theService = serviceUsage.monthly_service_reports[i];
            for (let j = 0; j < theService.usages.length; j++) {
                let dateVal = new Date(theService.usages[j].year,
                    theService.usages[j].month, 1);
                sData.push(
                    {
                        x: dateVal,
                        y: theService.usages[j].maximum_instances
                    }
                )
            }
            serviceData.push({
                data: sData,
                opacity: 0.5,
                strokeWidth: 3,
                title: sn
            });
        }

        this.state = {
            serviceUsage, serviceNames, serviceData
        };

    };

    render() {
        return (<div>
                <Container
                    backgroundColor={undefined}
                    draggable={false}
                    dropdownItems={undefined}
                    iconsVisible={false}
                    loading={false}
                    maximized={undefined}
                    subtitle={false}
                    title={{
                        text: 'Service Instance Usage ' + this.state.serviceUsage.report_time
                    }}
                >
                    <LineChart
                        alertIndicators={[]}
                        data={
                            this.state.serviceData
                        }
                        deploymentIndicators={[]}
                        height={300}
                        showHorizontalGridLines
                        showTooltipForAllSeries
                        yMin={0}
                    />
                </Container>
            </div>
        );
    }
}

export default ServiceUsage;