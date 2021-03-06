import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import './DatePicker.scss'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />


      </Grid>
    </MuiPickersUtilsProvider>
  );
}