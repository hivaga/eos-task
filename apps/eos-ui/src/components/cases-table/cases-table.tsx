/* eslint-disable-next-line */
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Case} from "../../types/DataTypes";


export function CasesTable({cases}: { cases: Case[] }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align={"justify"}>Пакет</TableCell>
            <TableCell align={"justify"}>Длъжник</TableCell>
            <TableCell align={"justify"}>Тотална сума</TableCell>
            <TableCell align={"justify"}>Дължима сума</TableCell>
            <TableCell align={"justify"}>Дата</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cases.map((row) => (
            <TableRow key={row.workUnitId}>
              <TableCell>{row.workUnitId}</TableCell>
              <TableCell>{row.package}</TableCell>
              <TableCell>{row.debtor}</TableCell>
              <TableCell >{row.boughtAmount.amount} {row.boughtAmount.currency}</TableCell>
              <TableCell >{row.paidAmount.amount} {row.paidAmount.currency}</TableCell>
              <TableCell>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CasesTable;
