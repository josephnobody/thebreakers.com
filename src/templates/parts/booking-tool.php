<section id="booking-tool" class="group">

	<div class="close mobile-show" id="close"></div>
	<form id="booking" action="https://res.windsurfercrs.com/ibe/index.aspx" method="get">
		<div class="input-block hidden">
			<input type="hidden" name="propertyID" value="14938" />
		</div>
		<div class="input-block flex group">
			<div class="mobile-hide when">
				<label for="start-date">When</label>
				<div class="input">
					<input id="start-date" type="text" name="checkin" placeholder="Arrival" value="" readonly />
				</div>
				<div class="break"></div>
				<div class="input">
					<input id="end-date" type="text" name="checkout" placeholder="Departure" value="" readonly />
				</div>
			</div>
			<div class="mobile-show when">
				<label for="arrival">Arrival <span>Departure</span></label>
				<div class="input">
					<input id="arrival" type="date" name="arrival-date" placeholder="Arrival" value="" />
				</div>
				<div class="break"></div>
				<div class="input">
					<input id="departure" type="date" name="departure-date" placeholder="Departure" value="" />
				</div>
			</div>
			<div class="input guests">
				<label>Guests</label>
				<div id="count" class="fake-input">1</div>
				<input id="adults" type="hidden" name="adults" placeholder="" value="1" />
				<input id="children" type="hidden" name="children" placeholder="" value="0" />
			</div>
			<div class="submit-button">
				<button type="submit">Search</button>
			</div>
		</div>
	</form>
	<div id="selection-drawer" class="group">
		<input id="calendar" value="" autocomplete="off" />
		<div id="guest-selector" class="group">
			<label>Guests</label>
			<div id="num-adult" class="row group">
				<div id="chg-adult">1</div>
				<div id="lab-adult">adult</div>
				<div class="controls group">
					<div id="plus-adult"></div>
					<div id="minus-adult" class="disabled"></div>
				</div>
			</div>
			<div id="num-child" class="row group">
				<div id="chg-child">0</div>
				<div id="lab-child">children</div>
				<div class="controls group">
					<div id="plus-child"></div>
					<div id="minus-child" class="disabled"></div>
				</div>
			</div>
		</div>
		<div id="error-state" class="group">
			<p>Please input your dates and guest count.</p>
		</div>
	</div>

</section>