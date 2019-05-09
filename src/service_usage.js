import React from 'react';
import {Container, LineChart} from 'davi-js';
import serviceUsage from './telemetry/usage_service/service_usage.json';

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
                color: ServiceUsage.getRandomColor(),
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

    static getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        return (<div
                style={{
                    margin: '16px'
                }}
            >
                <Container
                    backgroundColor={undefined}
                    draggable={false}
                    dropdownItems={undefined}
                    iconsVisible={false}
                    loading={false}
                    maximized={undefined}
                    onToggleMaximize={function onToggleMaximize() {
                    }}
                    subtitle={undefined}
                    title={{
                        text: 'Service Instance Usage Report ' + this.state.serviceUsage.report_time
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