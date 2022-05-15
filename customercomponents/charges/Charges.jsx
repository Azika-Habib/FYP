import "./charges.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Charge = () => {
  const rows = [
    {
      id: 1,
      vehicle: "Alto",
      number : "MZ-1345",
      problem: "Oil change",
      status: "Approved",
      cost: "500",
      slot: "9:30AM 3/12/2022 ",
    },

   
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell"><b>ID</b></TableCell>
            <TableCell className="tableCell"><b>Vehicle-Name</b></TableCell>
            <TableCell className="tableCell"><b>Vehical-Number</b></TableCell>
            <TableCell className="tableCell"><b>Problem Description</b></TableCell>
            <TableCell className="tableCell"><b>Status</b></TableCell>
            <TableCell className="tableCell"><b>Cost</b></TableCell>
            <TableCell className="tableCell"><b>Time Slot</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              {/* <TableCell className="tableCell">
                 <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div> 
              </TableCell> */}
              <TableCell className="tableCell">{row.vehicle}</TableCell>
              <TableCell className="tableCell">{row.number}</TableCell>
              <TableCell className="tableCell">{row.problem}</TableCell>
             
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">{row.cost}</TableCell>
              <TableCell className="tableCell">{row.slot}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Charge;