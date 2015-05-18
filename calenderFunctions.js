
function createWeekTableBody(){
    
    alert("createWeekTableBody");
    
    var table = document.getElementById("week-overview");
    var tbodys = table.getElementsByTagName("tbody");
    var tbody = tbodys[0];
    
    for( var i = 0; i < 24; i++ ){
        var row  = document.createElement("tr");
        var time = document.createElement("td");
        
        if( i < 10 ){
            time.innerText = "0"+ i + ":00";
        }else{
            time.innerText = i + ":00";
        }
        
        time.id = "t"+1;
        
        row.appendChild(time);
        for( var j = 0; j < 7; j++ ){
            var empty = document.createElement("td");
            
            empty.id = "c"+i+"-"+j;
            
            row.appendChild(empty);  
        }
        tbody.appendChild(row);
    }
    
    
    
    
}