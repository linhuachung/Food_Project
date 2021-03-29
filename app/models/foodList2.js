export default class FoodList2{
	constructor(id, ten, loai, gia, khuyenMai, tinhTrang, hinhAnh , moTa){
		this.id = id;
		this.ten = ten;
		this.loai = loai;
		this.gia = gia;
		this.khuyenMai = khuyenMai;
		this.tinhTrang = tinhTrang;
		this.hinhAnh = hinhAnh;
		this.moTa = moTa;
	}
	giaKhuyenMai = () =>{
		return (this.gia * this.khuyenMai)/100 ;
	}
}