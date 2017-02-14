function reverseString(H){
	h=H.split("").reverse().join();
		F="";
	 	if(H=='') {
	 		return null 
	 	};
	for (x=0 ;x<h .length;x++){
	  	if(h.charAt(x)==',') {
	  	r=0
	  	}
	  	else {
	  		F=F+h.charAt(x)
	  	}
	} 
	if(F==H){
		return true
	}
	else{
	return F
	};
	};
	console.log(reverseString("mzyyuwegdge") )	