$(document).ready(readyFunction);

function readyFunction() {
	console.log("js file connected");

  $("#submit-btn").click(updateCity);
    function updateCity() {
        event.preventDefault();
        console.log("update button is working");


        var city = ($("#city-type").val());


        if (city === "NYC" || city === "New York" || city === "New York City" ) {
			$("body").addClass("nyc");
		}

		else if (city === "SF" || city === "San Francisco" || city === "Bay Area" ) {
			$("body").addClass("sf");
		}

		else if (city === "Los Angeles" || city === "LA" || city === "LAX" ) {
			$("body").addClass("la");
		}

		else if (city === "Austin" || city === "ATX" ) {
			$("body").addClass("austin");
		}

		else if (city === "Sydney" || city === "SYD" ) {
			$("body").addClass("sydney");
		}

		else {
			$("body").removeClass();
		}

     }
}
