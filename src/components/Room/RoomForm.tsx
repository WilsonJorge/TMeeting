import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';

const onChange = (value: number) => {
    console.log('changed', value);
  };

const App: React.FC = () => (
  <Form
    name="wrap"
    labelCol={{ flex: '110px' }}
    labelAlign="left"
    labelWrap
    wrapperCol={{ flex: 1 }}
    colon={false}
    style={{ maxWidth: 600 }}
  >
    <Form.Item label="Nome da sala" name="name" rules={[{ required: true }]}>
      <Input />
    </Form.Item>

    <Form.Item label="Capacidade da Sala" name="capacity" rules={[{ required: true }]}>
        <InputNumber min={1} max={10} defaultValue={3} onChange={onchange} style={{ width: '100%' }} />
    </Form.Item>


    <Form.Item label=" ">
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default App;