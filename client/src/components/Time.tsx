import { TimePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';


dayjs.extend(customParseFormat);

const onChange = (time: Dayjs, timeString: string) => {
  console.log( timeString);
};

const Time = () => {
    return ( 
        <TimePicker onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} format="HH:mm" />
     );
}
 
export default Time;