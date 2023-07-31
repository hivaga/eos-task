import styles from './address-table.module.scss';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Address} from "../../types/DataTypes";

export interface AddressProps {
  addresses: Address[]
}

export function AddressTable({addresses}: AddressProps) {
  return (
    <div className={styles.container}>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align={"justify"}>Град</TableCell>
              <TableCell align={"justify"}>Адрес</TableCell>
              <TableCell align={"justify"}>Добавен</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {addresses.map((row) => (
              <TableRow key={`${row.id} ${row.address} ${row.dateAdded}`}>
                <TableCell>{row.settlementName} {row.zipCode}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.dateAdded}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AddressTable;
