import { Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { data, DataType } from '@/data/appointmentData'
                                                                                                                                                                                                                                                                                                                                       
const columns: ColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Time',
    key: 'time',
    dataIndex: 'time',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (status) => (
        <Tag color={status == true ? "green" : "volcano"}>
            {status ? "Active" : "Pending"}
        </Tag>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    render: (action) => (
        <Button type ="link">
            cancel
        </Button>
    ),
  },
];


const Appointment = () => {
    return ( 
    <>
        <div className='main mt-[70px] bg-[#ffffff] py-12 px-8 h-auto w-[83vw]'>
            <h2 className='text-3xl font-bold mb-8'>Appointments</h2>
            <div className='table-container'>
              <Table columns={columns} dataSource={data} />
            </div>  
        </div>      
    </> 
        );
}
 
export default Appointment;