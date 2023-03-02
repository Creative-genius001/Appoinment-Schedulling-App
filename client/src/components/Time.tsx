import { TimePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import styles from '@/styles/Time.module.css'


dayjs.extend(customParseFormat);

const onChange = (time: Dayjs, timeString: string) => {
  console.log( timeString);
};

const Time = () => {
    return ( 
        <TimePicker className={styles.time} onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} format="HH:mm" />
     );
}
 
export default Time;