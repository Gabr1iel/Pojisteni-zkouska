class Insured {
	
    constructor(jazyk = "cs-CZ") {
    	const recordsFromStorage = localStorage.getItem("records");
        this.records = recordsFromStorage ? JSON.parse(recordsFromStorage) : [];
    	this.jazyk = jazyk;
	
    	this.nameInput = document.getElementById("fname");
    	this.surenameInput = document.getElementById("fsurename");
		this.ageInput = document.getElementById("fage");
		this.telInput = document.getElementById("ftel");
    	this.confirmButton = document.getElementById("save-btn");
    	this.createBTN = document.getElementsByClassName("lastElement");
    	this.nastavUdalosti();
    }

    nastavUdalosti() {
    	this.confirmButton.onclick = () => { 
		    const record = new Zaznam(this.nameInput.value, this.surenameInput.value, this.ageInput.value, this.telInput.value);
		    this.records.push(record);
			this.checkData();
			this.pageScrolling
		}};

    vypisZaznamy() {
		this.createBTN.innerHTML = "";
		
    	for (const record of this.records) {

			const buttons = document.createElement("div");
			buttons.className = "table-btn";

			$('#insured-table').append("<tr><td>" + record.name + " " + record.surename + "</td><td> (+420) " + record.tel + "</td><td class=`td-age`>" + record.age + "</td><td class=`last-td`></td></tr>"); 
			$("tr td:nth-child(4)").append(buttons)

				this.pridejTlacitko("Smazat", () => {
					if (confirm("Opravdu si přejete odstranit tento záznam?")) {
						this.records = this.records.filter(z => z !== record); 
						this.ulozZaznamy();
						location.reload();
					}
				}, buttons);

				/*this.pridejTlacitko("Edit", () => {
					if (confirm("Opravdu si přejete upravit tento záznam?")) {
						
					}
				}, buttons);*/
			};
		}
	
	ulozZaznamy() {
		localStorage.setItem("records", JSON.stringify(this.records));
	}

	pridejTlacitko(title, callback, element) {
		const button = document.createElement("button");
		button.onclick = callback;
		button.innerText = title;
		button.classList.add(title);
		element.appendChild(button);
	}

	checkData() {
		var errormessage = "";

		/**Kontrola prázdných inputů */
		if (document.getElementById("fname").value == "" || document.getElementById("fsurename").value == "" || document.getElementById("fage").value == "" || document.getElementById("ftel").value == "") {
			errormessage += "Prosím zadejte všechny údaje"
			
			if (errormessage != "") {
				
				alert(errormessage);
				return false;
			};

		} else {
			this.ulozZaznamy();
			this.vypisZaznamy();
			
		}
	}

	 
		
	pageScrolling() {
		const links = document.getElementById("jump");
    	
    
      window.location.hash = links; // for bookmarking
      lastLink.scrollIntoView(); 
    
	}

}












	



	
