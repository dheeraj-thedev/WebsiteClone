function addRooms(){
	 var i = document.getElementById("occupancies0_adults").value,l=0,u=0;
		if($('#occupancies1_adults').length!==0){
          l = document.getElementById("occupancies1_adults").value;
		}
		if($('#occupancies2_adults').length!==0){
           u = document.getElementById("occupancies2_adults").value;
		}
      ci = document.getElementById("occupancies0_children").value,cl=0,cu=0;
      if($('#occupancies1_children').length!==0){
     cl = document.getElementById("occupancies1_children").value;
      }
      if($('#occupancies2_children').length!==0){
     cu = document.getElementById("occupancies2_children").value;
      }
     ri = document.getElementById("rooms0").value;
	 if((Number(i)+Number(l)+Number(u))>1){
	   document.getElementById("trpC_ttlAdult").innerHTML = Number(i)+Number(l)+Number(u)+ " Adults";
	 }else{
		 document.getElementById("trpC_ttlAdult").innerHTML = Number(i)+Number(l)+Number(u)+ " Adult";
	 }
	 if((Number(ci)+Number(cl)+Number(cu))>1){
		   document.getElementById("trpC_ttlchildrn").innerHTML = Number(ci)+Number(cl)+Number(cu)+ " Children";
		 }else{
			 document.getElementById("trpC_ttlchildrn").innerHTML = Number(ci)+Number(cl)+Number(cu)+ " Child";
		 }
	 document.getElementById("trpC_ttlRoom").innerHTML = ri+" Room(s)";
}

$("#open_guests_popup").click(function(){
	$("#trpC_alltrvl_popup").slideToggle();
});
$("#flight_passenger_").click(function(){
	$("#flight_passenger_popup").slideToggle();
});
function closepopup(id){
	$("#"+id).slideUp();
}

