import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(dateString);
};



const Calendar = () => {
    return ( 
        <div className=" ">
           <DatePicker onChange={onChange} defaultValue={dayjs(new Date())} format='YYYY-MM-DD'/>
        </div>
     );
}
 
export default Calendar;