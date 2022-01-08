function getDetails(){

    var xmlHttp =  new XMLHttpRequest();

    xmlHttp.open("GET","http://localhost/JSON-PROJECT/mobile.json",false);

    xmlHttp.send();

    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){


        var result = xmlHttp.responseText;

        //alert(result);

       // document.getElementById("show").innerHTML=result;

       var o = JSON.parse(result);

       //alert(o.length);

       var data = "";

       for(var i=0;i<o.length;i++){

           data+='<table>\
                  <tr><th>MODEL</th><td>' + o[i]["model"] + '</td><td rowspan=8><img src= ' + o[i]["image"] + ' class=img></td></tr>\
                  <tr><th>BRAND</th><td>' + o[i]["brand"] + '</td></tr>\
                  <tr><th>MRP</th><td>' + o[i]["mrp"] + '</td></tr>\
                  <tr><th>PRICE</th><td>' + o[i]["price"] + '</td></tr>\
                  <tr><th>RAM</th><td>' + o[i]["ram"] + '</td></tr>\
                  <tr><th>STORAGE</th><td>' + o[i]["storage"] + '</td></tr>\
                  <tr><th>CAMERA</th><td>' + o[i]["camera"] + '</td></tr>\
                  <tr><th>ISAVALIBLE</th><td>' + o[i]["isAvailable"] + '</td></tr>\
                  </table>\
                  ';
       }
           document.getElementById("show").innerHTML=  data;
       
      


       }
}