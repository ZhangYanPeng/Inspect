


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
        getUserIdentification();
        if( account == null || account.id == -1){
            myApp.loginScreen();
        }else{
            validateInfo(account.username,account.password);
            authority = account.authority;
            if(authority>0){
                $$('.fun_title').html("支吊架掌中宝（企业版）");
            }else{
                $$('.fun_title').html("支吊架掌中宝（轻量版）");
            }
        }
    }

    if (page.name === 'tpcheck') {
        // Following code will be executed for page with data-page attribute equal to "index"
    }

    if (page.name === 'information') {
        // Following code will be executed for page with data-page attribute equal to "index"
		myApp.popup('.popup-information');
    }

    if (page.name === 'setting') {
        // Following code will be executed for page with data-page attribute equal to "index"
        init_setting();
    }

    if (page.name === 'plan') {
        // Following code will be executed for page with data-page attribute equal to "index"
        presentPlan();
    }
})

$$('.log-in').click(function(){
    login();
});

function scanStart () {
	cordova.plugins.barcodeScanner.scan(function (result) {
		mainView.router.loadPage("information.html?");
	}, 
	function (error) {
	},
	{
		preferFrontCamera : false, // iOS and Android
        showFlipCameraButton : false, // iOS and Android
        showTorchButton : true, // iOS and Android
        torchOn: false, // Android, launch with the torch switched on (if available)
        saveHistory: true, // Android, save scan history (default false)
        prompt : "请将二维码置于框中", // Android
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
        orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
        disableAnimations : true, // iOS
        disableSuccessBeep: false // iOS and Android
    });
};