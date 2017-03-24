import * as Barba from "barba.js";

const openDrawer = function(){
	let drawer = document.getElementById("selection-drawer");

	if(drawer.className.indexOf("open") < 0){
		drawer.className += " open";
	}
}

const HomePage = Barba.BaseView.extend({
	namespace: "home",
	onEnter: function(){
		
		let page = document.getElementById("container");
		let startDate = document.getElementById("start-date") as HTMLInputElement;
		let endDate = document.getElementById("end-date") as HTMLInputElement;
		let drawer = document.getElementById("selection-drawer");
		let count = document.getElementById("count");
		let form = document.getElementById("booking") as HTMLFormElement;
		let bookingTool = document.getElementById("booking-tool");
		let bookNow = document.getElementById("book-now");

		startDate.parentElement.addEventListener("click", openDrawer);
		endDate.parentElement.addEventListener("click", openDrawer);
		count.addEventListener("click", openDrawer);

		// Open Drawer
		page.addEventListener("click", function(event){
			let target = event.target as HTMLElement;
			
			if(!drawer.contains(target) && target !== startDate && target !== endDate && target !== count && target !== bookNow){
				drawer.classList.remove("open");
			}
		});

		// Setup Count
		let adult = document.getElementById("num-adult");
		let adultNumElem = adult.querySelectorAll("#chg-adult")[0];
		let adultNum = parseInt(adultNumElem.textContent);
		let adultTxt = adult.querySelectorAll("#lab-adult")[0];
		let adultPlus = adult.querySelectorAll("#plus-adult")[0];
		let adultMinus = adult.querySelectorAll("#minus-adult")[0];
		let adultInput = document.getElementById("adults") as HTMLInputElement;

		let child = document.getElementById("num-child");
		let childNumElem = child.querySelectorAll("#chg-child")[0];
		let childNum = parseInt(childNumElem.textContent);
		let childTxt = child.querySelectorAll("#lab-child")[0];
		let childPlus = child.querySelectorAll("#plus-child")[0];
		let childMinus = child.querySelectorAll("#minus-child")[0];
		let childInput = document.getElementById("children") as HTMLInputElement;

		// Adult plus/minus
		adultPlus.addEventListener("click", function(){
			adultNum++;
			adultNumElem.textContent = adultNum.toString();
			adultInput.value = adultNum.toString();
			count.textContent = (adultNum + childNum).toString();
			if(adultNum > 1){
				adultTxt.textContent = "adults";
				adultMinus.classList.remove("disabled");
			} else {
				adultTxt.textContent = "adult";
			}
			if(adultNum + childNum === 6){
				adultPlus.className = "disabled";
				childPlus.className = "disabled";
			}
		});
		adultMinus.addEventListener("click", function(){
			adultPlus.classList.remove("disabled");
			childPlus.classList.remove("disabled");
			if(adultNum > 1){
				adultNum--;
				adultNumElem.textContent = adultNum.toString();
				adultInput.value = adultNum.toString();
				adultTxt.textContent = "adults";
				count.textContent = (adultNum + childNum).toString();
			}
			if(adultNum == 1){
				adultTxt.textContent = "adult";
				adultMinus.className = "disabled";
			}
		});
		// Child plus/minus
		childPlus.addEventListener("click", function(){
			childNum++;
			childNumElem.textContent = childNum.toString();
			childInput.value = childNum.toString();
			count.textContent = (adultNum + childNum).toString();
			if(childNum > 0){
				childMinus.classList.remove("disabled");
			}
			if(childNum == 1){
				childTxt.textContent = "child";
			} else {
				childTxt.textContent = "children";
			}
			if(adultNum + childNum === 6){
				adultPlus.className = "disabled";
				childPlus.className = "disabled";
			}
		});
		childMinus.addEventListener("click", function(){
			adultPlus.classList.remove("disabled");
			childPlus.classList.remove("disabled");
			if(childNum > 0){
				childNum--;
				childNumElem.textContent = childNum.toString();
				childInput.value = childNum.toString();
				count.textContent = (adultNum + childNum).toString();
			}
			if(childNum == 0){
				childMinus.className = "disabled";
			}
			if(childNum == 1){
				childTxt.textContent = "child";
			} else {
				childTxt.textContent = "children";
			}
		});

		let close = document.getElementById("close");
		let arrival = document.getElementById("arrival") as HTMLInputElement;
		let departure = document.getElementById("departure") as HTMLInputElement;

		close.addEventListener("click", function(){
			bookNow.textContent = "Search Now";

			bookingTool.classList.remove("open");
		});

		// Book Now

		if(window.innerWidth <= 900){
			bookNow.textContent = "Search Now";
		}

		function getFormattedDate(date) {
			var year = date.getFullYear();
			var month = (1 + date.getMonth()).toString();
			month = month.length > 1 ? month : '0' + month;
			var day = date.getDate().toString();
			day = day.length > 1 ? day : '0' + day;
			return month + '/' + day + '/' + year;
		}

		arrival.addEventListener("change", function(){
			let input = new Date(arrival.value);
			startDate.setAttribute("value", getFormattedDate(input));
		});

		departure.addEventListener("change", function(){
			let input = new Date(departure.value);
			endDate.setAttribute("value", getFormattedDate(input));
		});

		let errorState = document.getElementById("error-state");

		bookNow.addEventListener("click", function(){
			let error = false;

			if(bookNow.textContent === "Search Now" && window.innerWidth <= 900){
				bookingTool.className += " open";
				bookNow.textContent = "Book Now";
			} else if(bookNow.textContent === "Book Now" || window.innerWidth > 900) {
				bookingTool.classList.remove("open");

				// remove error state
				errorState.classList.remove("show");

				if(window.innerWidth > 900){
					if(startDate.value == null || startDate.value == undefined || startDate.value == ""){
						error = true;
					}
					if(endDate.value == null || endDate.value == undefined || endDate.value == ""){
						error = true;
					}
				}

				if(error == false){
					form.submit();
				} else {
					// show error state
					openDrawer();
					errorState.className += " show";
				}	
			}
		});
	}
});

HomePage.init();
Barba.Pjax.start();