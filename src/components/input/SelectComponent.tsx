import React from 'react';
import { Select, Space } from 'antd';

const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  
  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  // Filter `option.label` match the user type `input`
const filterOption = (input: string, option?: { label: string; value: string }) =>
(option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const App: React.FC = () => (
  
    <Select
        style={{ width: '100%' }}
        showSearch
        placeholder="Selecione uma sala"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={[
          { value: 'sala1', label: 'Sala 1' },
          { value: 'sala2', label: 'Sala 2' },
          { value: 'sala3', label: 'Sala 3' },
        ]}
      />
  
);

export default App;