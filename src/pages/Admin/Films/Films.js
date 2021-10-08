import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { getMoviesAction, xoaPhimAction } from "store/actions/movie";
import Rating from "@material-ui/lab/Rating";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/styles";
import { Button, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import { history } from "Routes";
import AddIcon from "@material-ui/icons/Add";
import { NavLink } from "react-router-dom";
import SearchField from "./SearchField";
import EventIcon from "@material-ui/icons/Event";
function renderRating(params) {
  return <Rating readOnly value={params.value / 2} />;
}
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
        to={`/admin/film/edit/${id}`}
      >
        <EditIcon fontSize="small" />
      </IconButton>
      <IconButton
        color="secondary"
        size="small"
        aria-label="delete"
        onClick={() => {
          if (window.confirm("Bạn Muốn Xóa Phim?")) {
            dispatch(xoaPhimAction(id));
          }
        }}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
      <IconButton
        color="primary"
        size="small"
        aria-label="add-showtime"
        component={NavLink}
        to={`/admin/film/addShowTimes/${id}`}
      >
        <EventIcon fontSize="small" />
      </IconButton>
    </div>
  );
}
function EditToolBar(props) {
  const dispatch = useDispatch();
  const handleSearchTermChange = (newFilter) => {
    dispatch(getMoviesAction(newFilter.searchTerm));
  };
  return (
    <GridToolbarContainer
      style={{ backgroundColor: "#3f51b5", padding: "10px 10px" }}
    >
      <Button
        variant="contained"
        color="secondary"
        startIcon={<AddIcon />}
        onClick={() => history.push("/admin/film/addnew")}
      >
        Thêm Phim
      </Button>
      <SearchField onSubmit={handleSearchTermChange} nameSearch="Tên Phim" />
    </GridToolbarContainer>
  );
}
const columns = [
  { field: "maPhim", headerName: "Mã Phim", width: 150, headerAlign: "center" },
  { field: "tenPhim", headerName: "Tên Phim", width: 200 },
  { field: "biDanh", headerName: "Bí Danh", hide: true },
  {
    field: "ngayKhoiChieu",
    type: "date",
    width: 200,
    headerName: "Ngày Khởi Chiếu",
  },
  {
    field: "hinhAnh",
    headerName: "Hình Ảnh",
    renderCell: renderImage,
    headerAlign: "center",
    width: 120
  },
  {
    field: "danhGia",
    type: "number",
    headerName: "Đánh Giá",
    width: 150,
    headerAlign: "center",
    renderCell: renderRating,
  },
  { field: "moTa", headerName: "Mô Tả", hide: true },
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

const Films = (props) => {
  const [sortModel, setSortModel] = useState([
    {
      field: "maPhim",
      sort: "asc",
    },
  ]);

  const [page, setPage] = useState(0);
  const { movieList } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesAction());
  }, []);

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <DataGrid
        rows={movieList}
        columns={columns}
        sortModel={sortModel}
        onSortModelChange={(model) => setSortModel(model)}
        getRowId={(row) => row.maPhim}
        rowsPerPageOptions={[10]}
        pageSize={10}
        pagination
        onPageChange={(newPage) => setPage(newPage)}
        components={{
          Toolbar: EditToolBar,
        }}
      />
    </div>
  );
};

export default Films;
