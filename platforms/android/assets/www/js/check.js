function startCheck(type){
    check_type = type;
    mainView.router.loadPage('plan.html');
    loadDevice();
}

function loadDevice() {
	var pc = new Array();
	var i = 0;
	for(var p in plan_content){
		if( plan_content[p].length > 0){
			pc[i]= p;
			i = i+1;
		}
	}

	$$.ajax({
		async : true,
		cache : false,
		type : 'GET',
		crossDomain : true,
		url : baseUrl + 'loadCheckDevice',
		data :  { devices : JSON.stringify(pc), type : check_type},
		dataType : "json",
		contentType : "application/x-www-form-urlencoded; charset=utf-8",
		error : function(e,status) {
<<<<<<< HEAD
			console.log(e);
=======
>>>>>>> 4d6670b15b19063e84435cf9327115e1187f88b5
			myApp.alert("加载失败，请重试","抱歉");
		},
		success : function(data) {
			devices = data;
			progress = new Array();
			$$.each(devices,function(index,value){
				var tmp = new Array();
				$$.each(value.devices,function(ind,val){
					tmp[ind] = 0;
				});
				progress[index] = tmp;
			});
			presentPlan();
		}
	});
}

function presentPlan(){
	var unc_ul = $$("<ul></ul>");
	var c_ul = $$("<ul></ul>");

	$$.each(devices,function(index,value){

		var unc_ul_item = $$("<ul></ul>");
		var c_ul_item = $$("<ul></ul>");

<<<<<<< HEAD
		$$.each(value.devices,function(ind,val){
			if( progress[index][ind] == 0 ){
				console.log(val);
				var unc_li_item = $$("<li></li>").append(val.name);
				unc_ul_item.append(unc_li_item);
			}else{
				console.log(val);
=======
		console.log(value);
		$$.each(value.devices,function(ind,val){
			if( progress[index][ind] == 0 ){
				var unc_li_item = $$("<li></li>").append(val.name);
				unc_ul_item.append(unc_li_item);
			}else{
>>>>>>> 4d6670b15b19063e84435cf9327115e1187f88b5
				var c_li_item = $$("<li></li>").append(val.name);
				c_ul_item.append(c_li_item);
			}
		});
		var unc_div_item = $$("<div></div>").attr('class',"content-block").append(unc_ul_item);
		var unc_div_sub = $$("<div></div>").attr('class',"accordion-item-content").append(unc_div_item);
		var unc_div_name = $$("<div></div>").attr('class',"item-title").append(value.name);
		var unc_div_sup = $$("<div></div>").attr('class',"item-inner").append(unc_div_name);
		var unc_a_sup = $$("<a></a>").attr('href','#').attr('class','item-link item-content').append(unc_div_sup);
		var unc_li_sup = $$("<li></li>").attr('class',"accordion-item").append(unc_a_sup).append(unc_div_sub);
		unc_ul.append(unc_li_sup);

		var c_div_item = $$("<div></div>").attr('class',"content-block").append(c_ul_item);
		var c_div_sub = $$("<div></div>").attr('class',"accordion-item-content").append(c_div_item);
		var c_div_name = $$("<div></div>").attr('class',"item-title").append(value.name);
		var c_div_sup = $$("<div></div>").attr('class',"item-inner").append(c_div_name);
		var c_a_sup = $$("<a></a>").attr('href','#').attr('class','item-link item-content').append(c_div_sup);
		var c_li_sup = $$("<li></li>").attr('class',"accordion-item").append(c_a_sup).append(c_div_sub);
		c_ul.append(c_li_sup);
	});

	$$('.uncomplete').html("").append(unc_ul);
	$$('.complete').html("").append(c_ul);
}


function scanStart () {
	cordova.plugins.barcodeScanner.scan(function (result) {
        var device = JSON.parse(result.text);
        completeCheck(device.id);
        presentPlan();
		mainView.router.loadPage("information.html?id="+device.id);
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

function loadDeviceInfo(did){
	$$.ajax({
		async : true,
		cache : false,
		type : 'GET',
		crossDomain : true,
		url : baseUrl + 'loadDeviceInfo',
		data :  { id: did},
		dataType : "json",
		contentType : "application/x-www-form-urlencoded; charset=utf-8",
		error : function(e,status) {
			loadLocalDeviceInfo(did);
		},
		success : function(data) {
			$$('#deviceinfo').html("");
			presentDevInfo(data,did);
		}
	});
}

function loadLocalDeviceInfo(did){
	var c_dev = null;
	$$.each(devices,function(index,value){
		var tmp = new Array();
		$$.each(value.devices,function(ind,val){
			if(val.id == did){
				c_dev = val;
				return false
			}
		});
		if(c_dev != null)
			return false;
	});
<<<<<<< HEAD
	if( c_dev == null)
		return;
	else{
		$$('#deviceinfo').html("");
		presentDevInfo(c_dev.deviceInfos,did);
	}
}

function presentDevInfo(infos,did){
	$$('.checkrecord').attr('href','record.html?id='+did);
	$$.each(infos,function(index,value){
=======
	if( c_dev == null){
		$$('#deviceinfo').html("");
		presentDevInfo({},did);
	}
	else{
		$$('#deviceinfo').html("");
		presentDevInfo(c_dev,did);
	}
}

function presentDevInfo(device,did){
	$$('.checkrecord').attr('href','record.html?id='+did);
	$$.each(device.deviceInfos,function(index,value){
>>>>>>> 4d6670b15b19063e84435cf9327115e1187f88b5
		var title = $$("<div></div>").attr('class','item-title').append(value.deviceParam.name);
		var content = $$("<div></div>").attr('class','item-after').append(value.value);
		var item = $$("<div></div>").attr('class','item-inner').append(title).append(content);
		var li = $$("<li></li>").attr('class','item-content').append(item);
		$$('#deviceinfo').append(li);
	});
<<<<<<< HEAD
=======

	$$(".reclist").html("");
	var ul = $$("<ul></ul>");
	$$.each(device.deviceCheckRecords,function(index,value){
		var div_dat = $$("<div></div>").attr('class','item-title').append(value.date);
		var div_inn = $$("<div></div>").attr('class','item-inner').append(div_dat);
		var a = $$("<a></a>").attr('href',"#").attr('class','item-content item-link').append(div_inn);
		var pc= $$("<p></p>").append(value.deviceCheckItem);
		var pr = $$("<p></p>").append(value.record);
		var pic = $$("<p></p>");
		$$.each(value.pictures,function(ind,val){
			var img = $$("<img></img>").attr('src',severUrl+val).attr('width','50em');
			var a_img = $$("<a></a>").attr('href',"picture.html?pic="+severUrl+val).append(img);
			pic.append(a_img);
		});
		var div_blo = $$("<div></div>").attr('class','content-block').append(pc).append(pr).append(pic);
		var div_con = $$("<div></div>").attr('class','accordion-item-content').append(div_blo);
		var li = $$("<li></li>").attr('class','accordion-item').append(a).append(div_con);
		ul.append(li);
	});
	$$(".reclist").append(ul);
>>>>>>> 4d6670b15b19063e84435cf9327115e1187f88b5
}

function completeCheck(did){
	$$.each(devices,function(index,value){
		$$.each(value.devices,function(ind,val){
			if(val.id == did){
				try {
					progress[index][ind]=1;
				} catch(err) {
					alert("err");
					return false
				} 
				return false
			}
		});
	});
}