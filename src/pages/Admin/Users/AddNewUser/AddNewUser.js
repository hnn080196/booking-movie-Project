import {
    Box,
    Button,
    Grid,
    makeStyles,
    MenuItem,
    TextField,
    Typography,
} from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { history } from 'Routes';
import { themNguoiDungAction } from 'store/actions/user';
import { GROUPAPI } from 'util/settings/config';
import * as yup from 'yup';

/************************************Main****** */
const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(0, 6),
        display: 'flex',
        flexDirection: 'column',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        // marginTop: theme.spacing(3),
    },
    textField: {
        width: 400,
    },
    input: {
        // display: "none",
        width: '200px',
    },
}));
const maLoaiNguoiDungs = [
    {
        value: 'KhachHang',
        name: 'Khách Hàng',
    },
    {
        value: 'QuanTri',
        name: 'Quản Trị',
    },
];
const validationSchema = yup.object({
    taiKhoan: yup
        .string()
        .required('Nhập vào trường này')
        .min(8, 'Tài Khoản ít nhất 8 ký tự'),
    matKhau: yup
        .string()
        .required('Nhập vào trường này')
        .min(8, 'Mật khẩu ít nhất 8 ký tự'),
    email: yup
        .string()
        .required('Nhập vào trường này')
        .email('Email chưa chính xác'),
    soDt: yup
        .string()
        .required('Nhập vào trường này')
        .min(10, 'ít nhất 10 ký tự')
        .matches(/^[0-9]+$/, 'Vui Lòng nhập số'),
    hoTen: yup
        .string()
        .required('Nhập vào trường này')
        .min(10, 'Tên ít nhất 10 ký tự'),
});
function AddNewUser() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: GROUPAPI,
            maLoaiNguoiDung: '',
            hoTen: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            await dispatch(themNguoiDungAction(values));
            setSubmitting(false);
            formik.resetForm();
        },
    });
    return (
        <div
            style={{ height: '80vh', width: '100%' }}
            className={classes.paper}
        >
            <Box mb={2}>
                <Typography variant='h4' color='initial'>
                    Thêm Người Dùng
                </Typography>
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2} alignContent='center'>
                        <Grid item xs={12}>
                            <TextField
                                name='taiKhoan'
                                required
                                variant='outlined'
                                className={classes.textField}
                                label='Tài Khoản'
                                autoFocus
                                onChange={formik.handleChange}
                                size='small'
                                error={
                                    formik.touched.taiKhoan &&
                                    formik.errors.taiKhoan
                                }
                                helperText={
                                    formik.touched.taiKhoan &&
                                    formik.errors.taiKhoan
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name='matKhau'
                                required
                                variant='outlined'
                                className={classes.textField}
                                label='Mật khẩu'
                                onChange={formik.handleChange}
                                size='small'
                                error={
                                    formik.touched.matKhau &&
                                    formik.errors.matKhau
                                }
                                helperText={
                                    formik.touched.matKhau &&
                                    formik.errors.matKhau
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name='email'
                                required
                                variant='outlined'
                                className={classes.textField}
                                label='Email'
                                onChange={formik.handleChange}
                                size='small'
                                error={
                                    formik.touched.email && formik.errors.email
                                }
                                helperText={
                                    formik.touched.email && formik.errors.email
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name='soDt'
                                required
                                variant='outlined'
                                className={classes.textField}
                                label='Số Điện Thoại'
                                onChange={formik.handleChange}
                                size='small'
                                error={
                                    formik.touched.soDt && formik.errors.soDt
                                }
                                helperText={
                                    formik.touched.soDt && formik.errors.soDt
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={formik.handleChange}
                                name='maLoaiNguoiDung'
                                select
                                label='Loại Người Dùng'
                                variant='outlined'
                                size='small'
                                className={classes.textField}
                                defaultValue='KhachHang'
                                required
                                error={
                                    formik.touched.maLoaiNguoiDung &&
                                    formik.errors.maLoaiNguoiDung
                                }
                                helperText={
                                    formik.touched.maLoaiNguoiDung &&
                                    formik.errors.maLoaiNguoiDung
                                }
                            >
                                {maLoaiNguoiDungs.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                        color='primary'
                                    >
                                        {option.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name='hoTen'
                                variant='outlined'
                                className={classes.textField}
                                label='Họ Tên'
                                onChange={formik.handleChange}
                                size='small'
                                error={
                                    formik.touched.hoTen && formik.errors.hoTen
                                }
                                helperText={
                                    formik.touched.hoTen && formik.errors.hoTen
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant='contained'
                                color='primary'
                                type='submit'
                            >
                                Thêm Tài Khoản
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </div>
    );
}

export default AddNewUser;
