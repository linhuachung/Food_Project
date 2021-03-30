import Food from "../../models/v1/food.js"

document.getElementById("btnThemMon").addEventListener("click", addToList);

const foodList1 = new FoodList1();
function addToList(){
	const maMon = document.getElementById("foodID").value;
	const tenMon = document.getElementById("tenMon").value;
	const loaiMon = document.getElementById("loai").value;
	const giaMon = document.getElementById("giaMon").value;
	const khuyenMai = document.getElementById("khuyenMai").value;
	const tinhTrang = document.getElementById("tinhTrang").value;
	let hinhAnh = document.getElementById("hinhMon").files[0];
	const moTa = document.getElementById("moTa").value;

	if(!hinhAnh) return;

	const fileReader = new FileReader();
	fileReader.readAsDataURL(hinhAnh);
	fileReader.onload = function(event){
		hinhAnh = event.target.result;

		const food = new Food(maMon, tenMon, loaiMon, giaMon, khuyenMai, tinhTrang, hinhAnh , moTa);
		foodList1.addToList(food);
		showFoodList1(foodList1.listItem);


	};

}


function showFoodList1(listItem){
	const tbody = document.getElementById("tbodyFood");
	let inner= "";
	for( let i = 0 ; i < listItem.length ; i++ ){
		let list = listItem[i];
		inner += `
			<tr>
				<td>${list.maMon}</td>
				<td>
					<img src="${list.hinhAnh}">
					${list.tenMon}
				</td>
				<td>${list.loaiMon}</td>
				<td>${list.giaMon}</td>
				<td>${list.khuyenMai}</td>
				<td>${list.tinhGiaKhuyenMai()}</td>
				<td>${list.tinhTrang}</td>
			</tr>
		`;
	}
	tbody.innerHTML = inner;

}

