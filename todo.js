let xhttp = new XMLHttpRequest;
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
xhttp.onreadystatechange= function(){
    if(this.readyState==4 && this.status == 200){
        var output = JSON.parse(this.responseText);
        var arrayy=""
        for(let i=0;i<output.length;++i){
            arrayy += "<tr> <td>" + output[i].id + "</td>"+"<td>" + output[i].title + "</td>";
            if(output[i].completed==true){
                let elements = document.createElement("input");
                // elements.type = 'checkbox';
                elements.setAttribute("id",`cb${i}`)
                arrayy += "<td>" + elements + "</td> </tr>";
                console.log(elements.id)
            }
            else{
                let elementz = document.createElement("input");
                elementz.type = 'checkbox';
                elementz.setAttribute("id",`cb${i}`)
                arrayy += "<td>" + elementz + "</td> </tr>";
                console.log(elementz.id);
            }
        }
        document.getElementById("todo").innerHTML=arrayy;
    }
}
