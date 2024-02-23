// components/dashboard/DashboardCard.js
import React from 'react';
import { Card, Row, Col, Button, Typography, Space } from 'antd';
import {
  LineChartOutlined,
  ShoppingCartOutlined,
  RiseOutlined,
  DollarCircleOutlined,
  InfoCircleOutlined,
  FallOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

const DashboardCard = ({ title, value, mainIcon, statsIcon, color, isGrowing }) => {
  return (
    <Col xs={24} sm={12} md={12} lg={6}>
      <Card
        style={{
          backgroundColor: '#fff', // Altere a cor de fundo conforme necessário
          borderRadius: '8px',
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Row style={{ height: '100%' }}>
          <Col span={16}>
            <Space direction="vertical">
              <div
                style={{
                  backgroundColor: color,
                  borderRadius: '4px',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {React.cloneElement(mainIcon, {
                  style: { fontSize: '24px', color: '#fff' },
                })}
              </div>
              <Text style={{ fontSize: '16px' }}>{title}</Text>
              <Text strong style={{ fontSize: '20px' }}>{value}</Text>
            </Space>
          </Col>
          <Col span={8} flex="auto">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                padding: '8px',
                height: '100%',
              }}
            >
              <Button type="text" icon={<InfoCircleOutlined style={{ fontSize: '20px' }} />} />
              {isGrowing ? (
                React.cloneElement(statsIcon, {
                  style: { fontSize: '24px', color: '#52c41a' },
                })
              ) : (
                React.cloneElement(statsIcon, {
                  style: { fontSize: '24px', color: '#ff0000' },
                })
              )}
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default DashboardCard;



// import React from "react";
// import { Card, Row, Col, Button, Typography, Space } from "antd";
// import {
//     LineChartOutlined,
//     ShoppingCartOutlined,
//     RiseOutlined,
//     DollarCircleOutlined,
//     InfoCircleOutlined,
//     FallOutlined,
// } from "@ant-design/icons";

// const { Text } = Typography;

// interface CardProps {
//     bgColor: string;
//     textColor: string;
//     theme: string;
// }

// const Cards: React.FC<CardProps> = (props: CardProps) => {
//     return (
//         <div>
//             <Row gutter={[8, 8]}>
//                 {renderTopCard(
//                     props.bgColor,
//                     props.textColor,
//                     props.theme,
//                     "Transacções",
//                     "$1,234,567.89",
//                     <DollarCircleOutlined />,
//                     <RiseOutlined />,
//                     "#1890ff",
//                     true,
//                 )}
//                 {renderTopCard(
//                     props.bgColor,
//                     props.textColor,
//                     props.theme,
//                     "Orçamento",
//                     "$5,678",
//                     <LineChartOutlined style={{ fontSize: "24px", color: "#52c41a" }} />,
//                     <FallOutlined />,
//                     "#52c41a",
//                     false,
//                 )}
//                 {renderTopCard(
//                     props.bgColor,
//                     props.textColor,
//                     props.theme,
//                     "Impostos",
//                     "$987",
//                     <ShoppingCartOutlined />,
//                     <RiseOutlined />,
//                     "#eb2f96",
//                     true,
//                 )}
//                 {renderTopCard(
//                     props.bgColor,
//                     props.textColor,
//                     props.theme,
//                     "Despesas",
//                     "$2,323",
//                     <InfoCircleOutlined />,
//                     <RiseOutlined />,
//                     "#fa8c16",
//                     true,
//                 )}
//             </Row>
//         </div>
//     );
// };

// const renderTopCard = (
//     bgColor: string,
//     textColor: string,
//     theme: string,
//     title: string,
//     value: string,
//     mainIcon: React.ReactNode,
//     statsIcon: React.ReactNode,
//     color: string,
//     isGrowing: boolean,
// ) => (
//     <Col xs={24} sm={12} md={12} lg={6} key={title}>
//         <Card
//             style={{
//                 backgroundColor: bgColor,
//                 borderRadius: "8px",
//                 border: "none",
//                 display: "flex",
//                 flexDirection: "column",
//             }}
//         >
//             <Row style={{ height: "100%" }}>
//                 <Col span={16}>
//                     <Space direction="vertical">
//                         <div
//                             style={{
//                                 backgroundColor: color,
//                                 borderRadius: "4px",

//                                 width: "32px",
//                                 height: "32px",
//                                 display: "flex",
//                                 alignItems: "center",
//                                 justifyContent: "center",
//                             }}
//                         >
//                             {React.cloneElement(mainIcon as React.ReactElement, {
//                                 style: { fontSize: "24px", color: "#fff" },
//                             })}
//                         </div>
//                         <Text
//                             style={{
//                                 fontSize: "16px",
//                                 opacity: theme === "light" ? 0.8 : 0.5,
//                                 color: theme === "light" ? "#6c6c6c" : "#e1e3e1",
//                             }}
//                         >
//                             {title}
//                         </Text>
//                         <Text strong style={{ fontSize: "20px", color: textColor }}>
//                             {value}
//                         </Text>
//                     </Space>
//                 </Col>
//                 <Col span={8} flex="auto">
//                     <div
//                         style={{
//                             display: "flex",
//                             flexDirection: "column", // Align icons horizontally
//                             justifyContent: "space-between", // Add space between icons
//                             alignItems: "flex-end", // Align icons to the bottom
//                             padding: "8px", // Decreased padding for a more compact layout
//                             height: "100%",
//                         }}
//                     >
//                         <Button
//                             type="text"
//                             icon={<InfoCircleOutlined style={{ color: textColor, fontSize: "20px" }} />}
//                         />
//                         {isGrowing
//                             ? React.cloneElement(statsIcon as React.ReactElement, {
//                                   style: { fontSize: "24px", color: "#52c41a" },
//                               })
//                             : React.cloneElement(statsIcon as React.ReactElement, {
//                                   style: { fontSize: "24px", color: "#ff0000" },
//                               })}
//                     </div>
//                 </Col>
//             </Row>
//         </Card>
//     </Col>
// );

// export default Cards;
