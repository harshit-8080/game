attempt=0;
function checknumber()
{   	
	var inputanswer=document.getElementById("i1").value;
	var answer=document.getElementById("answer").value;
	var results=document.getElementById("t1");

	console.log(inputanswer);
	if(inputanswer.length==4)
 {
	if(!answer)
	{ 
		answer=(Math.floor(Math.random()*8800)+1000).toString();
        document.getElementById("answer").value=answer;
	}	
	console.log(answer);
	attempt++;
	if(attempt<4)
 {
 	var count=0;
	var html='<tr><td>'+inputanswer+ '</td><td>'
	for(let i=0;i<inputanswer.length;i++)
	{
	 if(answer[i]==inputanswer[i])
	 {  
	 	 html=html+'=';
	 	 count++;

        
	 }
	 else if(answer.indexOf(inputanswer[i]) > -1)
	 {
      
          html=html+'#';


	 }
	 else
	 {
         html=html+'@';

	 }
    }
     html=html + '</td></tr>';
     results.innerHTML += html;
     if(count==4){
        alert("hurryyy! you win the game");
     }
 
  }
 else
 {
	alert("your attempt is over!  you lose the game");
 }
}
else
{
	alert("invalid input! please enter 4 digit number");
}
}
