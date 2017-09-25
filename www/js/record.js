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
			$$("#images").html("");
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

function takephoto(){
	openCamera(null);
}

function openCamera(selection) {
	console.log(Camera.PictureSourceType.CAMERA);
    var srcType = Camera.PictureSourceType.CAMERA;
    var options = setOptions(Camera.PictureSourceType.CAMERA);

    navigator.camera.getPicture(function cameraSuccess(imageUri) {

        createNewFileEntry(imageUri);
        // You may choose to copy the picture, save it somewhere, or upload.

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

    }, options);
}

function createNewFileEntry(imgUri) {
    window.resolveLocalFileSystemURL(cordova.file.cacheDirectory, function success(dirEntry) {
        // JPEG file
        var timestamp=new Date().getTime()；
        dirEntry.getFile(timestamp+".jpeg", { create: true, exclusive: false }, function (fileEntry) {

            // Do something with it, like write to it, upload it, etc.
            writeFile(fileEntry, imgUri);
            // displayFileData(fileEntry.fullPath, "File copied to");
		    var img = $$("<img></img>").attr('src':imgUri, "height", 100 );
		    var op = $$("<a></a>").attr('href','javascript:delImg('+timestamp+')'.append("删除");
		    var li = $$("<li></li>").attr("id",timestamp).append(img).append(op);
		    $$("#images").append(li);
        }, onErrorCreateFile);

    }, onErrorResolveUrl);
}

function delImg(id){
	$$("#"+id).remove();
}

function setOptions(srcType) {
    var options = {
        // Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    return options;
}