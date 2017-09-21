


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
		loadDeviceInfo(page.query.id);
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

