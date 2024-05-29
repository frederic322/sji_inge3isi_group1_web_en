var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput"),
    userName = document.getElementById("name"),
    phone = document.getElementById("phone"),
    activity = document.getElementById("activity"),
    sector = document.getElementById("Sector"),
    email = document.getElementById("email"),
    Region = document.getElementById("Region"),
    department = document.getElementById("Department"),
    district = document.getElementById("District"),
    neighborhood = document.getElementById("Neighborhood"),
    pLocation = document.getElementById("pLocation"),
    submitBtn = document.querySelector(".submit"),
    userInfo = document.getElementById("data"),
    modal = document.getElementById("userForm"),
    modalTitle = document.querySelector("#userForm .modal-title"),
    newUserBtn = document.querySelector(".newUser")


let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : []

let isEdit = false, editId
showInfo()

newUserBtn.addEventListener('click', ()=> {
    submitBtn.innerText = 'Submit',
    modalTitle.innerText = "Fill the Form"
    isEdit = false
    imgInput.src = "../images/Profile Icon.webp"
    form.reset()
})


file.onchange = function(){
    if(file.files[0].size < 5000000){  // 5MB = 5000000
        var fileReader = new FileReader();

        fileReader.onload = function(e){
            imgUrl = e.target.result
            imgInput.src = imgUrl
        }

        fileReader.readAsDataURL(file.files[0])
    }
    else{
        alert("This file is too large!")
    }
}


function showInfo(){
    document.querySelectorAll('.employeeDetails').forEach(info => info.remove())
    getData.forEach((element, index) => {
        let createElement = `<tr class="employeeDetails">
            <td>${index+1}</td>
            <td><img src="${element.picture}" alt="" width="50" height="50"></td>
            <td>${element.employeeName}</td>
            <td>${element.employeeSector}</td>
            <td>${element.employeeActivity}</td>
            <td>${element.employeeEmail}</td>
            <td>${element.employeePhone}</td>
            <td>${element.employeeRegion}</td>
            <td>${element.employeeDepartment}</td>
            <td>${element.employeeDistrict}</td>
            <td>${element.employeeNeighborhood}</td>
            <td>${element.employeepLocation}</td>


            <td>
                <button class="btn btn-success" onclick="readInfo('${element.picture}', '${element.employeeName}', '${element.employeeEmail}', '${element.employeePhone}', '${element.employeeSector}', '${element.employeeActivity}', '${element.employeeRegion}', '${element.employeeDepartment}', '${element.employeeDistrict}','${element.employeeNeighborhood}','${element.employeepLocation}')" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye"></i></button>

                <button class="btn btn-primary" onclick="editInfo('${index}', '${element.picture}', '${element.employeeName}', '${element.employeeEmail}', '${element.employeePhone}', '${element.employeeSector}', '${element.employeeActivity}', '${element.employeeRegion}', '${element.employeeDepartment}', '${element.employeeDistrict}','${element.employeeNeighborhood}','${element.employeepLocation}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>

                <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash"></i></button>

            </td>
        </tr>`

        userInfo.innerHTML += createElement
    })
}
showInfo()


function readInfo(pic, name, email, phone, sector, activity, region, department,district,neighborhood,plocation){
    document.querySelector('.showImg').src = pic;
    document.querySelector('#showName').value = name;
    document.querySelector("#showEmail").value = email;
    document.querySelector("#showPhone").value = phone;
    document.querySelector("#ShowSector").value = sector;
    document.querySelector("#Showactivity").value = activity;
    document.querySelector("#ShowRegion").value = region;

    /* Update Region selection
    const regionSelect = document.getElementById("ShowRegion");
    for (let i = 0; i < regionSelect.options.length; i++) {
      if (regionSelect.options[i].value === region) {
        regionSelect.selectedIndex = i;
        break;
      }
    }

    const departmentSelect = document.getElementById("ShowDepartment");
    for (let i = 0; i < departmentSelect.options.length; i++) {
      if (departmentSelect.options[i].value === department) {
        departmentSelect.selectedIndex = i;
        break;
      }
    }*/


    document.querySelector("#ShowDepartment").value = department;
    document.querySelector("#ShowDistrict").value = district;
    document.querySelector("#ShowNeighborhood").value = neighborhood;
    document.querySelector("#ShowLocation").value = plocation;
  }



function editInfo(index, pic, name, email, phone, sector, activity, region, department,district,neighborhood,plocation){
    isEdit = true,
    editId = index,
    imgInput.src = pic,
    userName.value = name,
    email.value = email,
    phone.value = phone,
    sector.value = sector,
    activity.value = activity,
    Region.value = region,
    department.value = department,
    district.value = district,
    neighborhood.value = neighborhood,
    pLocation.value = plocation

    submitBtn.innerText = "Update"
    modalTitle.innerText = "Update The Form"
}


function deleteInfo(index){
    if(confirm("Are you sure want to delete?")){
        getData.splice(index, 1)
        localStorage.setItem("userProfile", JSON.stringify(getData))
        showInfo()
    }
}


form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const information = {
        picture: imgInput.src == undefined ? "../images/Profile Icon.webp" : imgInput.src,
        employeeName: userName.value,
        employeePhone: phone.value,
        employeeEmail: email.value,
        employeeSector: sector.value,
        employeeActivity: activity.value,
        employeeRegion: Region.value,
        employeeDepartment: department.value,
        employeeDistrict: district.value,
        employeeNeighborhood: neighborhood.value,
        employeepLocation: pLocation.value,
    };

    if(!isEdit){
        getData.push(information);
    }
    else{
        getData[editId] = information;
        isEdit = false;
    }

    localStorage.setItem('userProfile', JSON.stringify(getData));

    submitBtn.innerText = "Submit";
    modalTitle.innerHTML = "Fill The Form";

    showInfo();

    form.reset();

    imgInput.src = "../images/Profile Icon.webp";
});


// This is the js for region selection to precise location
var RegionSatinfo={
  Center: {
      "Haute-Sanga":{
          Yaounde:{
              Acacia:["Rond point","Maison damas"],
                  // "Biyem-assi":["lycee biyem assi"],
                  Damas:["Rond1point","Maison1damas"]
          }

      },
      "Haute-Sanga":{
          Yaounde:{
              Acacia1:["Rond point","Maison damas"],
                  // "Biyem-assi":["lycee biyem assi"],
                  Damas1:["Rond point","Maison damas"]
          }

      }

},

// Littoral:{
//     Moungo:{
//         Douala:{
//             Akwa:{
//                 Bonajo:["lycee Akwa"],
//                 Deido:["Rond point Deido","Maison deido"]
//         }

//     },
//     Nkam:{
//         Bonaberi:{
//            Mkepe:{
//                 Tignere:["lycee Tignere"],
//                 Kadey:["Rond point Kadey","bomba"]
//         }

//     }
// }
// }
// }
  }

window.onload= function()
{
  const selectRegion = document.getElementById('Region'),
  selectDepartment = document.getElementById('Department'),
  selectDistrict = document.getElementById('District'),
  selectNeighborhood = document.getElementById('Neighborhood'),
  selectLocation = document.getElementById('pLocation'),
  selects =  document.querySelectorAll('select')


  selectDepartment.disabled = true
  selectDistrict.disabled = true
  selectNeighborhood.disabled = true
  selectLocation.disabled = true

  selects.forEach(select => {
      if(select.disabled== true){
          select.style.cursor= "auto"
      }
  })
  for(let Region in RegionSatinfo){
      // console.log(Region);
      selectRegion.options[selectRegion.options.length] = new Option(Region,Region)

  }
  //region change
  selectRegion.onchange= (e) =>{
      selectDepartment.disabled = false
      selectDistrict.disabled = true
      selectNeighborhood.disabled = true
      selectLocation.disabled = true

      selectDepartment.length=1
      selectDistrict.length=1
      selectNeighborhood.length=1
      selectLocation.length=1

      for(let Department in RegionSatinfo[e.target.value]){
          console.log(Department);
          selectDepartment.options[selectDepartment.options.length]=new Option(Department,Department)
      }

  }




  //Depart change
  selectDepartment.onchange= (e) =>{
      selectDistrict.disabled = false
      selectNeighborhood.disabled = true
      selectLocation.disabled = true

      selectDistrict.length=1
      selectNeighborhood.length=1
      selectLocation.length=1

      for(let District in RegionSatinfo[selectRegion.value][e.target.value]){
          console.log(District);
          selectDistrict.options[selectDistrict.options.length]=new Option(District,District)
      }
  }
   //District change
   selectDistrict.onchange=(e) =>{

      selectNeighborhood.disabled = false
      selectLocation.disabled = true


      selectNeighborhood.length=1
      selectLocation.length=1

      for(let Neighborhood in RegionSatinfo[selectRegion.value][selectDepartment.value][e.target.value]){
          console.log(Neighborhood);
          selectNeighborhood.options[selectNeighborhood.options.length]=new Option(Neighborhood,Neighborhood)
      }
  }

//Neighborhood change
selectNeighborhood.onchange=(e) =>{

  selectLocation.disabled = false


  selectLocation.length=1

  let Locations = RegionSatinfo[selectRegion.value][selectDepartment.value][selectDistrict.value][selectNeighborhood.value]

  for(let i=0;i<Locations.length; i++){
      selectLocation.options[selectLocation.options.length]= new Option(Locations[i],Locations[i])
  }
}

}

