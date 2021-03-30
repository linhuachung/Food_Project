import Food from "../../models/v1/food.js"

document.getElementById("btnThemMon").addEventListener("click", addToList);

const foodList1 = new FoodList1();
function addToList(){
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

		const food = new Food(id, ten, loai, gia, khuyenMai, tinhTrang, hinhAnh , moTa);
		foodList1.addToList(food);
		showFoodList1(foodList1.listItem);


	};

}


function showFoodList1(food){
	const tbody = document.getElementById("tbodyFood");
	var inner= "";
	// for( let i in foodList1 ){
	// 	var foodList1 = [i];
		inner += `
			<tr>
				<td>${food.id}</td>
				<td>
					<img src="${food.hinhAnh}">
					${food.ten}
				</td>
				<td>${food.loai}</td>
				<td>${food.gia}</td>
				<td>${food.khuyenMai}</td>
				<td>${food.tinhGiaKhuyenMai()}</td>
				<td>${food.tinhTrang}</td>
			</tr>
		`;
	// }
	tbody.innerHTML = inner;

}

