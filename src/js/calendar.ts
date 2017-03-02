import * as Flatpickr from "flatpickr";

let elem = document.getElementById("calendar");
let start = document.getElementById("start-date") as HTMLInputElement;
let end = document.getElementById("end-date") as HTMLInputElement;

/* Change settings */
Flatpickr.l10ns.default.weekdays.shorthand = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

/* Setup calendar */
new Flatpickr(elem,{
	"mode": "range",
	inline: true,
	altInput: true,
	altFormat: "n/j/Y",
	dateFormat: "m/d/Y",
	minDate: "today",
	prevArrow: "<div class='prev-arrow arrow'></div>",
	nextArrow: "<div class='next-arrow arrow'></div>",
	/*disable: [
		{ from: "YYYY-MM-DD", to: "YYYY-MM-DD" },
		{ from: "YYYY-MM-DD", to: "YYYY-MM-DD" }
	],*/
	onChange: function(selectedDates, dateStr, instance){
		let dates = dateStr.split(' to ');
		//start.value = dates[0];
		start.setAttribute("value", dates[0]);
		if(dates[1]){
			//end.value = dates[1];
			end.setAttribute("value", dates[1]);
		} else {
			//end.value = "";
			end.setAttribute("value", "");
		}
	}
});