// FUNCTIONS
// Used to capitalize first letter of string
function capitaliseFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

// Used to capitalize first letter of all words
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
    	first_letter = txt.charAt(0).toUpperCase();

    	// This captures words with an apostrophe as the second character
    	// And capitalizes them correctly
    	// Example: o'brien = O'Brien
    	if (txt.charAt(1) === "'") {
    		return first_letter + txt.charAt(1) + txt.charAt(2).toUpperCase() + txt.substr(3).toLowerCase();
    	} else {
    		return first_letter + txt.substr(1).toLowerCase();
    	}
    });
}

// Add commas to numbers over 1000
function commaSeparateNumber(val){
	while (/(\d+)(\d{3})/.test(val.toString())){
		val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
	}
	return val;
}

// This removes special characters and spaces
function removeSpecialCharacters(string) {
    return string.replace(/[^\w\s]/gi, '').replace(/ /g,'');
}

// This is loaded if inside iframe
if ( window.self !== window.top ) {
    // $('#sidebar-content-ss-header').hide();
    // $('.header-sub-iframe').show();
}

// Put title of page in the header whenever we scroll to the body content
$(document).ready(function() {
    var paraDistance = ( $("#first-p").position().top);

    // Scroll function that puts headline in top heaader
    $(window).scroll(function () {
        var switched = false;
        var currentSpot = $(window).scrollTop();
        
        if(currentSpot > paraDistance && !switched){
            var headline = $("#body-content h1").text();
            $(".header h1").html(headline);
            switched = true;
        } else {
            $(".header h1").html("");
            switched = false;
        }
    // Close scroll event
    });
// Close doc ready
});

// Return to top of page
$('#footer').click(function() {
    // Scroll to top
    $("html, body").animate({
        scrollTop: 0
    }, 500);
});