import { DateTimePickerComponent} from '@syncfusion/ej2-react-calendars';


const Calendar = () => {
    return ( 
        <div className=" ">
           <DateTimePickerComponent id="datetimepicker" placeholder='Pick date and time' /> 
        </div>
     );
}
 
export default Calendar;