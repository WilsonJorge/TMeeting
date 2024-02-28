import React from 'react';
import { Space, Form,Row, Col} from 'antd';
import DateComponent from '@/components/input/DateComponent'
import SelectComponent from '@/components/input/SelectComponent'
import InputComponent from '@/components/input/InputComponent'
import TimeComponent from '@/components/input/TimeComponent'


const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>

<div className='formulario'>
  <Row gutter={16}>
    <Col span={12}>
      <Form.Item label="Selecione a Sala" name="room" rules={[{ required: true }]}>
        <SelectComponent/>
      </Form.Item>
    </Col>
    <Col span={12}>
      <Form.Item label="Nome do Responsável pela Reserva" name="reservante" rules={[{ required: true }]}>
        <InputComponent/>
      </Form.Item>
    </Col>
  </Row>

  <Row gutter={16}>
    <Col span={12}>
      <Form.Item label="Data da Reserva" name="reservante" rules={[{ required: true }]}>
        <DateComponent/>
      </Form.Item>
    </Col>
    <Col span={12}>
      <Form.Item label="Hora que Pretende Ocupar a sala" name="reservante" rules={[{ required: true }]}>
        <TimeComponent/>
      </Form.Item>
    </Col>
  </Row>
</div>
    
    
  </Space>
);

export default App;
