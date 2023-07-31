import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

/* eslint-disable-next-line */
export interface CreditorInfoTableProps {
  "workUnitId": string,
  "entityType": string,
  "status": string,
  "key": string,
  "date": string,
  "type": string,
  "court": string,
  "bailiffName": string
}

export function CreditorInfoTable(data: { props: CreditorInfoTableProps }) {

  const props = data.props;
  console.log('CreditorInfoTable:', data);

  return (
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="justify">Дата</TableCell>
              <TableCell align="justify">Съд</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{props.workUnitId}</TableCell>
              <TableCell>{props.date}</TableCell>
              <TableCell>{props.court}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default CreditorInfoTable;
