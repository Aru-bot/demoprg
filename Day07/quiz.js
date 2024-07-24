var questions=["1+4=?","8/2=?","10-5=?","6*9=?"];
var count= 0;


function myfunc()
{
   var person= prompt("Enter your name","Modify/Enter here");
   if (person != null && person != " ")
   {
    document.getElementById("start").style.display= "block";
    document.getElementById("demo").innerHTML= "Hello! " + person + "   WE'LL START THE QUIZ WHEN YOU PRESS START";
   
   }

}
function functionn()
{
    
   
     document.getElementById("ques").innerHTML = questions[0];
     document.getElementById("demo").innerHTML= "";
     document.getElementById("hela").style.display= "none";
     document.getElementById("skr").innerHTML= "";
    
   
}





function next()
    {
        document.getElementById("result").innerHTML= "";
        var i= 0;
        var c=  questions.length;

        for(i;i<c;i++)
            
            {
            if (document.getElementById("ques").innerHTML===questions[i]){
                bfunc(i);
                ans();
                break;
            }
          

        }

    }

    function bfunc(i){
        var c= i+1;
        document.getElementById("ques").innerHTML= questions[c];
    
    }

    function score(){
        document.getElementById("result").innerHTML= "YOU HAVE SCORED = " + count + " OUT OF " + questions.length;
    }
   /* function optincorr()
    {  
        
        document.getElementById("result").style.color= "red";
        document.getElementById("result").innerHTML=" inCorrect ";
        opt1.style.display= "none" ;
        opt2.style.display= "none" ;
        opt3.style.display= "none" ;
        opt4.style.display= "none" ;
        setTimeout(next,1000)
      
    }*/
   /* function optcorr()
    {  
        
        document.getElementById("result").style.color= "blue";
        document.getElementById("result").innerHTML=" inCorrect ";
        opt1.style.display= "none" ;
        opt2.style.display= "none" ;
        opt3.style.display= "none" ;
        opt4.style.display= "none" ;
        setTimeout(next,1000)
      
    }*/
   
function ans()
{
    if(document.getElementById("ques").innerHTML === "1+4=?")
    {
        var opt1 = document.createElement('button');
        opt1.innerHTML= "15";
        document.body.appendChild(opt1);
        opt1.onclick=function optincorr()
        {  
            
            document.getElementById("result").style.color= "red";
            document.getElementById("result").innerHTML=" inCorrect ";
            opt1.style.display= "none" ;
            opt2.style.display= "none" ;
            opt3.style.display= "none" ;
            opt4.style.display= "none" ;
            setTimeout(next,1000)
          
        }
       
        var opt2 = document.createElement('button');
        opt2.innerHTML= "6";
        document.body.appendChild(opt2);
        opt2.onclick= function optincorr()
        {  
            
            document.getElementById("result").style.color= "red";
            document.getElementById("result").innerHTML=" inCorrect ";
            opt1.style.display= "none" ;
            opt2.style.display= "none" ;
            opt3.style.display= "none" ;
            opt4.style.display= "none" ;
            setTimeout(next,1000)
          
        }

        var opt3 = document.createElement('button');
        opt3.innerHTML= '10';
        document.body.appendChild(opt3);
        opt3.onclick= function optincorr()
        {  
            
            document.getElementById("result").style.color= "red";
            document.getElementById("result").innerHTML=" inCorrect ";
            opt1.style.display= "none" ;
            opt2.style.display= "none" ;
            opt3.style.display= "none" ;
            opt4.style.display= "none" ;
            setTimeout(next,1000)
          
        }
      
        var opt4 = document.createElement('button');
        opt4.innerHTML= '5';
        document.body.appendChild(opt4);
        opt4.onclick=function optcorr()
        {  
            
            document.getElementById("result").style.color= "blue";
            document.getElementById("result").innerHTML=" Correct ";
            opt1.style.display= "none" ;
            opt2.style.display= "none" ;
            opt3.style.display= "none" ;
            opt4.style.display= "none" ;
            setTimeout(next,1000)
           count++;
        }
       
       
    }
    else if(document.getElementById("ques").innerHTML === "8/2=?")
        {  

            var opt1 = document.createElement('button');
            opt1.innerHTML= "4";
            document.body.appendChild(opt1);
            opt1.onclick= function optcorr()
            {  
                
                document.getElementById("result").style.color= "blue";
                document.getElementById("result").innerHTML=" Correct ";
                opt1.style.display= "none" ;
                opt2.style.display= "none" ;
                opt3.style.display= "none" ;
                opt4.style.display= "none" ;
                setTimeout(next,1000)
                count++;
            }
            
    
           
            var opt2 = document.createElement('button');
            opt2.innerHTML= "69";
            document.body.appendChild(opt2);
            opt2.onclick= function optincorr()
            {  
                
                document.getElementById("result").style.color= "red";
                document.getElementById("result").innerHTML=" inCorrect ";
                opt1.style.display= "none" ;
                opt2.style.display= "none" ;
                opt3.style.display= "none" ;
                opt4.style.display= "none" ;
                setTimeout(next,1000)
              
            } 
    
            var opt3 = document.createElement('button');
            opt3.innerHTML= '10';
            document.body.appendChild(opt3);
            opt3.onclick= function optincorr()
            {  
                
                document.getElementById("result").style.color= "red";
                document.getElementById("result").innerHTML=" inCorrect ";
                opt1.style.display= "none" ;
                opt2.style.display= "none" ;
                opt3.style.display= "none" ;
                opt4.style.display= "none" ;
                setTimeout(next,1000)
              
            }
          
            var opt4 = document.createElement('button');
            opt4.innerHTML= '7';
            document.body.appendChild(opt4);
            opt4.onclick= function optincorr()
            {  
                
                document.getElementById("result").style.color= "red";
                document.getElementById("result").innerHTML=" inCorrect ";
                opt1.style.display= "none" ;
                opt2.style.display= "none" ;
                opt3.style.display= "none" ;
                opt4.style.display= "none" ;
                setTimeout(next,1000)
              
            }
           
         
            
        }
        
        else if(document.getElementById("ques").innerHTML === "10-5=?")
            {
                var opt1 = document.createElement('button');
                opt1.innerHTML= "65";
                document.body.appendChild(opt1);
                opt1.onclick=function optincorr()
                {  
                    
                    document.getElementById("result").style.color= "red";
                    document.getElementById("result").innerHTML=" inCorrect ";
                    opt1.style.display= "none" ;
                    opt2.style.display= "none" ;
                    opt3.style.display= "none" ;
                    opt4.style.display= "none" ;
                    setTimeout(next,1000)
                  
                }
                
        
               
                var opt2 = document.createElement('button');
                opt2.innerHTML= "5";
                document.body.appendChild(opt2);
                opt2.onclick= function optcorr()
                {  
                    
                    document.getElementById("result").style.color= "blue";
                    document.getElementById("result").innerHTML=" Correct ";
                    opt1.style.display= "none" ;
                    opt2.style.display= "none" ;
                    opt3.style.display= "none" ;
                    opt4.style.display= "none" ;
                    setTimeout(next,1000)
                    count++;
                }
        
                var opt3 = document.createElement('button');
                opt3.innerHTML= '10';
                document.body.appendChild(opt3);
                opt3.onclick= function optincorr()
                {  
                    
                    document.getElementById("result").style.color= "red";
                    document.getElementById("result").innerHTML=" inCorrect ";
                    opt1.style.display= "none" ;
                    opt2.style.display= "none" ;
                    opt3.style.display= "none" ;
                    opt4.style.display= "none" ;
                    setTimeout(next,1000)
                  
                }
              
                var opt4 = document.createElement('button');
                opt4.innerHTML= '0';
                document.body.appendChild(opt4);
                opt4.onclick= function optincorr()
                {  
                    
                    document.getElementById("result").style.color= "red";
                    document.getElementById("result").innerHTML=" inCorrect ";
                    opt1.style.display= "none" ;
                    opt2.style.display= "none" ;
                    opt3.style.display= "none" ;
                    opt4.style.display= "none" ;
                    setTimeout(next,1000)
                  
                }
               
                
               
         
            }
           




            else if(document.getElementById("ques").innerHTML === "6*9=?")
                {
                    var opt1 = document.createElement('button');
                    opt1.innerHTML= "54";
                    document.body.appendChild(opt1);
                    opt1.onclick=function optcorr()
                    {  
                        
                        document.getElementById("result").style.color= "blue";
                        document.getElementById("result").innerHTML=" Correct ";
                        opt1.style.display= "none" ;
                        opt2.style.display= "none" ;
                        opt3.style.display= "none" ;
                        opt4.style.display= "none" ;
                        setTimeout(next,1000)
                        count++;
                    }
                    
            
                   
                    var opt2 = document.createElement('button');
                    opt2.innerHTML= "69";
                    document.body.appendChild(opt2);
                    opt2.onclick= function optincorr()
                    {  
                        
                        document.getElementById("result").style.color= "red";
                        document.getElementById("result").innerHTML=" inCorrect ";
                        opt1.style.display= "none" ;
                        opt2.style.display= "none" ;
                        opt3.style.display= "none" ;
                        opt4.style.display= "none" ;
                        setTimeout(next,1000)
                      
                    }
                    var opt3 = document.createElement('button');
                    opt3.innerHTML= '100';
                    document.body.appendChild(opt3);
                    opt3.onclick= function optincorr()
                    {  
                        
                        document.getElementById("result").style.color= "red";
                        document.getElementById("result").innerHTML=" inCorrect ";
                        opt1.style.display= "none" ;
                        opt2.style.display= "none" ;
                        opt3.style.display= "none" ;
                        opt4.style.display= "none" ;
                        setTimeout(next,1000)
                      
                    }
                  
                    var opt4 = document.createElement('button');
                    opt4.innerHTML= '55';
                    document.body.appendChild(opt4);
                    opt4.onclick= function optincorr()
                    {  
                        
                        document.getElementById("result").style.color= "red";
                        document.getElementById("result").innerHTML=" inCorrect ";
                        opt1.style.display= "none" ;
                        opt2.style.display= "none" ;
                        opt3.style.display= "none" ;
                        opt4.style.display= "none" ;
                        setTimeout(next,1000)
                      
                    }
                   
                    
                   
                    
                }
               
                else
                {  
                    document.getElementById("ques").innerHTML= "Quiz ends here";
                    score();
                }

              

}

