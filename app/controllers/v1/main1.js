import FoodList1 from "../../models/v1/foodList1.js"

document.getElementById("btnThemMon").addEventListener("click", themMon);

function themMon(){
	const id = document.getElementById("foodID").value;
	const ten = document.getElementById("tenMon").value;
	const loai = document.getElementById("loai").value;
	const gia = document.getElementById("giaMon").value;
	const khuyenMai = document.getElementById("khuyenMai").value;
	const tinhTrang = document.getElementById("tinhTrang").value;
	let hinhAnh = document.getElementById("hinhMon").files[0];
	const moTa = document.getElementById("moTa").value;

	if(!hinhAnh) return;

	const fileReader = new FileReader();
	fileReader.readAsDataURL(hinhAnh);
	fileReader.onload = function(event){
		hinhAnh = event.target.result;

		const foodList1 = new FoodList1(id, ten, loai, gia, khuyenMai, tinhTrang, hinhAnh , moTa);
		showFoodList1(foodList1);
	};

}
function showFoodList1(foodList1){
	const tbody = document.getElementById("tbodyFood");
	var inner= "";
	// for( let i in foodList1 ){
	// 	var foodList1 = [i];
		inner += `
			<tr>
				<td>
				${foodList1.id}
				${foodList1.hinhAnh}
				</td>
				<td>
					${foodList1.ten}
				</td>
				<td>${foodList1.loai}</td>
				<td>${foodList1.gia}</td>
				<td>${foodList1.khuyenMai}</td>
				<td>${foodList1.giaKhuyenMai()}</td>
				<td>${foodList1.tinhTrang}</td>
			</tr>
		`;
	// }
	tbody.innerHTML = inner;

}