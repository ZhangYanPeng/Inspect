// Initialize app
var myApp = new Framework7();
<<<<<<< HEAD
var baseUrl = "http://10.170.234.255:8080/tpri/app/";
=======
var severUrl = "http://192.168.23.1:8080/";
var baseUrl = severUrl+"tpri/app/";
>>>>>>> 4d6670b15b19063e84435cf9327115e1187f88b5
var account;
var authority;

var upload_enable = 1;
var plan_enable = 0;
var plan_content = "";

var records;
var max_records_lenght = 50;

<<<<<<< HEAD
//1：支吊架
var check_type;
=======
//1：管道
//2：支吊架
var check_type="";
>>>>>>> 4d6670b15b19063e84435cf9327115e1187f88b5
getSetting();

var devices;
var progress;

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
<<<<<<< HEAD
	records = storage["records"];
	if(records == null){
		records = new Array();
=======
	rec = storage["records"];
	if(rec == null || rec == ""){
		records = new Array();
	}else{
		records = JSON.parse(rec)
>>>>>>> 4d6670b15b19063e84435cf9327115e1187f88b5
	}
}

function storeSetting(){
	var storage = window.localStorage;
	storage["upload_enable"] = upload_enable;
<<<<<<< HEAD
}
=======
}

function storeRecord(){
	var storage = window.localStorage;
	storage["records"] = JSON.stringify(records);
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
} 
>>>>>>> 4d6670b15b19063e84435cf9327115e1187f88b5
