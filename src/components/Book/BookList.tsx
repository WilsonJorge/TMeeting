
import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { GetRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import { DatePickerType } from 'antd/es/date-picker';
import { TimePickerLocale } from 'antd/es/time-picker';

type InputRef = GetRef<typeof Input>;

interface DataType {
    key: string;
    reservante: string;
    sala: string;
    datah: string
    hora: string;
}
type DataIndex = keyof DataType;
const data: DataType[] = [
  {
    key: '1',
    reservante: 'John Brown',
    sala: 'Sala-A-001',
    datah:  '2024-02-12',
    hora : '04:00:00',
  },
  {
    key: '2',
    reservante: 'John Brown',
    sala: 'Sala-A-001',
    datah:  '2024-02-12',
    hora : '04:00:00',
  },
  {
    key: '3',
    reservante: 'John Brown',
    sala: 'Sala-A-001',
    datah:  '2024-02-12',
    hora : '04:00:00',
  },
  {
    key: '4',
    reservante: 'John Brown',
    sala: 'Sala-A-001',
    datah:  '2024-02-12',
    hora : '04:00:00',
  },
];

const MyTable: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps['confirm'],
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log('Selected Row Keys:', selectedRowKeys);
                console.log('Selected Rows:', selectedRows);
            }
        };
    

  const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Reservante',
      dataIndex: 'reservante',
      key: 'reservante',
      width: '30%',
      ...getColumnSearchProps('reservante'),
    },
    {
      title: 'Sala',
      dataIndex: 'sala',
      key: 'sala',
      width: '20%',
      ...getColumnSearchProps('sala'),
    },
    
    {
        title: 'Data',
        dataIndex: 'datah',
        key: 'datah',
        ...getColumnSearchProps('datah'),
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
      },

      {
        title: 'hora',
        dataIndex: 'hora',
        key: 'hora',
        ...getColumnSearchProps('hora'),
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
      },
  ];

  return <Table columns={columns} dataSource={data}
           rowSelection={rowSelection}
           onChange={(pagination, filters, sorter, extra) => {
                            console.log('Pagination:', pagination);
                            console.log('Filters:', filters);
                            console.log('Sorter:', sorter);
                            console.log('Extra:', extra);
                        }} />;
};

export default MyTable;