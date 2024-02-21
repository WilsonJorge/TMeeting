import React, { Component } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartOptions {
    categories: number[];
    labels: any;
}

interface State {
    options: {
        chart: {
            id: string;
        };
        xaxis: ChartOptions;
        yaxis: ChartOptions;
        plotOptions: any;
    };
    series: {
        name: string;
        data: number[];
    }[];
}

interface Props {
    color: string | undefined;
}

class BarChart extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "basic-bar",
                },
                xaxis: this.getAxisOptions(props.color),
                yaxis: this.getAxisOptions(props.color),
                plotOptions: {
                    bar: {
                        borderRadius: 8, // Adjust the borderRadius as needed
                    },
                },
            },
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 45, 50, 49, 60, 70, 91],
                },
            ],
        };
    }

    getAxisOptions(color: string | undefined): ChartOptions {
        return {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
            labels: {
                style: {
                    colors: color,
                },
            },
        };
    }

    componentDidUpdate(prevProps: Props) {
        if (this.props.color !== prevProps.color) {
            this.setState({
                options: {
                    ...this.state.options,
                    xaxis: this.getAxisOptions(this.props.color),
                    yaxis: this.getAxisOptions(this.props.color),
                },
            });
        }
    }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart options={this.state.options} series={this.state.series} type="bar" height={330} />
                    </div>
                </div>
            </div>
        );
    }
}

export default BarChart;
