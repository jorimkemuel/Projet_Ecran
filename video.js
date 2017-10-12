var url_0 = 'AKee2nhLsy8';
var url_1 = '68cNLdpDlNc';
var url_2 = 'Kmcc1UymcUM';
var url_3 = 'faOUqk5Baf0';
var urlNow ='faOUqk5Baf0';

//function to change video
function getId(numero) { 

document.getElementById("rfid").focus();
//document.getElementsByClassName("text_bottom")[0].innerHTML="";
//document.getElementsByClassName("input")[0].innerHTML="VEUILLEZ APPROCHER VOTRE BADGE"

var myVideo = document.getElementsByClassName("premVideo")[0]; 

switch (numero){
    case 0: urlNow = url_0; break;
    case 1: urlNow = url_1; break;
    case 2: urlNow = url_2; break;
    case 3: urlNow = url_3; break;
}
document.getElementsByClassName("premVideo")[0].src = "https://www.youtube.com/embed/"+ urlNow +"?controls=1&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;playlist="+ urlNow +"&amp;showinfo=0";
} 

//function to get the title of the video by using Youtube API (google api support)
function getTitle(videoId,number) {
var ytApiKey = "AIzaSyBPWD_e5dWJvXKOknGuPkDY9Hbdkyur5GA";
jQuery.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoId + "&key=" + ytApiKey, function(data) {
document.getElementsByClassName("videoTitle")[number].innerHTML = data.items[0].snippet.title;
 });   
}

//function to write data into the table
function myFunction(urlNow) {
    if (document.getElementById("rfid").value.length == 8){
        var rfid = document.getElementById("rfid").value; 
        /*try {
        var sqlUrl = "SELECT COUNT(*) FROM \"SCREEN\".\"VIDEO_BADGE\" WHERE ID_VIDEO_BADGE = "+ rfid + " AND ID_URL = " +urlNow;
        var sql = "INSERT INTO \"SCREEN\".\"VIDEO_BADGE\" (RFID,ID_URL,DATE_BADGE) VALUES('" + rfid + "','" + urlNow + "', CURRENT_TIMESTAMP)";
        var dbconn = $.db.getConnection();
        //$.hdb.getConnection();
        var pstmt = dbconn.prepareStatement(sqlUrl);
        pstmt.execute();
        var rs = pstmt.getResultSet();
        if(rs[0] === 0){
        pstmt = dbconn.prepareStatement(sql);
        pstmt.execute();
        }
        dbconn.commit();
        dbconn.close();
    } catch (e) {
        jQuery.response.status =  jQuery.net.http.INTERNAL_SERVER_ERROR;
        jQuery.response.setBody(e.toString());
    }*/
        //document.getElementById("mail").click();
        document.getElementById("rfid").value = "";
        document.getElementsByClassName("input")[0].innerHTML="";
        document.getElementsByClassName("text_bottom")[0].innerHTML="<p>TOUCHEZ<br/>Pour récupérer ce contenu</p>";
        document.getElementById("rfid").blur();
        $('#myModal').modal('show');
        document.getElementById("rfid").focus();
     }

    }

//function to redefine the outputs after the touch
/*function toucher(){
    document.getElementsByClassName("text_bottom")[0].innerHTML="";
    document.getElementsByClassName("input")[0].innerHTML="VEUILLEZ APPROCHER VOTRE BADGE";
    document.getElementById("rfid").focus();

}*/

function toAutoFocus(){
    document.getElementById("rfid").focus();
}