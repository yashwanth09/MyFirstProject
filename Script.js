
  $(function() 
    {
 $("#mytable tr a").click(function()
    {
     var x=$(this).text();
     if(x=="Bramhanandam")
     {
     doGET(x,"Bramhi")
     }
     if(x=="Ali")
     {
     doGET(x,"Ali")
     }
     if(x=="MSnarayana")
     {
     doGET(x,"MSnarayana")
     }
     if(x=="saptagiri")
     {
     doGET(x,"saptagiri")
     }
     if(x=="dharmarvaramsubramanyam")
     {
     doGET(x,"dharmarvaramsubramanyam")
     }
     if(x=="krishnabagvan")
     {
     doGET(x,"krishnabagvan")
    }
    if(x=="venumadhav")  
     {
     doGET(x,"venumadhav")
     } 
      if(x=="sunil")  
     {
     doGET(x,"sunil")
     } 

        /*var a = $(this).attr("data-index"); 
        if(a==0)
        {
            //alert("bramhi")
            doGET("Bramhanandam","tabs-1")
        }
        if(a==1)
        {
        	//alert("ali")
            doGET("ali","tabs-2")
        }
        if(a==2)
        {
     //       alert("Msnarayana")
            doGET("sapthagiri","tabs-3")
        }
        if(a==3)
        {
            doGET("sunil","tabs-4")
        }
        if(a==4)
        {
            doGET("MSnarayana","tabs-5")
        }
        if(a==5)
        {
            doGET("Dharmavarpu subramanyam","tabs-6")
        } 
    });*/
  });
  })
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

  xmlhttp.open("GET","https://www.googleapis.com/youtube/v3/search?part=snippet&q="+value+" Comedy scenes&key=AIzaSyDAqXW4B2w6DuwlvWrXHpotZ3yU6wLC73g",true);
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
  	    divid="#"+id
        //alert(divid)
  	    $(divid).append("<p>"+jsonString.items[i].snippet.title+"</p>")
  		$(divid).append("<iframe src=http://www.youtube.com/embed/"+jsonString.items[i].id.videoId+"></iframe><br>")
  		
  	}
  }
