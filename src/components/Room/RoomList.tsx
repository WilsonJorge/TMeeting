
import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { GetRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';

type InputRef = GetRef<typeof Input>;

interface DataType {
    key: string;
    name: string;
    capacity: number;
    status: string
}
type DataIndex = keyof DataType;
const data: DataType[] = [
  {
    key: '1',
    name: 'Sala de Reuniao A',
    capacity: 30,
    status:  'INDISPONIVEL',
  },
  {
    key: '2',
    name: 'Sala de Reuniao B',
    capacity: 50,
    status:  'DISPONIVEL',
  },
  {
    key: '3',
    name: 'Sala de Reuniao C',
    capacity: 40,
    status:  'DISPONIVEL',
  },
  {
    key: '4',
    name: 'Sala de Reuniao D',
    capacity: 30,
    status:  'INDISPONIVEL',
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
      title: 'Sala',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Capacidade',
      dataIndex: 'capacity',
      key: 'capacity',
      width: '20%',
      ...getColumnSearchProps('capacity'),
    },
    
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        ...getColumnSearchProps('status'),
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