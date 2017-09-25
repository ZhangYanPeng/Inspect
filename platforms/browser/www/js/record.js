function initRecord(did){
	$$.ajax({
		async : true,
		cache : false,
		type : 'GET',
		crossDomain : true,
		url : baseUrl + 'loadCheckItem',
		data :  { id: did},
		dataType : "json",
		contentType : "application/x-www-form-urlencoded; charset=utf-8",
		error : function(e,status) {
			alert("err");
			loadCheckItem(did);
		},
		success : function(data) {
			$$(".check-item").html("");
			$$.each(data,function(index,value){
				var in_it = $$('<input></input>').attr({type : 'checkbox', name : 'ci-option', value : value.id});
				var d_icon = $$('<div></div>').attr('class','item-media').append($$('<i></i>').attr('class','icon icon-form-checkbox'));
				var d_con = $$('<div></div>').attr('class','item-inner').append($$('<div></div>').attr('class','item-title').append(value.description));
				var la = $$('<label></label>').attr('class','label-checkbox item-content').append(in_it).append(d_icon).append(d_con);
				var li = $$('<li></li>').append(la);
				$$(".check-item").append(li);
			});
		}
	});
}