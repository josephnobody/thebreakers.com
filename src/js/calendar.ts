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
	minDate: new Date("May 1, 2017"),
	maxDate: new Date("Nov 2, 2027"),
	prevArrow: "<div class='prev-arrow arrow'></div>",
	nextArrow: "<div class='next-arrow arrow'></div>",
	disable: [
		function(date){
			return date.getMonth() === 0 || date.getMonth() === 1 || date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 11
		},
		{ from: new Date("Nov 2, 2017"), to: new Date("Nov 30, 2017") },
		{ from: new Date("Nov 2, 2018"), to: new Date("Nov 30, 2018") },
		{ from: new Date("Nov 2, 2019"), to: new Date("Nov 30, 2019") },
		{ from: new Date("Nov 2, 2020"), to: new Date("Nov 30, 2020") },
		{ from: new Date("Nov 2, 2021"), to: new Date("Nov 30, 2021") },
		{ from: new Date("Nov 2, 2022"), to: new Date("Nov 30, 2022") },
		{ from: new Date("Nov 2, 2023"), to: new Date("Nov 30, 2023") },
		{ from: new Date("Nov 2, 2024"), to: new Date("Nov 30, 2024") },
		{ from: new Date("Nov 2, 2025"), to: new Date("Nov 30, 2025") },
		{ from: new Date("Nov 2, 2026"), to: new Date("Nov 30, 2026") }
	],
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