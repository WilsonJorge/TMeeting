import React, { Component } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface DonutChartState {
    options: {
        labels: string[];
        legend: {
            show: boolean;
            labels: {
                colors: any;
            };
        };
    };
    series: number[];
}

interface Props {
    color: string | undefined;
}

class DonutChart extends Component<Props, DonutChartState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            options: {
                labels: ["Category A", "Category B", "Category C", "Category D", "Category E"],
                legend: {
                    show: true,
                    labels: {
                        colors: props.color, // Default legend item colors
                    },
                },
            },
            series: [44, 55, 13, 43, 22],
        };
    }

    componentDidUpdate(prevProps: Props) {
        if (this.props.color !== prevProps.color) {
            this.setState({
                options: {
                    ...this.state.options,
                    legend: {
                        ...this.state.options.legend,
                        labels: {
                            colors: this.props.color,
                        },
                    },
                },
            });
        }
    }

    render() {
        return (
            <div className="donut-chart">
                <Chart options={this.state.options} series={this.state.series} type="donut" height={330} width={500} />
            </div>
        );
    }
}

export default DonutChart;
