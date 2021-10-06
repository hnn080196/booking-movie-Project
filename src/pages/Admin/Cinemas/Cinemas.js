import { Avatar, IconButton, makeStyles } from "@material-ui/core";
import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoCinemaListAction } from "store/actions/cinemaAction";

import EditIcon from "@material-ui/icons/Edit";
import { NavLink } from "react-router-dom";
import SearchField from "../Films/SearchField";
function renderImage(params) {
  return (
    <Avatar
      alt={params.value}
      src={params.value}
      variant="square"
      // style={{ width: "60px", height: "60px" }}
    />
  );
}
const useRowMenuStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    alignItems: "center",
    gap: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  textPrimary: {
    color: theme.palette.text.primary,
  },
}));
function RowMenuCell(props) {
  const { id } = props;
  const classes = useRowMenuStyles();
  return (
    <div className={classes.root}>
      <IconButton
        color="primary"
        className={classes.textPrimary}
        size="small"
        aria-label="edit"
        component={NavLink}
        to={`/admin/cinema/theater/${id}`}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    </div>
  );
}
function EditToolBar(props) {
  // const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const handleSearchTermChange = (newFilter) => {
    dispatch(getInfoCinemaListAction(newFilter.searchTerm));
  };
  return (
    <GridToolbarContainer
      style={{ backgroundColor: "#3f51b5", padding: "10px 10px" }}
    >
      <SearchField
        onSubmit={handleSearchTermChange}
        nameSearch="Mã Hệ Thống Rạp"
      />
    </GridToolbarContainer>
  );
}
const columns = [
  {
    field: "maHeThongRap",
    headerName: "Mã Hệ Thống Rạp",
    width: 200,
    headerAlign: "center",
  },
  { field: "tenHeThongRap", headerName: "Tên Hệ Thống Rạp", width: 200 },
  { field: "biDanh", headerName: "Bí danh", width: 200 },
  {
    field: "logo",
    headerName: "Logo",
    renderCell: renderImage,
    headerAlign: "center",
    width: 150,
  },

  {
    field: "actions",
    headerName: "Hành động",
    renderCell: RowMenuCell,
    sortable: false,
    width: 150,
    headerAlign: "center",
    filterable: false,
    align: "center",
    disableColumnMenu: true,
    disableReorder: true,
  },
];
function Cinemas() {
  const [page, setPage] = useState(0);

  const { infoCinemaList } = useSelector((state) => state.cinemas);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfoCinemaListAction());
  }, []);
  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <DataGrid
        rows={infoCinemaList}
        columns={columns}
        pagination
        pageSize={10}
        rowsPerPageOptions={[10]}
        rowCount={infoCinemaList.length}
        getRowId={(row) => row.maHeThongRap}
        onPageChange={(newPage) => setPage(newPage)}
        components={{
          Toolbar: EditToolBar,
        }}
      />
    </div>
  );
}

export default Cinemas;
