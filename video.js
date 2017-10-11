
var url_0 = 'AKee2nhLsy8';
var url_1 = '68cNLdpDlNc';
var url_2 = 'Kmcc1UymcUM';
var url_3 = 'faOUqk5Baf0';
var url_now ='faOUqk5Baf0';


function getId(numero) { 
var myVideo = document.getElementsByClassName("premVideo")[0]; 

switch (numero){
    case 0: url_now = url_0; break;
    case 1: url_now = url_1; break;
    case 2: url_now = url_2; break;
    case 3: url_now = url_3; break;
}
document.getElementsByClassName("premVideo")[0].src = "https://www.youtube.com/embed/"+ url_now +"?controls=1&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;playlist="+ url_now +"&amp;showinfo=0";
document.relaod();
} 

function getTitle(videoId,number) {
var ytApiKey = "AIzaSyBPWD_e5dWJvXKOknGuPkDY9Hbdkyur5GA";
jQuery.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoId + "&key=" + ytApiKey, function(data) {
document.getElementsByClassName("videoTitle")[number].innerHTML = data.items[0].snippet.title;
 });   
}

function myFunction() {
    if (document.getElementById("rfid").value.length == 8){
        var rfid = document.getElementById("rfid").value;
         alert(rfid);
        var sql = "INSERT INTO \"SCREEN\".\"VIDEO_BADGE\" (RFID,ID_URL,DATE_BADGE) VALUES('" + rfid + "','" + url_now + "', CURRENT_TIMESTAMP)";
        var dbconn = jQuery.db.getConnection();
        //$.hdb.getConnection();
        var pstmt = dbconn.prepareStatement(sql);
        pstmt.execute();
        dbconn.commit();
        dbconn.close();
        document.getElementById("rfid").value = "";
     }
    }