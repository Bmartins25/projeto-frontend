

alert("Bem vindos!");


let x=document.getElementById(`demo`);

const aluno = {cidade: `RJ`, idade: '33', local: `PUC`};
let {cidade, idade, local} = aluno;

console.log(cidade);
console.log(idade);
console.log(local);



let newWay = (nome, sobrenome) => {
  return 'Aluno ' + nome + ', ' + sobrenome;
};

console.log( newWay('Bruno', 'Bartolomeu') );


function getLocation ()
{
if (navigator.geolocation)
{
navigator.geolocation.getCurrentPosition(showPosition);
}
else{x.innerHTML= `O seu navegador não suporta Geolocalização.`;}
}

 function showPosition(position)

{
lat=position.coords.latitude;
lon=position.coords.longitude;
latlon=new google.maps.LatLng(lat, lon)
mapholder=document.getElementById(`mapholder`)
mapholder.style.height='250px';
mapholder.style.width='500px';


let myOptions={
center:latlon,zoom:14,
mapTypeId:google.maps.MapTypeId.ROADMAP,
mapTypeControl:false,
navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
};

let map=new google.maps.Map(document.getElementById(`mapholder`),myOptions);
let marker=new google.maps.Marker({position:latlon,map:map,title:`Você está Aqui!`});

}



function showError (error)
{
switch(error.code) 
{
case error.PERMISSION_DENIED:
  x.innerHTML=`Usuário rejeitou a solicitação de Geolocalização.`
  break;
case error.POSITION_UNAVAILABLE:
  x.innerHTML=`Localização indisponível.`
  break;
case error.TIMEOUT:
  x.innerHTML=`O tempo da requisição expirou.`
  break;
case error.UNKNOWN_ERROR:
  x.innerHTML=`Algum erro desconhecido aconteceu.`
  break;
}
}




