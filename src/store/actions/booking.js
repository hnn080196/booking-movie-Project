import {
    datVe,
    layDanhSachPhongVe,
    taoLichChieu,
} from 'services/QuanLyDatVeServices';
import {
    BOOKING_LIST,
    GET_BOOKING_LIST,
    DAT_VE_HOAN_TAT,
} from 'store/types/bookingTypes';
import { ThongTinDatVe } from '_core/models/ThongTinDatVe';
import { openLoadingAction, closeLoadingAction } from 'store/actions/loading';
import { ThongTinTaoLichChieu } from '_core/models/ThongTinLichChieu';
import Swal from 'sweetalert2';
import { history } from 'Routes';

export const getBookingListAction = (maLichChieu) => async (dispatch) => {
    try {
        dispatch(openLoadingAction);
        const response = await layDanhSachPhongVe(maLichChieu);
        dispatch(closeLoadingAction);
        dispatch({ type: GET_BOOKING_LIST, payload: response.data });
    } catch (error) {
        console.log(error.response?.data);
    }
};

export const bookingListAction = (seat) => ({
    type: BOOKING_LIST,
    payload: seat,
});
export const datVeHoanTatAction = {
    type: DAT_VE_HOAN_TAT,
};

export const postBookingInfoAction =
    (thongTinDatVe = new ThongTinDatVe()) =>
    async (dispatch) => {
        try {
            dispatch(openLoadingAction);
            const response = await datVe(thongTinDatVe);
            await dispatch(getBookingListAction(thongTinDatVe.maLichChieu));
            dispatch(closeLoadingAction);
            Swal.fire('Đặt Vé Thành Công', 'Bấm nút để tiếp tục', 'success');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Đặt Vé Thất Bại',
                text: `${error.response?.data}`,
            });
        }
    };

export const taoLichChieuAction =
    (thongTinLichChieu = new ThongTinTaoLichChieu()) =>
    async (dispatch) => {
        try {
            const response = await taoLichChieu(thongTinLichChieu);
            await Swal.fire(
                'Tạo Lịch Chiếu Thành Công',
                'Bấm nút để tiếp tục',
                'success'
            );
            history.goBack();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Tạo Lịch Chiếu Thất Bại',
                text: `${error.response?.data}`,
            });
        }
    };
