import React, { Component } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface PieChartState {
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

class PieChart extends Component<Props, PieChartState> {
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
            <div className="pie-chart">
                <Chart options={this.state.options} series={this.state.series} type="pie" height={330} width={450} />
            </div>
        );
    }
}

export default PieChart;
