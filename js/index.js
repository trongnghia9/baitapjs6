function qLtuyenSinh() {
    var diemChuan = Number(document.getElementById("diem").value);
    var diemKV = document.getElementById("chonkhuVuc").value;
    var diemDT = document.getElementById("chondoiTuong").value;
    var diem1 = document.getElementById("diem1").value;
    var diem2 = document.getElementById("diem2").value;
    var diem3 = document.getElementById("diem3").value;
    var dut = Number(diemKV) + Number(diemDT);
    var dtb = tinhDTB(diem1, diem2, diem3);
    var diemTong = dtb + dut;
    var ketQua = "";
    if (diemTong < diemChuan && diem1 <= 0 || diemTong < diemChuan && diem2 <= 0 || diemTong < diemChuan && diem3 <= 0) {
        ketQua = "Bạn đã rớt, do có điểm nhỏ hơn 0";
    } else if (diemTong < diemChuan) {
        ketQua = "Bạn đã rớt, tổng điểm: " + diemTong.toFixed(1);
    } else {
        ketQua = "Bạn đã đậu, tổng điểm: " + diemTong.toFixed(1);
    }

    document.getElementById("ketQua").innerHTML = ketQua;
}
document.getElementById("btnKetQua").onclick = qLtuyenSinh;

function tinhDTB(diem1, diem2, diem3) {
    var dtb = 0;
    dtb = (Number(diem1) + Number(diem2) + Number(diem3));
    return dtb;
}
// tính tiền điện
function tinhTienDien() {
    var hoTen = document.getElementById("hovaTen").value;
    var soKW = Number(document.getElementById("kwtienDien").value);
    const tiendien1 = 500;
    const tiendien2 = 650;
    const tiendien3 = 850;
    const tiendien4 = 1100;
    const tiendien5 = 1300;
    var tongTienDien;

    if (0 < soKW && soKW <= 50) {
        tongTienDien = soKW * 500;
    } else if (soKW > 1 && soKW <= 100) {
        tongTienDien = (50 * 500) + (soKW - 50) * 650;
    } else if (soKW > 100 && soKW <= 200) {
        tongTienDien = (50 * 500) + (100 - 50) * 650 + (soKW - 100) * 850;
    } else if (soKW > 200 && soKW <= 350) {
        tongTienDien = (50 * 500) + (100 - 50) * 650 + (200 - 100) * 850 + (soKW - 200) * 1100;
    } else if (soKW > 350) {
        tongTienDien = (50 * 500) + (100 - 50) * 650 + (200 - 100) * 850 + (350 - 200) * 1100 + (soKW - 350) * 1300;
    } else {
        alert("vui lòng hãy nhập số kw");
    }

    document.getElementById("ketQuatiendien").innerHTML = "Họ tên: " + hoTen + ";" + " Tiền điện: " + tongTienDien.toLocaleString();
}
document.getElementById("btnTinhTienDien").onclick = tinhTienDien;
// tính thuế
function tienThue() {
    const Thue60 = 0.05;
    const Tue60Den120 = 0.1;
    const Thue120Den210 = 0.15;
    const Thue210Den384 = 0.2;
    const Thue384Den624 = 0.25;
    const Thue624Den960 = 0.3;
    const ThueTren960 = 0.35;

    var hoTen = document.getElementById("hovaTen").value;
    var thuNhapNam = Number(document.getElementById("thuNhapNam").value);
    var soNguoiPT = Number(document.getElementById("soNguoiPT").value);
    var tinhThue = tinhTienThueCaNhan(thuNhapNam, soNguoiPT);
    document.getElementById("ketQuatinhthue").innerHTML = "Họ tên: " + hoTen + " ;" + " Tiền thuế thu nhập cá nhân: " + tinhThue.toLocaleString() + " VND";
}
document.getElementById("btnTinh").onclick = tienThue;


function tinhTienThueCaNhan(thuNhapNam, soNguoiPT) {
    var thuNhapChiuThe = thuNhapNam - 4e+6 - soNguoiPT * 1600000;
    if (thuNhapChiuThe > 0 && thuNhapChiuThe <= 60e+6) {
        return thuNhapChiuThe * 0.05;
    } else if (thuNhapChiuThe > 60e+6 && thuNhapChiuThe <= 120e+6) {
        return thuNhapChiuThe * 0.1;
    } else if (thuNhapChiuThe > 120e+6 && thuNhapChiuThe <= 210e+6) {
        return thuNhapChiuThe * 0.15;
    } else if (thuNhapChiuThe > 210e+6 && thuNhapChiuThe <= 384e+6) {
        return thuNhapChiuThe * 0.2;
    } else if (thuNhapChiuThe > 384e+6 && thuNhapChiuThe <= 624e+6) {
        return thuNhapChiuThe * 0.25;
    } else if (thuNhapChiuThe > 624e+6 && thuNhapChiuThe <= 960e+6) {
        return thuNhapChiuThe * 0.3;
    } else if (thuNhapChiuThe > 960e+6) {
        return thuNhapChiuThe * 0.35;
    } else {
        alert("Please: Nhập vào Tổng thu nhập một năm")
        return "";
    }
}
// tính tiền cáp
function tinhTienCap() {
    const DANHD = 4.5;
    const DANCB = 20.5;
    const DANKENH = 7.5;

    const DNHD = 15;
    const DNCB = 75;
    const DNKENHCC = 50;
    var chonKH = document.getElementById("chonKH").value;
    var soCongKetNoi = Number(document.getElementById("KetNoi").value);
    var maKH = Number(document.getElementById("maKH").value);
    var soKenhThue = Number(document.getElementById("kenhKH").value);
    var tongTien = 0;

    switch (chonKH) {
        case "Nhà Dân":
            tongTien = (DANHD + DANCB + soKenhThue * DANKENH);
            break;
        case "Doanh Nghiệp":
            if (soCongKetNoi < 11) {
                tongTien = DNHD + DNCB + soKenhThue * DNKENHCC;
            } else {
                tongTien = DNHD + DNCB + soKenhThue * DNKENHCC + (soCongKetNoi - 10) * 5;
            }
            break;
        default:
            alert("Vui lòng nhập kiểu khách hàng!")
            break;
    }
    document.getElementById("ketQuatc").innerHTML = "Mã khách hàng: " + maKH + " ;" + " Tiền cáp: " + "$" + tongTien.toFixed(2);
}
document.getElementById("Tinh").onclick = tinhTienCap;

function myFunction() {
    var x = document.getElementById("chonKH").value;
    var xuatHien = document.getElementById("xuat");
    switch (x) {
        case "Doanh Nghiệp":
            xuatHien.style.display = "block";
            break;
        case "Nhà dân":
            xuatHien.style.display = "none";
            break;
        case "Chọn loại khách hàng":
            xuatHien.style.display = "none";
            break;

        default:
            xuatHien.style.display = "none";
            break;
    }
}
// bài tập js buổi 6

// bài 1


function timSoNguyenDuong() {
    var sum = 0;
    var count = 1;
    for (let i = 1; i < 10000; i++) {
        sum += i;
        if(sum >= 10000){
            count = i;
            break;
        }
    }
    document.querySelector('#kqBai1').innerHTML = 'Số nguyên dương nhỏ nhất: ' + count;
}
document.querySelector('#btnBai1').onclick = timSoNguyenDuong;
// bài 2
function tinhTong() {
    var nhapX = Number(document.querySelector('#nhapX').value);
    var nhapN = Number(document.querySelector('#nhapN').value);
    var count = 1;
    var sum = 0;
    if (nhapN < 0) {
        return alert("n cần là số dương");
    } else if (nhapN == 0 || nhapN == 1) {
        sum = nhapX;
    } else {
        for (let i = 1; i <= nhapN; i++) {
            sum += Math.pow(nhapX, i);
        }
    }
    document.querySelector('#kqBai2').innerHTML = 'Tổng: ' + sum;
}
document.querySelector('#btnBai2').onclick = tinhTong;
// bài 3
function tinhGiaiThua() {
    var giaiThuaN = Number(document.querySelector('#giaiThuaN').value);
    var tong = 1;
    if (giaiThuaN < 0) {
        return alert("N phải là số nguyên dương! Hãy nhập lại!");
    } else if (giaiThuaN == 0) {
        tong = 0;
    } else if (giaiThuaN > 0) {
        for (let i = 1; i <= giaiThuaN; i++) {
            tong *= i;
        }
    }
    document.querySelector('#kqBai3').innerHTML = 'Giai thừa: ' + tong;
}
document.querySelector('#btnBai3').onclick = tinhGiaiThua;
// bài 4
function divXanhDo() {
    var theDiv;
    var divContent;
    for (var i = 0; i < 10; i++) {
        theDiv = document.createElement("div");
        if (i % 2 == 0) {
            divContent = document.createTextNode("Chẵn: " + i);
            theDiv.style.backgroundColor = "red";
            theDiv.style.color = "white";
        } else {
            divContent = document.createTextNode("Lẻ: " + i);
            theDiv.style.backgroundColor = "blue";
            theDiv.style.color = "white";
        }
        theDiv.appendChild(divContent);
        document.getElementById("kqBai4").appendChild(theDiv);
    }
    
}
document.querySelector('#btnBai4').onclick = divXanhDo;
// bài 5
function inSoNguyenTo() {
    var inputNum = Number(document.querySelector('#nhapSoN_b5').value);
    var count = 1;
    var result = "";
    while (count <= inputNum) {
       
        if (kiemTraSNT(count)) {
            result += count + " ";
        }
        count++;
    }
    if (result == "") {
        document.getElementById("kqBai5").innerHTML = "Không có số nguyên tố hợp lệ";
    } else {
        document.getElementById("kqBai5").innerHTML = result;   
    }
}
function kiemTraSNT(inputNum) {
    if (inputNum < 2) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(inputNum); i++) {
            if (inputNum % i == 0) {
                return false;
            }
        }
    }
    return true;
}

document.querySelector('#btnBai5').onclick = inSoNguyenTo;