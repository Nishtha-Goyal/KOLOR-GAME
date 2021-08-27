
var score=0
var round=0
const arr=["yellow","red","blue","green","orange","purple"]
var ans=arr[0]
function counter() {
  var i = 0;
  setInterval(function() {
    document.getElementById("time").innerHTML="Time: "+ i+"sec";
    i++;
  }, 1000);
} // End

counter()
function Update()
{
    let no=Math.floor(Math.random() * 6);
    ans=arr[no];
    document.getElementById("board").style.backgroundColor = ans;
    document.getElementById("score").innerHTML="Score: "+ score
}
function Match(col)
{
	if(col==ans)
	{
		score++;
		
		
	}round++;
  Update()
	document.getElementById("round").innerHTML="Rounds: "+ round
}
