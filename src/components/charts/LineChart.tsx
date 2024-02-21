import React, { Component } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartOptions {
    categories: number[];
    labels: any;
}

interface LineChartState {
    options: {
        chart: {
            id: string;
        };
        xaxis: ChartOptions;
        yaxis: ChartOptions;
        strokeCurve: string; // Add the strokeCurve property
    };
    series: {
        name: string;
        data: number[];
    }[];
}

interface Props {
    color: string | undefined;
}

class LineChart extends Component<Props, LineChartState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "line-chart",
                },
                xaxis: this.getAxisOptions(props.color),
                yaxis: this.getAxisOptions(props.color),
                strokeCurve: "smooth", // Set to "smooth" for a smooth line
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
            <div className="line-chart">
                <Chart options={this.state.options} series={this.state.series} type="line" height={320} />
            </div>
        );
    }
}

export default LineChart;
