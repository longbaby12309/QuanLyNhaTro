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


citySelect.addEventListener('change', updateFullAddress);
districts.addEventListener('change', updateFullAddress);
wards.addEventListener('change', updateFullAddress);


function updateFullAddress(){
	var city = citySelect.options[citySelect.selectedIndex].text;
	var district = districtSelect.options[ districtSelect.selectedIndex].text;
	var ward =wardSelect.options[wardSelect.selectedIndex].text;

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

// const citySelect = document.getElementById('city');
// const districtSelect = document.getElementById('district');
// const wardSelect = document.getElementById('ward');

// citySelect.addEventListener('change', updateFullAddress);
// districts.addEventListener('change', updateFullAddress);
// wards.addEventListener('change', updateFullAddress);

// function updateFullAddress() {
//     var city = citySelect.selectedIndex !== -1 ? citySelect.options[citySelect.selectedIndex].text : null;
//     var district = districtSelect.selectedIndex !== -1 ? districtSelect.options[districtSelect.selectedIndex].text : null;
//     var ward = wardSelect.selectedIndex !== -1 ? wardSelect.options[wardSelect.selectedIndex].text : null;

//     const thanhpho = document.getElementById('thanhpho');
//     thanhpho.value = city !== null ? city : ''; // Nếu city là null thì gán chuỗi rỗng

//     const quan = document.getElementById('quan');
//     quan.value = district !== null ? district : ''; // Nếu district là null thì gán chuỗi rỗng

//     const phuong = document.getElementById('phuong');
//     phuong.value = ward !== null ? ward : ''; // Nếu ward là null thì gán chuỗi rỗng

//     document.getElementById('showInputsButton').addEventListener('click', function () {
//         document.getElementById('thanhpho').style.display = 'block';
//         document.getElementById('quan').style.display = 'block';
//         document.getElementById('phuong').style.display = 'block';
//     });
// }

var slider = document.getElementById("myRange");
var valueLabel = document.getElementById("value");

valueLabel.innerHTML = slider.value;

slider.oninput = function() {
  valueLabel.innerHTML = this.value;
};

function toggleMenu() {
  var menu = document.getElementById('menu');
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}
//ho tro
function khungChat(){
	var khungchat = document.getElementById("khungChat");
	var mess = document.getElementById("mess");
	var zalo = document.getElementById("zalo");
	var hotline = document.getElementById("hotline");
	if(khungchat.style.display == 'none'){
		khungchat.style.display = 'block';
		mess.style.display = "block";
		zalo.style.display = "block";
		hotline.style.display = "block";
	}else{
		khungchat.style.display = 'none';
		mess.style.display = "none";
		zalo.style.display = "none";
		hotline.style.display = "none";
	}
}

var isFirstMessage = true;

function sendMessage(event) {
  event.preventDefault();
  
  var inputMessage = document.getElementById("inputMessage");
  var messageContainer = document.getElementById("messageContainer");

  var message = inputMessage.value.trim();
  if (message === "") return; // Thoát hàm nếu không có nội dung nhập vào

  var userMessage = document.createElement("div");
  userMessage.textContent = message;
  userMessage.classList.add("user-message"); // Thêm class "user-message"

  messageContainer.appendChild(userMessage);

  inputMessage.value = ""; // Làm trống trường nhập

  if (isFirstMessage) {
    var systemMessage = document.createElement("div");
    systemMessage.innerHTML = "(Đây là tin nhắn tự động)"+"<br></br>"+" Fpoly House xin chào quý khách." +"<br></br>"+
      "Đây là thông tin của Fpoly House quý khách có thể liên hệ trực tiếp nào cần:<br>" +
      "- Số hotline: <a href='tel:0773699825'>0773699825</a> <br> Hoặc <a href='tel:0877410924'>0877410924</a>";
    systemMessage.classList.add("system-message"); // Thêm class "system-message"

    messageContainer.appendChild(systemMessage);

    isFirstMessage = false; // Đánh dấu không còn là tin nhắn đầu tiên
  }
}
