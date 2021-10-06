import { IconButton, makeStyles } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinCumRapTheoHeThongAction } from "store/actions/cinemaAction";
import EditIcon from "@material-ui/icons/Edit";

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

const columns = [
  {
    field: "maCumRap",
    headerName: "Mã Cụm Rạp",
    width: 120,
    headerAlign: "center",
  },
  { field: "tenCumRap", headerName: "Tên cụm rạp", width: 200 },
  { field: "diaChi", headerName: "Địa chỉ", width: 200 },
];

function Theater(props) {
  const [page, setPage] = useState(0);
  const { theaterList } = useSelector((state) => state.cinemas);
  const dispatch = useDispatch();
  useEffect(() => {
    const { id } = props.computedMatch.params;
    dispatch(layThongTinCumRapTheoHeThongAction(id));
  }, []);

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <DataGrid
        rows={theaterList}
        columns={columns}
        pagination
        pageSize={10}
        rowsPerPageOptions={[10]}
        rowCount={theaterList.length}
        getRowId={(row) => row.maCumRap}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
}

export default Theater;
