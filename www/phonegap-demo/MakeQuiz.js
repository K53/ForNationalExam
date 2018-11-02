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


function UpdateQnum(idname){
  // value値を取得する
  var obj = document.getElementById(idname);
  var result = obj.value;
  
    database.ref("/" + result + "/0").on("value",function(v){
      NextQnum = Number(v.val().length) + 1;
      $("#Qnumber").html("<h4>" + NextQnum + "</h4>");
    });
}

function UpdateAlts(idname){
    var result = document.getElementById(idname).value;

    //for(var i = 1; i <= result; i++){
    //}
}



function init() {
    // the next line makes it impossible to see Contacts on the HTC Evo since it
    // doesn't have a scroll button
    // document.addEventListener("touchmove", preventBehavior, false);
    document.addEventListener("deviceready", deviceInfo, true);
}

var NextQnum = 0;

function UpdateDBalt0(){
  var obj_num = document.getElementById('pulldown');
  var obj_quiz = document.getElementById('quiz');
  var obj_ans = document.getElementById('ans');
  var obj_com = document.getElementById('com');

  var result_num = obj_num.value;
  var result_quiz = obj_quiz.value;
  var result_ans = obj_ans.value;
  var result_com = obj_com.value;

    database.ref("/" + result_num + "/0").on("value",function(v){
    NextQnum = Number(v.val().length) + 1;
  });
    database.ref("/" + result_num + "/" + NextQnum).set({
      alternative: "0",
      answer: result_ans,
      comment: result_com,
      picture: "none",
      question: result_quiz,
      score: "0"
    });
    database.ref("/" + result_num + "/0").set({
      length: NextQnum,
      score: "0"
    });
}

function UpdateDBalt1(){
  var obj_num = document.getElementById('pulldown');
  var obj_quiz = document.getElementById('quiz');
  var obj_ans = document.getElementById('ans');
  var obj_com = document.getElementById('com');
  var obj_al1 = document.getElementById('al1');

  var result_num = obj_num.value;
  var result_quiz = obj_quiz.value;
  var result_ans = obj_ans.value;
  var result_com = obj_com.value;
  var result_al1 = obj_al1.value;

    database.ref("/" + result_num + "/0").on("value",function(v){
    NextQnum = Number(v.val().length) + 1;
  });
    database.ref("/" + result_num + "/" + NextQnum).set({
      alternative: "1",
      al1: result_al1,
      answer: result_ans,
      comment: result_com,
      picture: "none",
      question: result_quiz,
      score: "0"
    });
    database.ref("/" + result_num + "/0").set({
      length: NextQnum,
      score: "0"
    });
}

function UpdateDBalt2(){
  var obj_num = document.getElementById('pulldown');
  var obj_quiz = document.getElementById('quiz');
  var obj_ans = document.getElementById('ans');
  var obj_com = document.getElementById('com');
  var obj_al1 = document.getElementById('al1');
  var obj_al2 = document.getElementById('al2');

  var result_num = obj_num.value;
  var result_quiz = obj_quiz.value;
  var result_ans = obj_ans.value;
  var result_com = obj_com.value;
  var result_al1 = obj_al1.value;
  var result_al2 = obj_al2.value;
  
    database.ref("/" + result_num + "/0").on("value",function(v){
    NextQnum = Number(v.val().length) + 1;
  });
    database.ref("/" + result_num + "/" + NextQnum).set({
      alternative: "2",
      al1: result_al1,
      al2: result_al2,
      answer: result_ans,
      comment: result_com,
      picture: "none",
      question: result_quiz,
      score: "0"
    });
    database.ref("/" + result_num + "/0").set({
      length: NextQnum,
      score: "0"
    });
}
function UpdateDBalt3(){
  var obj_num = document.getElementById('pulldown');
  var obj_quiz = document.getElementById('quiz');
  var obj_ans = document.getElementById('ans');
  var obj_com = document.getElementById('com');
  var obj_al1 = document.getElementById('al1');
  var obj_al2 = document.getElementById('al2');
  var obj_al3 = document.getElementById('al3');

  var result_num = obj_num.value;
  var result_quiz = obj_quiz.value;
  var result_ans = obj_ans.value;
  var result_com = obj_com.value;
  var result_al1 = obj_al1.value;
  var result_al2 = obj_al2.value;
  var result_al3 = obj_al3.value;
  
    database.ref("/" + result_num + "/0").on("value",function(v){
    NextQnum = Number(v.val().length) + 1;
  });
    database.ref("/" + result_num + "/" + NextQnum).set({
      alternative: "3",
      al1: result_al1,
      al2: result_al2,
      al3: result_al3,
      answer: result_ans,
      comment: result_com,
      picture: "none",
      question: result_quiz,
      score: "0"
    });
    database.ref("/" + result_num + "/0").set({
      length: NextQnum,
      score: "0"
    });
}
function UpdateDBalt4(){
  var obj_num = document.getElementById('pulldown');
  var obj_quiz = document.getElementById('quiz');
  var obj_ans = document.getElementById('ans');
  var obj_com = document.getElementById('com');
  var obj_al1 = document.getElementById('al1');
  var obj_al2 = document.getElementById('al2');
  var obj_al3 = document.getElementById('al3');
  var obj_al4 = document.getElementById('al4');

  var result_num = obj_num.value;
  var result_quiz = obj_quiz.value;
  var result_ans = obj_ans.value;
  var result_com = obj_com.value;
  var result_al1 = obj_al1.value;
  var result_al2 = obj_al2.value;
  var result_al3 = obj_al3.value;
  var result_al4 = obj_al4.value;
  
    database.ref("/" + result_num + "/0").on("value",function(v){
    NextQnum = Number(v.val().length) + 1;
  });
    database.ref("/" + result_num + "/" + NextQnum).set({
      alternative: "4",
      al1: result_al1,
      al2: result_al2,
      al3: result_al3,
      al4: result_al4,
      answer: result_ans,
      comment: result_com,
      picture: "none",
      question: result_quiz,
      score: "0"
    });
    database.ref("/" + result_num + "/0").set({
      length: NextQnum,
      score: "0"
    });
}
function UpdateDBalt5(){
  var obj_num = document.getElementById('pulldown');
  var obj_quiz = document.getElementById('quiz');
  var obj_ans = document.getElementById('ans');
  var obj_com = document.getElementById('com');
  var obj_al1 = document.getElementById('al1');
  var obj_al2 = document.getElementById('al2');
  var obj_al3 = document.getElementById('al3');
  var obj_al4 = document.getElementById('al4');
  var obj_al5 = document.getElementById('al5');  

  var result_num = obj_num.value;
  var result_quiz = obj_quiz.value;
  var result_ans = obj_ans.value;
  var result_com = obj_com.value;
  var result_al1 = obj_al1.value;
  var result_al2 = obj_al2.value;
  var result_al3 = obj_al3.value;
  var result_al4 = obj_al4.value;
  var result_al5 = obj_al5.value;
  
  
    database.ref("/" + result_num + "/0").on("value",function(v){
    NextQnum = Number(v.val().length) + 1;
  });
    database.ref("/" + result_num + "/" + NextQnum).set({
      alternative: "5",
      al1: result_al1,
      al2: result_al2,
      al3: result_al3,
      al4: result_al4,
      al5: result_al5,
      answer: result_ans,
      comment: result_com,
      picture: "none",
      question: result_quiz,
      score: "0"
    });
    database.ref("/" + result_num + "/0").set({
      length: NextQnum,
      score: "0"
    });
}

function ClearAllBox(){
    document.getElementById('quiz').value = '';
    document.getElementById('ans').value = '';
    document.getElementById('com').value = '';
    document.getElementById('pict').value = '';
    document.getElementById('alter').value = '';
    document.getElementById('al1').value = '';
    document.getElementById('al2').value = '';
    document.getElementById('al3').value = '';
    document.getElementById('al4').value = '';
    document.getElementById('al5').value = '';
}


function WriteDB(){
  var alt_num = Number(document.getElementById('alter').value);
  switch (alt_num){
    case 0:
      UpdateDBalt0();
      break;
    case 1:
      UpdateDBalt1();
      break;
    case 2:
      UpdateDBalt2();
      break;
    case 3:
      UpdateDBalt3();
      break;
    case 4:
      UpdateDBalt4();
      break;      
    case 5:
      UpdateDBalt5();
      break;
    default:
      UpdateDBalt0();
      break;       
  }
  ClearAllBox();
}