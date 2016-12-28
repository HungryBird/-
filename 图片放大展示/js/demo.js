window.onload=function(){
	document.getElementById('content').getElementsByTagName('ul')[0].getElementsByTagName('a')[0].className='active';
	var as=document.getElementById('content').getElementsByTagName('ul')[0].getElementsByTagName('a');
	var oImg=document.getElementById('content').getElementsByTagName('ul')[0].getElementsByTagName('img');
	var show=document.getElementById('show');
	var imgZoom=show.getElementsByClassName('imgZoom')[0];
	var magnify=document.getElementById('magnify');
	var magnifyImg=magnify.getElementsByTagName('img')[0];
	!function(){
		oImg[0].style.left=-2+'px';
		oImg[0].style.top=-2+'px';
		magnifyImg.src='img/demo0.jpg';
	}();

	for(var k=0;k<oImg.length;k++){
		!function(k){
			as[k].onmouseover=function(e){
				for(var j=0;j<as.length;j++){
					as[j].className='';
					as[j].getElementsByTagName('img')[0].style.left=0;
					as[j].getElementsByTagName('img')[0].style.top=0;
				}
				this.className='active';
				this.getElementsByTagName('img')[0].style.left=-2+'px';
				this.getElementsByTagName('img')[0].style.top=-2+'px';
				show.getElementsByTagName('img')[0].src='img/demo'+k+'.jpg';
				magnifyImg.src='img/demo'+k+'.jpg';
			}
		}(k);
	};
	show.onmouseover=function(){
		imgZoom.style.display='block';
		magnify.style.display='block';
	}
	show.onmouseout=function(){
		imgZoom.style.display='none';
		magnify.style.display='none';
	}
	show.onmousemove=function(e){
		var e=e||window.event;
		var mouseX=e.clientX-show.offsetLeft;//鼠标相对于相框左边的距离
        var mouseY=e.clientY-show.offsetTop;
        if(mouseX<imgZoom.offsetWidth/2){
        	mouseX=imgZoom.offsetWidth/2;
        }
        if(mouseY<imgZoom.offsetHeight/2){
        	mouseY=imgZoom.offsetHeight/2;
        }
        if(mouseX>show.offsetWidth-imgZoom.offsetWidth/2){
        	mouseX=show.offsetWidth-imgZoom.offsetWidth/2;
        }
        if(mouseY>show.offsetHeight-imgZoom.offsetHeight/2){
        	mouseY=show.offsetHeight-imgZoom.offsetHeight/2
        }
        imgZoom.style.left=mouseX-imgZoom.offsetWidth/2+'px';
    	imgZoom.style.top=mouseY-imgZoom.offsetHeight/2+'px';
    	magnifyImg.style.left=-2*imgZoom.offsetLeft+'px';
    	magnifyImg.style.top=-2*imgZoom.offsetTop+'px';
	}
};