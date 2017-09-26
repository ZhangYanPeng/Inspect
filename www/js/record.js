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
    var srcType = Camera.PictureSourceType.CAMERA;
    var options = setOptions(Camera.PictureSourceType.CAMERA);

    navigator.camera.getPicture(function cameraSuccess(imageUri) {

        createNewFileEntry(imageUri);
        // You may choose to copy the picture, save it somewhere, or upload.

    }, function cameraError(error) {
        console.log("Unable to obtain picture: " + error, "app");

    }, options);
}

function createNewFileEntry(imgUri) {
    window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function success(dirEntry) {
        // JPEG file
        var timestamp=new Date().getTime();
        dirEntry.getFile(timestamp+".jpg", { create: true, exclusive: false }, function (fileEntry) {

            // Do something with it, like write to it, upload it, etc.
            writeFile(fileEntry, imgUri);
            // displayFileData(fileEntry.fullPath, "File copied to");
            var img = $$("<img></img>").attr({'src': imgUri, width: '100%'});
		    var div_con = $$("<div></div>").attr('class','card-content').append(img);
		    var op = $$("<a></a>").attr('href','javascript:delImg('+timestamp+')').attr('class','link').append("删除");
		    var div_foot = $$("<div></div>").attr('class','card-footer').append(op);
		    var div_card = $$("<div></div>").attr({'class':'card demo-card-header-pic','width': '200'}).append(div_con).append(div_foot);
		    var div_item = $$("<div></div>").attr("id",timestamp).append(div_card);
		    $$("#images").append(div_item);
        }, function(){alert("Create File Fail");});

    }, function(){alert("Resovel url Fail");});
}

function delImg(id){
	$$("#"+id).remove();
	window.resolveLocalFileSystemURL(cordova.file.dataDirectory+id+".jpg", function (fileEntry) {  
		fileEntry.remove(function () {  
			console.log('delete success');  
		}, function (err) {  
			console.error(err);  
		}, function () {  
			console.log('file not exist');  
		});  
	});
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
        correctOrientation: true,  //Corrects Android orientation quirks
    }
    return options;
}

function writeFile(fileEntry, dataObj) {
    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function (fileWriter) {

        fileWriter.onwriteend = function() {
            console.log("Successful file write...");
        };

        fileWriter.onerror = function (e) {
            console.log("Failed file write: " + e.toString());
        };

        // If data object is not passed in,
        // create a new Blob instead.
        if (!dataObj) {
            dataObj = new Blob(['some file data'], { type: 'text/plain' });
        }

        fileWriter.write(dataObj);
    });
}