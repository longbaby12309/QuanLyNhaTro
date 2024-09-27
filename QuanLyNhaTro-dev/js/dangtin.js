var citis = document.getElementById("city");
var districts = document.getElementById("district");
var wards = document.getElementById("ward");
var Parameter = {
  url: "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json", 
  method: "GET", 
  responseType: "application/json", 
};
var promise = axios(Parameter);
promise.then(function (result) {
  renderCity(result.data);
});

function renderCity(data) {
  for (const x of data) {
    citis.options[citis.options.length] = new Option(x.Name, x.Id);
  }
  citis.onchange = function () {
    district.length = 1;
    ward.length = 1;
    if(this.value != ""){
      const result = data.filter(n => n.Id === this.value);
      for (const k of result[0].Districts) {
        district.options[district.options.length] = new Option(k.Name, k.Id);
      }
    }
  };
  district.onchange = function () {
    ward.length = 1;
    const dataCity = data.filter((n) => n.Id === citis.value);
    if (this.value != "") {
      const dataWards = dataCity[0].Districts.filter(n => n.Id === this.value)[0].Wards;
      for (const w of dataWards) {
        wards.options[wards.options.length] = new Option(w.Name, w.Id);
      }
    }
  };
}


const citySelect = document.getElementById('city');
const districtSelect = document.getElementById('district');
const wardSelect = document.getElementById('ward');
const addressInput = document.querySelector('.txtAddress');

citySelect.addEventListener('change', updateFullAddress);
districts.addEventListener('change', updateFullAddress);
wards.addEventListener('change', updateFullAddress);
addressInput.addEventListener('input', updateFullAddress);

function updateFullAddress(){
	var city = citySelect.options[citySelect.selectedIndex].text;
	var district = districtSelect.options[ districtSelect.selectedIndex].text;
	var ward =wardSelect.options[wardSelect.selectedIndex].text;
	var address = addressInput.value;
	
	var fullAddress = document.querySelector('.fullAddress');
	fullAddress.value= address + ", " + ward + ", " + district + ", " +city; 	

const thanhpho = document.getElementById('thanhpho');
thanhpho.value= city; 	
const quan = document.getElementById('quan');
quan.value=district; 	
const phuong = document.getElementById('phuong');
phuong.value=ward; 	
document.getElementById('showInputsButton').addEventListener('click', function() {
  document.getElementById('thanhpho').style.display = 'block';
  document.getElementById('quan').style.display = 'block';
  document.getElementById('phuong').style.display = 'block';
});
}

