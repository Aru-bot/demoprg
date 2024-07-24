
         function func()

         {
            var x=  document.getElementById("num").value;
            document.getElementById("num").style.cursor ="pointer";
            document.getElementById("para").style.fontSize ="100px"
            document.getElementById("para").style.color = "red";
            document.getElementById("para").innerHTML = "HELLO WORLD " + x;
            document.getElementById("num").value="";//after clicking the button, the value won't be in the box
            alert("hello" + x);

         }

         function table(num)
         {
            var n= document.getElementById("num").value;
            var arr=[];
            for(var i=1; i<=10 ;i++)
            {
              arr.push(n + "x" + i + "=" + (n*i));

            }
            document.getElementById("para").style.color = "red";
            document.getElementById("para").innerHTML=arr; //innerHTML is used to store the data that has to be printed and prints

            
         }

         function oddeven(numb)
         { 
            var numb=document.getElementById('num').value;


            if(numb % 2 === 0)
            {   document.getElementById("para").style.color = "red";
                document.getElementById("para").innerHTML= numb + " is even";
            
            }
            else
            {   document.getElementById("para").style.color = "blue";
                document.getElementById("para").innerHTML= numb + " is odd";
            }
         }