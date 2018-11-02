// This is a JavaScript file

  // Initialize Firebase
var config = {
    apiKey: "AIzaSyBqclQqEQMWKb3e9Ax60Ky1CjaparvMlzM",
    authDomain: "forcbt-1d36c.firebaseapp.com",
    databaseURL: "https://forcbt-1d36c.firebaseio.com",
    projectId: "forcbt-1d36c",
    storageBucket: "forcbt-1d36c.appspot.com",
    messagingSenderId: "592642704695"
};
firebase.initializeApp(config);
firebase.auth().signInWithEmailAndPassword('mukaino.keputasanta24@gmail.com', 'testkeigo').catch(function(error) {
        console.log(error.message);
});

var database = firebase.database();

//Question属性の場所にhtmlを挿入 //不要
//database.ref("/4/0").on("value",function(v){
//    $("#question").html("<p>Nextを押して問題開始</p>");
//});

///////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////


var NumofTotalQuestion = 500;   //問題数・・・いつか自動化したい
var BeforeQuestionNum = 0;
var NowQuestionNum = 0;
var accessBrance = "/3/" + NowQuestionNum;
var alternativesNum = 0;
var showScore = 0;


function WriteScore0()
{
  database.ref(accessBrance).once("value",function(v){
  database.ref(accessBrance).update({score: "0"});
  });
  console.log("w0");
}

function WriteScore1()
{
  database.ref(accessBrance).once("value",function(v){
  database.ref(accessBrance).update({score: "1"});
  });
    console.log("w1");
}

function UpdateQuestionNum(){
  BeforeQuestionNum = NowQuestionNum;
  NowQuestionNum = Math.floor(Math.random() * 6000) % (NumofTotalQuestion + 1);
  accessBrance = "/4/" + NowQuestionNum;
}

//選択肢の無い問題では選択肢を表示しないための関数
function HideAlternatives(){;
    for(var i = 1; i <= 12; i++)
    {
        alternativesNum = "al" + i;
        document.getElementById(alternativesNum).style.display = "none";
    }
}

//選択肢表示
function ShowAiternatives(){
    database.ref(accessBrance).on("value",function(v){
        for(var i = 1; i <= v.val().alternative; i++){
            alternativesNum = "al" + i;
            document.getElementById(alternativesNum).style.display = "block";
            $("#" + alternativesNum).html("<p>" + v.val()[alternativesNum] + "</p>");
        }
    });
}

//答えを隠す
function HideAnswer(){
    document.getElementById("answer").style.display = "none";
}

//解説を隠す
function HideCommentary(){
    document.getElementById("comment").style.display = "none";
}

function UpdateScore(){
  //スコア
      database.ref(accessBrance).on("value",function(v){
      $("#score").html("<p>" + v.val().score + "</p>");
    });
}

function UpdateQuestion(){

    database.ref(accessBrance).on("value",function(v){
      //問題番号
      $("#Qnumber").html("<h4>" + NowQuestionNum + "</h4>");
      //問題文
      $("#question").html("<p>" + v.val().question + "</p>");
      //イラスト
      if(v.val().picture != "none"){
          document.getElementById("picture").style.display = "block";
          $("#picture").html("<img src=\"" + v.val().picture + "\">");
      }
      else{
          document.getElementById("picture").style.display = "none";
      }
    });
  //選択肢
    HideAlternatives();
    ShowAiternatives();
  //解答・解説
    HideAnswer();
    HideCommentary();
}

//答え表示
function ShowAnswer(){
    document.getElementById("answer").style.display = "block";
    database.ref(accessBrance).on("value",function(v){
        $("#answer").html("<p>" + v.val().answer + "</p>");
    });
}

//解説表示
function ShowCommentary(){
    document.getElementById("comment").style.display = "block";
    database.ref(accessBrance).once("value",function(v){
        if(v.val().comment != "none")
            $("#comment").html("<p>" + v.val().comment + "</p>");
        else
            $("#comment").html("");
    });
}

////////////////////////////////////////////////////////////////////////

//問題の更新処理
function AllUpdate(){

  //次の問題へ
  UpdateQuestionNum();
  UpdateQuestion();
  UpdateScore();
}

//答え、解説の表示
function ShowAllAnswer(){
    ShowAnswer();
    ShowCommentary();
}



function CheckOn(){
  WriteScore1();
  UpdateScore();
}

function CheckOff(){
  WriteScore0();
  UpdateScore();
}

