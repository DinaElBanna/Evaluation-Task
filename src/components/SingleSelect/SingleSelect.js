import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 450,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const SingleSelecct = ({ items, label , defaultValue, updateValue }) => {
    const classes = useStyles();
    const [selected, setSelected] = React.useState('');
    
    const handleChange = (event) => {
        setSelected(event.target.value);
        updateValue(event.target.value)
    };



    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={defaultValue}
                    onChange={handleChange}
                >   
                    {items.map((item) => (
                        <MenuItem key={item.id} value={item.value} >{item.value}</MenuItem>
                    ))}

                </Select>
            </FormControl>

        </div>
    );
}
export default SingleSelecct
