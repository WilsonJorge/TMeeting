import React from 'react';
import { Space, Form,Row, Col} from 'antd';
import InputComponent from '@/components/input/InputComponent'



const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>

<div className='formulario'>
  <Row gutter={16}>
    <Col span={12}>
      <Form.Item label="Nome da sala" name="name" rules={[{ required: true }]}>
        <InputComponent/>
      </Form.Item>
    </Col>

    <Col span={12}>
      <Form.Item label="Capacidade" name="capacity" rules={[{ required: true }]}>
        <InputComponent/>
      </Form.Item>
    </Col>
  </Row>
</div>
    
    
  </Space>
);

export default App;
