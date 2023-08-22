import { useState } from "react";

import { 
  useDispatch, 
  useSelector 
} from "react-redux";
import { selectProducts } from "../../store/products/products.selector"
import { setProducts } from "../../store/products/products.action";

import "./product-list-dashboard.styles.css"

import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';

import { 
  API_URL,
  deleteProduct 
} from "../../utils/request";

const ProductListDashboard = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const { products } = useSelector(selectProducts);

  const dispatch = useDispatch();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onDeleteProductHandler = async (productId) => {
    const deleteButtonResponse = await deleteProduct(productId);
    if (deleteButtonResponse) {
      const newProductList = products.filter(product => product.id !== productId);
      dispatch(setProducts(newProductList));
    }
  }

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className="header-row">
                    <TableCell sx={{ padding: 1 }} align="center">Image</TableCell>
                    <TableCell sx={{ padding: 1 }} align="center">Title</TableCell>
                    <TableCell sx={{ padding: 1 }} align="center">Description</TableCell>
                    {/* <TableCell sx={{ padding: 1 }} align="center">Carbs&nbsp;(g)</TableCell> */}
                    <TableCell sx={{ padding: 1 }} align="center">Action</TableCell>
                </TableRow>
          </TableHead>
          <TableBody>
            {products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => {
                return (
                  <TableRow
                      hover
                      role="checkbox"
                      key={product.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                          <TableCell sx={{ padding: 1 }} align="center" component="th" scope="row">
                              <img className="product-image-dashboard" src={API_URL + product.attributes.image1.data[0].attributes.formats.small.url} alt="logo"/>
                          </TableCell>
                          <TableCell sx={{ padding: 1 }} align="center">{product.attributes.title}</TableCell>
                          <TableCell sx={{ padding: 1 }} align="center">{product.attributes.description}</TableCell>
                          <TableCell sx={{ padding: 1 }} align="center">
                            <IconButton aria-label="delete" size="large" onClick={() => onDeleteProductHandler(product.id)}>
                              <DeleteIcon fontSize="inherit" className="delete-icon" />
                            </IconButton>
                          </TableCell>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[2, 4, 10]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default ProductListDashboard