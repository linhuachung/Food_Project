import FoodList2 from "../models/foodList2.js"

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

		const foodList2 = new FoodList2(id, ten, loai, gia, khuyenMai, tinhTrang, hinhAnh , moTa);
		showFoodList2(foodList2);
	};

}
function showFoodList2(foodList2){
	const tbody = document.getElementById("tbodyFood");
	var inner= "";
	// for( let i in foodList1 ){
	// 	var foodList1 = [i];
		inner += `
			<tr>
				<td>
				${foodList2.id}
				${foodList2.hinhAnh}
				</td>
				<td>
					${foodList2.ten}
				</td>
				<td>${foodList2.loai}</td>
				<td>${foodList2.gia}</td>
				<td>${foodList2.khuyenMai}</td>
				<td>${foodList2.giaKhuyenMai()}</td>
				<td>${foodList2.tinhTrang}</td>
			</tr>
		`;
	// }
	tbody.innerHTML = inner;

}