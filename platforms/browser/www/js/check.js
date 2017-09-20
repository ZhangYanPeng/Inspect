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
			console.log(e);
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

		$$.each(value.devices,function(ind,val){
			if( progress[index][ind] == 0 ){
				console.log(val);
				var unc_li_item = $$("<li></li>").append(val.name);
				unc_ul_item.append(unc_li_item);
			}else{
				console.log(val);
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