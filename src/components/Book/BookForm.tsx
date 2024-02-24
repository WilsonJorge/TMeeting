import React from 'react';
import { Select, Space, Form,Input } from 'antd';
import DateComponent from '@/components/input/DateComponent'
import SelectComponent from '@/components/input/SelectComponent'
import InputComponent from '@/components/input/InputComponent'
import TimeComponent from '@/components/input/TimeComponent'


const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Form.Item label="Selecione a Sala" name="room" rules={[{ required: true }]}>
      <SelectComponent/>
    </Form.Item>

    <Form.Item label="Nome do Responsável pela Reserva" name="reservante" rules={[{ required: true }]}>
      <InputComponent/>
    </Form.Item>

    <Form.Item label="Data da Reserva" name="reservante" rules={[{ required: true }]}>
            <DateComponent/>
    </Form.Item>

    <Form.Item label="Hora que Pretende Ocupar a sala" name="reservante" rules={[{ required: true }]}>
            <TimeComponent/>
    </Form.Item>
    
  </Space>
);

export default App;
