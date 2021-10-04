import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";

import { useDispatch, useSelector } from "react-redux";
import { Button, IconButton, makeStyles } from "@material-ui/core";
import { history } from "Routes";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import {
  layDanhSachNguoiDungAction,
  xoaNguoiDungAction,
} from "store/actions/user";
import { NavLink } from "react-router-dom";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import EventIcon from "@material-ui/icons/Event";
import SearchField from "../Films/SearchField";
/***************************Edit toolbar************************ */

function EditToolBar(props) {
  // const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const handleSearchTermChange = (newFilter) => {
    // console.log(newFilter);
    // setFilter(newFilter.searchTerm);
    dispatch(layDanhSachNguoiDungAction(newFilter.searchTerm));
  };
  return (
    <GridToolbarContainer
      style={{ backgroundColor: "#3f51b5", padding: "10px 10px" }}
    >
      <Button
        variant="contained"
        color="secondary"
        startIcon={<PersonAddIcon />}
        onClick={() => history.push("/admin/user/add-newUser")}
      >
        Thêm Tài Khoản
      </Button>
      <SearchField
        onSubmit={handleSearchTermChange}
        nameSearch="Tên Tài Khoản"
      />
    </GridToolbarContainer>
  );
}
/***************************Edit toolbar************************ */
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

  const dispatch = useDispatch();
  const classes = useRowMenuStyles();
  return (
    <div className={classes.root}>
      <IconButton
        color="primary"
        className={classes.textPrimary}
        size="small"
        aria-label="edit"
        component={NavLink}
        to={`/admin/user/edit/${id}`}
      >
        <EditIcon fontSize="small" />
      </IconButton>
      <IconButton
        color="secondary"
        size="small"
        aria-label="delete"
        onClick={() => {
          if (window.confirm("Bạn Muốn Xóa Người Dùng?")) {
            dispatch(xoaNguoiDungAction(id));
          }
        }}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  );
}
/***************************column************************ */

const columns = [
  {
    field: "taiKhoan",
    headerName: "Tài khoản",
    width: 120,
    headerAlign: "center",
  },
  { field: "matKhau", headerName: "Mật Khẩu", width: 200, hide: true },
  { field: "email", headerName: "Email", hide: true },
  {
    field: "soDt",
    width: 200,
    headerName: "Số Điện Thoại",
  },
  {
    field: "maNhom",
    headerName: "Mã Nhóm",
    headerAlign: "center",
    width: 150,
    hide: true,
  },
  {
    field: "maLoaiNguoiDung",
    headerName: "Người Dùng",
    width: 150,
    headerAlign: "center",
  },
  { field: "hoTen", headerName: "họ Tên", width: 150 },
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

/***************************main Componet************************ */
function Users() {
  const [page, setPage] = useState(0);

  const { userList } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachNguoiDungAction());
  }, []);

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <DataGrid
        rows={userList}
        columns={columns}
        pagination
        pageSize={10}
        rowsPerPageOptions={[10]}
        rowCount={userList.length}
        getRowId={(row) => row.taiKhoan}
        onPageChange={(newPage) => setPage(newPage)}
        components={{
          Toolbar: EditToolBar,
        }}
      />
    </div>
  );
}

export default Users;
