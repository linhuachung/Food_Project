import Food from  "../../models/v1/food.js";

document.getElementById("btnThemMon").addEventListener("click" , addToFoodList2);

let foodList2 = new FoodList2();
function addToFoodList2(){
	const maMon = document.getElementById("foodID").value;
    const tenMon = document.getElementById("tenMon").value;
    const loaiMon = document.getElementById("loai").value;
    const giaMon = document.getElementById("giaMon").value;
    const khuyenMai = document.getElementById("khuyenMai").value;
    const tinhTrang = document.getElementById("tinhTrang").value;
    let hinhAnh = document.getElementById("hinhMon").files[0];
    const moTa = document.getElementById("moTa").value;

	if(!hinhAnh) return;

	const fileReader = new FileReader;
	fileReader.readAsDataURL(hinhAnh);
	fileReader.onload = function(event){
		hinhAnh = event.target.result;

		const food = new Food(maMon, tenMon, loaiMon, giaMon, khuyenMai , tinhTrang, hinhAnh, moTa);
		foodList2.addToFoodList2(food);
		showList(foodList2.list);
	}
}

function showList(list){
	let html = "";
	for(let i = 0 ; i < list.length ; i++){
		let item = list[i];
		html+= `;
			<tr>
				<td>${item.maMon}</td>
				<td>
					${item.tenMon}
					${item.hinhAnh}
				</td>
				<td>${item.loaiMon}</td>
				<td>${item.giaMon}</td>
				<td>${item.khuyenMai}</td>
				<td>${item.tinhGiaKhuyenMai()}</td>
				<td>${item.tinhTrang}</td>
			</tr>
		`;
	}
	document.getElementById("tbodyFood").innerHTML = html;
}