/**
 * Bài 1:
 * Quản lý tuyển sinh
 */

var txtDiemChuan = document.getElementById("txtDiemChuan");
var slChonKhuVuc = document.getElementById("slChonKhuVuc");
var slChonDoiTuong = document.getElementById("slChonDoiTuong");

var txtDiem1 = document.getElementById("txtDiem1");
var txtDiem2 = document.getElementById("txtDiem2");
var txtDiem3 = document.getElementById("txtDiem3");

var btnKetQua = document.getElementById("btnKetQua");
var txtKetQua = document.getElementById("txtKetQua");

function tinhDiemTuyenSinh(mon1, mon2, mon3, khuVuc, doiTuong) {
    return mon1 + mon2 + mon3 + khuVuc + doiTuong;
}

function trungTuyen(tongDiem, diemChuan) {
    return tongDiem >= diemChuan;
}

btnKetQua.onclick = function () {
    //Đầu vào: Lấy input từ người dùng nhập
    var diemChuan = Number(txtDiemChuan.value);
    var khuVuc = Number(slChonKhuVuc.value);
    var doiTuong = Number(slChonDoiTuong.value);
    var diem1 = Number(txtDiem1.value);
    var diem2 = Number(txtDiem2.value);
    var diem3 = Number(txtDiem3.value);
    console.log(diemChuan, khuVuc, doiTuong, diem1, diem2, diem3);
    //Xử lý:
    // Tính tổng điểm tuyển sinh (kết quả trả về của hàm tinhDiemTuyenSinh)
    // So sánh tổng điểm tuyển sinh với điểm chuẩn => Kết quả
    var tongDiem = tinhDiemTuyenSinh(diem1, diem2, diem3, khuVuc, doiTuong);
    var isTrungTuyen = trungTuyen(tongDiem, diemChuan);
    var res = "";
    if (isTrungTuyen) {
        res = "Bạn đã đậu. Tổng điểm: " + tongDiem;
    }
    else {
        res = "Bạn đỡ trượt. Tổng điểm: " + tongDiem;
    }
    //Đầu ra: Hiển thị kết quả
    txtKetQua.value = res;
}

/**
 * Bài 2:
 * Tính tiền điện
 */

var txtHoTen = document.getElementById("txtHoTen");
var txtSokw = document.getElementById("txtSokw");
var btnTinhTienDien = document.getElementById("btnTinhTienDien");
var txtTienDien = document.getElementById("txtTienDien");

function tinhTienDien(soKw) {
    var res = 0;
    if (soKw <= 50) {
        res = soKw * 500;
    }
    else if (soKw <= 100) {
        res = 50 * 500 + (soKw - 50) * 650;
    }
    else if (soKw <= 200) {
        res = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    }
    else if (soKw <= 350) {
        res = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
    }
    else if (soKw > 350) {
        res = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    }
    return res;
}

btnTinhTienDien.onclick = function () {
    //Đầu vào: Lấy input từ người dùng
    var soKw = Number(txtSokw.value);
    var hoTen = txtHoTen.value;
    //Xử lý:
    //Tính tiền điện mức giá + số kw sử dụng (hàm tinhTienDien)
    var tienDien = tinhTienDien(soKw);
    var res = "Họ tên: " + hoTen + "; Tiền điện: " + new Intl.NumberFormat().format(tienDien);
    // Đầu ra: Hiển thị kết quả
    txtTienDien.value = res;
}