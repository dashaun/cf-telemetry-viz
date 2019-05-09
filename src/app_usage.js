import React from 'react';
import {Container, LineChart} from 'davi-js';
import appUsage from './telemetry/usage_service/app_usage.json';

class AppUsage extends React.Component {

    constructor(props) {
        super(props);
        const maxUsage = [];
        const avgInstances = [];
        const instanceHours = [];

        for (let i = 0; i < appUsage.monthly_reports.length; i++) {
            let dateVal = new Date(appUsage.monthly_reports[i].year, appUsage.monthly_reports[i].month, 1);
            maxUsage.push({
                x: dateVal,
                y: appUsage.monthly_reports[i].maximum_app_instances
            });
            avgInstances.push({
                x: dateVal,
                y: appUsage.monthly_reports[i].average_app_instances
            });
            instanceHours.push({
                x: dateVal,
                y: appUsage.monthly_reports[i].app_instance_hours / 1000
            });
        }

        this.state = {
            appUsage, maxUsage, avgInstances, instanceHours
        };
    };

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
                        text: 'Application Instance Usage Report ' + this.state.appUsage.report_time
                    }}
                >
                    <LineChart
                        alertIndicators={[]}
                        data={[
                            {
                                color: 'red',
                                data: this.state.maxUsage,
                                opacity: 0.5,
                                strokeWidth: 3,
                                title: 'Max Instances'
                            },
                            {
                                color: '#00b5a3',
                                data: this.state.avgInstances,
                                opacity: 0.5,
                                strokeWidth: 3,
                                title: 'Average Instances'
                            },
                            {
                                color: 'yellow',
                                data: this.state.instanceHours,
                                opacity: 0.5,
                                strokeWidth: 3,
                                title: 'Instance Hours/1000'
                            },
                        ]}
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

export default AppUsage;