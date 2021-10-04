import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import moment from "moment";
const useStyles = makeStyles({
  table: {
    // width: 300,
    // color: "#000",
  },
  tableHead: {
    "& .MuiTableCell-head": {
      color: "#000",
      //   fontSize: "rem",
      fontWeight: "700",
    },
  },
  tableBody: {
    "& .MuiTableCell-body": {
      color: "#000",
      //   fontSize: "rem",
      fontWeight: "500",
    },
  },
});
const TicketList = (props) => {
  const classes = useStyles();
  const { danhSachGhe } = props;

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Fragment>
      <Button
        variant="outlined"
        color="textSecondary"
        onClick={handleClickOpen}
        style={{ backgroundColor: "#2196f3" }}
      >
        Detail
      </Button>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="danh-sach-ve"
        color="textPrimary"
        classes={{ paper: classes.dialogPaper }}
      >
        <DialogTitle
          id="danh-sach-ve"
          style={{ color: "#000", fontWeight: "700" }}
        >
          Danh Sách Vé
        </DialogTitle>
        <DialogContent>
          <TableContainer>
            <Table aria-label="profile">
              <TableHead classes={{ root: classes.tableHead }}>
                <TableRow hover={true}>
                  <TableCell>Hệ Thống Rạp</TableCell>
                  <TableCell align="center">Cụm Rạp</TableCell>
                  <TableCell align="center">Mã Rạp</TableCell>
                  <TableCell align="center">Mã Ghế</TableCell>
                  <TableCell align="center">Ghế</TableCell>
                </TableRow>
              </TableHead>
              <TableBody classes={{ root: classes.tableBody }}>
                {danhSachGhe?.map((veDaDat, index) => {
                  return (
                    <TableRow key={`${veDaDat.maGhe}_${index}`}>
                      <TableCell component="th" scope="row">
                        {veDaDat.tenHeThongRap}
                      </TableCell>
                      <TableCell align="center">{veDaDat.tenCumRap}</TableCell>
                      <TableCell align="center">{veDaDat.maRap}</TableCell>
                      <TableCell align="center">{veDaDat.maGhe}</TableCell>
                      <TableCell align="center">{veDaDat.tenGhe}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="textPrimary"
            style={{ backgroundColor: "#f57c00" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

TicketList.propTypes = { danhSachGhe: PropTypes.any.isRequired };

export default TicketList;
