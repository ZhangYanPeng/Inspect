// Initialize app
var myApp = new Framework7();
var baseUrl = "http://10.171.237.218:8080/tpri/app/";
var account;
var authority;

var upload_enable = 1;
var plan_enable = 0;
var plan_content = "";

//1：支吊架
var check_type;
var tmp_type;
getSetting();


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
	var info = storage["account"];
	if( info!=null && info!="" )
		account = JSON.parse(info);
	else
		account = null;
}

function getSetting(){
	var storage = window.localStorage;
	var tmp = storage["upload_enable"];
	if( tmp!=null && tmp!="" ){
		upload_enable = storage["upload_enable"];
	}
	else{
		storeSetting();
	}
}

function storeSetting(){
	var storage = window.localStorage;
	storage["upload_enable"] = upload_enable;
}