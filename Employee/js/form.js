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
    selectLocation = document.getElementById('Location'),
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
























































































































