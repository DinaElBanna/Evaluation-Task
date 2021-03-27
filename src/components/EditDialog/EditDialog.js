import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import SingleSelect from '../SingleSelect/SingleSelect'
import DatePicker from '../DatePicker/DatePicker'
import InputAdornment from '@material-ui/core/InputAdornment';


export default function FormDialog({param , upadateRecord}) {
  const [open, setOpen] = React.useState(false);

  const [updatedRecord, setUpdatedRecord] = React.useState(param);




  const vehicles = [{
    id: 1,
    value: '[001]Toyota Avanza'
  },
  {
    id: 2,
    value: '[005]Daihatsu Xenia'
  },
  ]


  
  const fuelTypes = [{
    id: 1,
    value: 'Type 1'
  },
  {
    id: 2,
    value: 'Type 2'
  },
  ]
  const handleSubmit =() => {
        upadateRecord(updatedRecord)
        setOpen(false);
  }

  const updateOdometer = (event) =>{
    if (parseInt(event.target.value)<0){
      alert("Can't enter a negative number")
    }
    let newParam = updatedRecord
    newParam.totalDistance = event.target.value
    setUpdatedRecord(newParam)
   

  }

  const updateVolume =(event) =>{
    let newParam = updatedRecord
    newParam.volume = event.target.value
    setUpdatedRecord(newParam)
    
  }

  const updateVehicleName =(name)=>{
    let newParam = updatedRecord
    newParam.name = name
    setUpdatedRecord(newParam)
    console.log("name "+ JSON.stringify(updatedRecord))
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <EditIcon style={{ color: 'orange' }} />
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Fuel Entry</DialogTitle>
        <DialogContent>
        <SingleSelect items={vehicles} label='Vehicle'  defaultValue={param.name} updateValue={name =>updateVehicleName(name)}></SingleSelect>
          <TextField
            fullWidth = "true"
            margin="dense"
            id="odometer"
            label="Odometer"
            defaultValue = {updatedRecord.totalDistance}
            onChange={updateOdometer}
            type="number"
            required
            InputProps={{
              endAdornment: <InputAdornment position="start">Kms</InputAdornment>,
            }}

          />
          <TextField
            fullWidth = "true"
            id="volume"
            label="Volume"
            required
            onChange={updateVolume}
            type="number"
            defaultValue = {param.volume}
            InputProps={{
              endAdornment: <InputAdornment position="start">Ltrs</InputAdornment>,
            }}

          />
         <SingleSelect items={fuelTypes} label='Fuel Type (Optional)' defaultValue={fuelTypes[0].value}></SingleSelect>
         <DatePicker></DatePicker>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
