import LineChart from "../charts/LineChart";
import PieChart from "../charts/PieChart";
import BarChart from "../charts/BarChart";
import DonutChart from "../charts/DonutChart";
import { Row, Col, Card } from "antd";

interface ChartProps {
    bgColor?: string;
    textColor?: string;
    theme?: "light" | "dark";
}

const Charts: React.FC<ChartProps> = (props: ChartProps) => {
    return (
        <>
            <Row
                gutter={[8, 8]}
                style={{
                    marginTop: 16,
                }}
            >
                <Col xs={24} sm={24} md={14}>
                    <Card
                        style={{
                            backgroundColor: props.bgColor,
                            border: "none",
                        }}
                    >
                        <h2
                            style={{
                                margin: "20px 10px",
                                fontWeight: 600,
                                color: props.textColor,
                            }}
                        >
                            Gráfico de Linhas
                        </h2>
                        <div>
                            <LineChart color="#4c4c4c"/>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={10}>
                    <Card style={{ backgroundColor: props.bgColor, border: "none" }}>
                        <h2
                            style={{
                                margin: "20px 10px",
                                fontWeight: 600,
                                color: props.textColor,
                            }}
                        >
                            Gráfico de Pizza
                        </h2>
                        <PieChart color="#4c4c4c"/>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12}>
                    <Card style={{ backgroundColor: props.bgColor, border: "none" }}>
                        <h2
                            style={{
                                margin: "20px 10px",
                                fontWeight: 600,
                                color: props.textColor,
                            }}
                        >
                            Gráfico de Barras
                        </h2>
                        <BarChart color="#4c4c4c" />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12}>
                    <Card style={{ backgroundColor: props.bgColor, border: "none" }}>
                        <h2
                            style={{
                                margin: "20px 10px",
                                fontWeight: 600,
                                color: props.textColor,
                            }}
                        >
                            Gráfico Donut
                        </h2>
                        <DonutChart color="#4c4c4c" />
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Charts;
