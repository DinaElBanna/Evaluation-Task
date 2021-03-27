import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditIcon from '@material-ui/icons/Edit';
import image from '../../static/images/image2.png'
import Avatar from '@material-ui/core/Avatar';
import './Table.scss'
import EditDialog from '../EditDialog/EditDialog'
import TablePagination from '@material-ui/core/TablePagination';


const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});


function Row({ record, onDelete }) {
    var row = record;
    const [open, setOpen] = React.useState(false);
    const [updatedRecord, setUpdatedRecord] = React.useState({});

    const classes = useRowStyles();

    const updateRecord = (newRecord) => {
        setUpdatedRecord(newRecord)
        row = newRecord
    }


    return (
        <React.Fragment>
            <TableRow className={classes.root} >
                <TableCell style={{ width: '7%' }}>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>
                    {row.date}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>

                        <Table size="small" aria-label="purchases">
                            <TableBody>
                                {row.param.map((param) => (
                                    <TableRow key={param.id}>
                                        <TableCell align="center" >
                                            <Avatar alt="car" src={image} />
                                            {param.name}&nbsp;<br />
                                               <small className={param.state == 'Active'?"active":"" || param.state == 'In shop'?"inShop":""}> ({param.state}) </small>
                                            </TableCell>
                                        <TableCell align="" >{param.time}</TableCell>
                                        <TableCell align="" >{param.totalDistance}</TableCell>
                                        <TableCell align="right">{param.volume}</TableCell>
                                        <TableCell align="right">{param.cost}<br /><small>{param.costPerItr}</small></TableCell>
                                        <TableCell  >
                                            <IconButton aria-label="expand row" size="small" >
                                                <EditDialog param={param} upadateRecord={newRecord => updateRecord(newRecord)}></EditDialog>

                                            </IconButton>
                                            <IconButton aria-label="expand row" size="small" onClick={() => onDelete(param.id)} >
                                                <DeleteOutlineOutlinedIcon style={{ color: 'red' }} />
                                            </IconButton>

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        id: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        param: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                time: PropTypes.string.isRequired,
                totalDistance: PropTypes.number.isRequired,
                cost: PropTypes.string.isRequired,
                volume: PropTypes.number.isRequired,
            }),
        ).isRequired,
    })
};





class DataTable extends React.Component {

    constructor() {
        super();
        this.state = {
            page:0,
            rowsPerPage:10,
            records: [
                {
                    id: 1,
                    date: "Mon,Jun 10,2019",
                    param: [
                        {
                            id: 10,
                            name: "[001]Toyota Avanza",
                            image: "image4.png",
                            state: "Active",
                            time: "10:23 AM",
                            totalDistance: 17.845,
                            volume: 123.35,
                            cost: "Rp 625.000",
                            costPerItr: "Rp 9,879/Itr"
                        },
                        {
                            id: 11,
                            name: "[005]Daihatsu Xenia",
                            image: "image2.png",
                            state: "In shop",
                            time: "09:34 PM",
                            totalDistance: 20.201,
                            volume: 170.30,
                            cost: "Rp 950.000",
                            costPerItr: "Rp 10,200/Itr"
                        }
                    ]
                },
                {
                    id: 2,
                    date: "Mon,Jun 09,2019",
                    param: [
                        {
                            id: 13,
                            name: "[001]Toyota Avanza",
                            image: "image4.png",
                            state: "Active",
                            time: "10:23 AM",
                            totalDistance: 17.845,
                            volume: 123.35,
                            cost: "Rp 625.000",
                            costPerItr: "Rp 9,879/Itr"
                        },
                        {

                            id: 14,
                            name: "[005]Daihatsu Xenia",
                            image: "image2.png",
                            state: "In shop",
                            time: "09:34 PM",
                            totalDistance: 20.201,
                            volume: 170.30,
                            cost: "Rp 950.000",
                            costPerItr: "Rp 10,200/Itr"
                        },
                        {
                            id: 15,
                            name: "[001]Toyota Avanza",
                            image: "image4.png",
                            state: "Active",
                            time: "10:23 AM",
                            totalDistance: 17.845,
                            volume: 123.35,
                            cost: "Rp 625.000",
                            costPerItr: "Rp 9,879/Itr"
                        },
                    ]
                },
                {
                    id: 3,
                    date: "Mon,Jun 8,2019",
                    param: [
                        {
                            id: 16,
                            name: "[001]Toyota Avanza",
                            image: "image4.png",
                            state: "Active",
                            time: "10:23 AM",
                            totalDistance: 17.845,
                            volume: 123.35,
                            cost: "Rp 625.000",
                            costPerItr: "Rp 9,879/Itr"
                        }
                    ]
                },
            ]
        };
    }


    onDelete = (id) => {
        const tempRecords = this.state.records
        tempRecords.forEach(function (record) {
            record.param = record.param.filter(s => s.id !== id);
        })
        this.setState({
            records: tempRecords,
        });   

    }

    handleChangeRowsPerPage = (event) => {
        this.setState({
            RowsPerPage:+event.target.value,
            page: 0
        })
        
       
      };
    
  
     handleChangePage = (event, newPage) => {
        this.setState({
            page:parseInt(newPage)
        })
    };

    renderHeader = () => {
        let headerElement = ['', 'Vehicle', 'Time', 'Total (km)', 'Volume', 'Cost', 'Actions']

        return headerElement.map((key, index) => {
            return <TableCell key={index}>{key.toUpperCase()}</TableCell>
        })
    }

    renderBody = () => {

        return this.state.records && this.state.records.map((row) => (
            <Row key={row.id} record={row} onDelete={this.onDelete} />
        ))

    }
    render() {
        return (

            <>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={parseInt(this.state.records.length)}
                    rowsPerPage= {this.state.rowsPerPage}
                    page={this.state.page}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
                <TableContainer component={Paper}>
                    <Table className="Custom-Table" aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                {this.renderHeader()}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.renderBody()}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        );
    }

}
export default DataTable