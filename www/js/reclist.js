function showRecords(){
	$$(".rlist").html("");
	var ul = $$("<ul></ul>");
	$$.each(records,function(index,value){
		if(JSON.parse(value.account).id == account.id){
			var div_ti = $$("<div></div>").attr('class','item-title').append(value.date);
			var div_inn = $$("<div></div>").attr('class','item-inner').append(div_ti);
			var a = $$("<a></a>").attr('href',"#").attr('class','item-content item-link').append(div_inn);

			var pc= $$("<p></p>").append(value.cides);
			var pr = $$("<p></p>").append(value.record);
			var pic = $$("<p></p>");
			$$.each(value.pictures,function(ind,val){
				var img = $$("<img></img>").attr('src',val).attr('width','50em');
				pic.append(img);
			});
			var div_blo = $$("<div></div>").attr('class','content-block').append(pc).append(pr).append(pic);
			var div_con = $$("<div></div>").attr('class','accordion-item-content').append(div_blo);
			var li = $$("<li></li>").attr('class','accordion-item').append(a).append(div_con);
			$$(".rlist").append(li);
			ul.append(li);
		}
	});
	$$(".rlist").append(ul);
}