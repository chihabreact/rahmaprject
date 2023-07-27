import "./product-list-dashboard.styles.css"

import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import logo from "../../assets/logo.jpg"
import photo from "../../assets/landcruiser.jpg"

function createData(
    name,
    calories,
    fat,
    carbs,
    protein
  ) {
    return { name, calories, fat, carbs, protein };
  }

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const ProductListDashboard = () => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 250 }} aria-label="simple table">
            <TableHead>
            <TableRow className="header-row">
                <TableCell sx={{ padding: 1 }} align="center">Image</TableCell>
                <TableCell sx={{ padding: 1 }} align="center">Name</TableCell>
                <TableCell sx={{ padding: 1 }} align="center">Price</TableCell>
                <TableCell sx={{ padding: 1 }} align="center">Carbs&nbsp;(g)</TableCell>
                <TableCell sx={{ padding: 1 }} align="center">Action</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell sx={{ padding: 1 }} align="center" component="th" scope="row">
                    <img className="product-image" src={photo} alt="logo"/>
                </TableCell>
                <TableCell sx={{ padding: 1 }} align="center">{row.calories}</TableCell>
                <TableCell sx={{ padding: 1 }} align="center">{row.fat}</TableCell>
                <TableCell sx={{ padding: 1 }} align="center">{row.carbs}</TableCell>
                <TableCell sx={{ padding: 1 }} align="center">
                    <IconButton aria-label="delete" size="large">
                        <DeleteIcon fontSize="inherit" className="delete-icon" />
                    </IconButton>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
  )
}

export default ProductListDashboard