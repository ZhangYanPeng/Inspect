


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'function') {
        // Following code will be executed for page with data-page attribute equal to "index"
        myApp.loginScreen();
    }

    if (page.name === 'tpcheck') {
        // Following code will be executed for page with data-page attribute equal to "index"
        
    }

    if (page.name === 'information') {
        // Following code will be executed for page with data-page attribute equal to "index"
		myApp.popup('.popup-information');
    }
})

function scanStart () {
	cordova.plugins.barcodeScanner.scan(function (result) {
		mainView.router.loadPage("information.html");
	}, 
	function (error) {
		mainView.router.loadPage("information.html");
	},
	{
		preferFrontCamera : false, // iOS and Android
        showFlipCameraButton : true, // iOS and Android
        showTorchButton : true, // iOS and Android
        torchOn: true, // Android, launch with the torch switched on (if available)
        saveHistory: true, // Android, save scan history (default false)
        prompt : "Place a barcode inside the scan area", // Android
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
        orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
        disableAnimations : true, // iOS
        disableSuccessBeep: false // iOS and Android
    });
};