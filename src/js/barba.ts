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

		startDate.parentElement.addEventListener("click", openDrawer);
		endDate.parentElement.addEventListener("click", openDrawer);
		count.addEventListener("click", openDrawer);

		// Open Drawer
		page.addEventListener("click", function(event){
			let target = event.target as HTMLElement;
			
			if(!drawer.contains(target) && target !== startDate && target !== endDate && target !== count){
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
		});
		adultMinus.addEventListener("click", function(){
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
		});
		childMinus.addEventListener("click", function(){
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
		let bookNow = document.getElementById("book-now");

		close.addEventListener("click", function(){
			bookNow.textContent = "Search Now";

			bookingTool.classList.remove("open");
		});

		// Book Now

		if(window.innerWidth <= 900){
			bookNow.textContent = "Search Now";
		}

		bookNow.addEventListener("click", function(){
			let error = false;

			if(bookNow.textContent === "Search Now" && window.innerWidth <= 900){
				bookingTool.className += " open";
				bookNow.textContent = "Book Now";
			} else if(bookNow.textContent === "Book Now" || window.innerWidth > 900) {
				bookingTool.classList.remove("open");

				// remove error state

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
				}	
			}
		});
	}
});

HomePage.init();
Barba.Pjax.start();