

$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let millisecsPerDay=24*60*60*1000
    var topicCount = topic.length;
    
    //透過""/"分割
    for(var x=0;x<topicCount;x++){
        var dateSplit = (new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().split("/");
        $("#courseTable").append(
            "<tr>"+
            `<td>${x+1}</td>`+
            `<td>${dateSplit[1]+"/"+dateSplit[2]}</td>`+
            `<td>${topic[x]}</td>`+
            "</tr>");
        }
});