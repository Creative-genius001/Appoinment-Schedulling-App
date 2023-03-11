import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
var moment = require('moment');

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(dateString);
  let formattedDate: string = moment.format(date.$d, 'YYYY-MM-DD');
  console.log(formattedDate);

};



const Calendar = () => {
    return ( 
        <div className=" ">
           <DatePicker className='calendar' onChange={onChange} defaultValue={dayjs(new Date())} format='YYYY-MM-DD'/>
        </div>
     );
}
 
export default Calendar;