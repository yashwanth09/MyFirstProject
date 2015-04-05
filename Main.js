<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<script src="http://code.jquery.com/jquery-1.8.2.js"></script>
<script src="http://code.jquery.com/ui/1.9.1/jquery-ui.js"></script>
<link rel="stylesheet" type="text/css" href="design.css">
<script>
$(document).ready(function(){

$('#tabs').tabs().addClass('ui-tabs-vertical ui-helper-clearfix');
$("a[name=tab]").on("click", function () { 
    var a = $(this).attr("data-index"); 
    if(a==0)
    {
        doGET("Bramhanandam","a")
    }
    if(a==1)
    {
        doGET("ali","b")
    }
    if(a==2)
    {
        doGET("sapthagiri","c")
    }
    if(a==3)
    {
        doGET("sunil","d")
    } 
});
});
function doGET(value,id)
{
 var xmlhttp;
if (window.XMLHttpRequest)
{
 xmlhttp=new XMLHttpRequest();
}
else
{
 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function() //This part is actually executed last
{
 if (xmlhttp.readyState==4 && xmlhttp.status==200) // Was the request processed successfully?
{
 var serverResponse = JSON.parse(xmlhttp.responseText);
 parsingJson(serverResponse,id)
}
}
//xmlhttp.open("GET","https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyDAqXW4B2w6DuwlvWrXHpotZ3yU6wLC73g&part=snippet,contentDetails,statistics,status",true);

xmlhttp.open("GET","https://www.googleapis.com/youtube/v3/search?part=snippet&q="+value+"+comedy+scenes&type=video&videoCaption=closedCaption&key=AIzaSyDAqXW4B2w6DuwlvWrXHpotZ3yU6wLC73g",true);
xmlhttp.send();
}
function parsingJson(jsonString,id)
{
	//document.write("<p>"+jsonString.items+"</p>")
	for(i=0;i<jsonString.items.length;i++)
	{
		//document.write(jsonString)
		//document.write(jsonString.items.length);
		//document.write(jsonString.items[i].id.videoId);
	    yash="#"+id
		$(yash).append("<iframe src=http://www.youtube.com/embed/"+jsonString.items[i].id.videoId+"></iframe><br>")
	}
}
</script>
<div id="tabs">
    <ul>
        <li>
            <a data-index="0" name="tab" class="Bm" href="#a">Bramhanadam comedy videos</a>
        </li>
        <li>
            <a  data-index="1" name="tab" class="Ali" href="#b">Ali Comedy Videos</a>
        </li>
        <li>
            <a  data-index="2" name="tab" class="Ms" href="#c">Sapthagiri Comedy Videos</a>
        </li>
        <li>
            <a data-index="3" name="tab" class="Sunil" href="#d">Sunil comedy videos</a>
        </li>
    </ul>
    <div id="a">
        
    </div>
    <div id="b">
        
    </div>
    <div id="c">
       
    </div>
    <div id="d">
       
    </div>
</div>
