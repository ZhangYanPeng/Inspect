function login(){
	$$.ajax({
		async : true,
		cache : false,
		type : 'GET',
		crossDomain : true,
		url : baseUrl + 'login',
		data : {username : $$('#username').val(),
			password : $$('#password').val()},
		dataType : "json",
		contentType : "application/x-www-form-urlencoded; charset=utf-8",
		error : function(e,status) {
			alert(e);
			alert(status);
			myApp.alert("登陆失败，请重试","抱歉");
		},
		success : function(data) {
			if(data.id!=-1){
				storeUserIdentification(data);
				myApp.closeModal(".login-screen");
			}else{
				myApp.alert("您输入的账号或密码错误，请重试","抱歉");
			}
		}
	});
}