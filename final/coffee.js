function myFunction() {
	var txt;
	if (confirm("Do you want to order this product?") == true) {
		 txt = "Successfully Ordered";
		}
		else {txt = "Try Again!!"}
		document.getElementById("demo").innerHTML = txt; }