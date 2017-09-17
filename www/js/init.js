// Initialize app
var myApp = new Framework7();
var baseUrl = "http://10.171.237.218:8080/tpri/app/";
var account;


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    
});


function start(){
    mainView.router.loadPage("function.html");//页面跳转
}

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    window.setTimeout("start()",1000);//1秒后跳转
});

function storeUserIdentification(userinfo) {
	var storage = window.localStorage;
	storage["account"] = JSON.stringify(userinfo);
}

// get the identification from local storage or set it null
function getUserIdentification() {
	var storage = window.localStorage;
	account = storage["account"];
}