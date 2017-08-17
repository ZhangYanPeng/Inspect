


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    console.log(page.name);
    if (page.name === 'function') {
        // Following code will be executed for page with data-page attribute equal to "index"
        myApp.loginScreen();
    }
})


