'use client';

import { DateRange, Range, RangeKeyDict } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface DatePickerProps {
    value: Range,
    onChange: (value: RangeKeyDict) => void;
    selctedDates?: Date[];
}

const DatePicker: React.FC<DatePickerProps> = ({
    value,
    onChange,
    selctedDates
}) => {
    return (
        <DateRange
            className='w-auto rounded-xl mb-4'
            rangeColors={['#262626']}
            ranges={[value]}
            date={new Date()}
            onChange={onChange}
            direction='vertical'
            showDateDisplay={false}
            moveRangeOnFirstSelection={false}
            minDate={new Date()}
            disabledDates={selctedDates}
        />
    )
}

export default DatePicker;