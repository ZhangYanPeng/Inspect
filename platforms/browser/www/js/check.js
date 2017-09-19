function loadDevice() {
	var pc = new Array();
	var i = 0;
	for(var p in plan_content){
		if( plan_content[p].length > 0){
			pc[i]= p;
			i = i+1;
		}
	}
	console.log(pc);

	$$.ajax({
		async : true,
		cache : false,
		type : 'GET',
		crossDomain : true,
		traditional: true,
		url : baseUrl + 'loadCheckDevice',
		data : { devices : JSON.stringify(pc), type : check_type},
		dataType : "json",
		contentType : "application/x-www-form-urlencoded; charset=utf-8",
		error : function(e,status) {
			myApp.alert("加载失败，请重试","抱歉");
		},
		success : function(data) {
			//加载所有待检查设备

		}
	});
}