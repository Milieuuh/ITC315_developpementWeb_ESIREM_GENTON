window.onload = function() {

   let bSupportsLocal = (('localStorage' in window) && window['localStorage'] !== null);

	if (!bSupportsLocal) {
		document.getElementById('infoform').innerHTML = "<p>Désolé, ce navigateur nes upporte pas l’API Web Storage du W3C.</p>";
		return;
	}

	if (window.localStorage.length != 0) {
		document.getElementById('firstName').value = window.localStorage.getItem('firstName');
		document.getElementById('lastName').value = window.localStorage.getItem('lastName');
		document.getElementById('postCode').value = window.localStorage.getItem('postCode');
	}
};




	let storeLocalContent= function(fName, lName, pCode) {
		window.localStorage.setItem('firstName', fName);
		window.localStorage.setItem('lastName', lName);
		window.localStorage.setItem('postCode', pCode);
	}


	 let clearLocalContent = function() {
		window.localStorage.clear();
		document.getElementById('firstName').value = "";
		document.getElementById('lastName').value = "";
		document.getElementById('postCode').value = "";

	}

