import { useState, useEffect } from "react";

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

const API_URL = "http://localhost:1337"

const ProductListDashboard = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRequest = await fetch(`${API_URL}/api/products?populate=*`);
        const productsData = await productsRequest.json();
        setProducts(productsData.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProducts();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
                      key={product.attributes.title}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                          <TableCell sx={{ padding: 1 }} align="center" component="th" scope="row">
                              <img className="product-image" src={API_URL + product.attributes.image1.data[0].attributes.formats.small.url} alt="logo"/>
                          </TableCell>
                          <TableCell sx={{ padding: 1 }} align="center">{product.attributes.title}</TableCell>
                          <TableCell sx={{ padding: 1 }} align="center">{product.attributes.description}</TableCell>
                          <TableCell sx={{ padding: 1 }} align="center">
                            <IconButton aria-label="delete" size="large">
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