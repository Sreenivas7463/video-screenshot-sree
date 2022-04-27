var videoId = 'video';
    var scaleFactor = 0.5;
    var snapshots = [];
	
	
function loadvid()
{
   var video0 = document.getElementById('vidurl').value;
   document.getElementById('video').setAttribute('src', video0);
   
}

    /**
     * Captures a image frame from the provided video element.
     *
     * @param {Video} video HTML5 video element from where the image frame will be captured.
     * @param {Number} scaleFactor Factor to scale the canvas element that will be return. This is an optional parameter.
     *
     * @return {Canvas}
     */
    function capture(video, scaleFactor) {
        if (scaleFactor == null) {
            scaleFactor = 1;
        }
        var w = video.videoWidth * scaleFactor;
        var h = video.videoHeight * scaleFactor;
        var canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
		
		var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, w, h);
        return canvas;
    }
	


    /**
     * Invokes the <code>capture</code> function and attaches the canvas element to the DOM.
     */
    function shoot() {
        var video = document.getElementById(videoId);
        var output = document.getElementById('output');
        var canvas = capture(video, scaleFactor);
        canvas.onclick = function() {
            window.open(this.toDataURL(image/jpg));
        };
        snapshots.unshift(canvas);
        output.innerHTML = '';
		
        for (var i = 0; i < 100000; i++) {
            output.appendChild(snapshots[i]);
		

        }
    }
	

	
	function cappictures()
	{
	var captureit = document.getElementById('cit');
    captureit.click();
   }
	
	var vid = document.getElementById("video");
	var myInterval='';
	vid.onplay = function() {
	  //alert("The video has started to play");
	 myInterval = setInterval(cappictures, 1000);
	};
		
	vid.onpause  = function() {
	  
	  clearInterval(myInterval);

	};


(function() {
  var captureit = document.getElementById('cit');
  captureit.click();
})();