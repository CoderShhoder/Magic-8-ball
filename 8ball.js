var ansar=["Ssup..?","Yes","No","Maybe","Count on it","Ask Your Momma..","Hard Luck","It is certain","Concentrate and ask again","Better not tell you now"];
var i;
var btn=document.getElementById("btn");
var ans=document.getElementById("answer");
var ques=document.getElementById("question");
var inputValue="";


function adddInput(e){
    inputValue=e.target.value;
}

ques.addEventListener('input',adddInput);

btn.addEventListener('click',function(){
    if(inputValue!==undefined && inputValue!==null && inputValue!==''){
        var answer=ansar[Math.floor(ansar.length * Math.random())];
        ans.value="   "+answer;
    }
    else{
        alert("empty");
    }
});