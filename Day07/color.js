var colors= ['#008000',"#27ae60","#2c3e50","#ff9999","#808000","#FF00FF","800000"];


function myfunc(num)
{
 var num= Math.floor(Math.random()*(colors.length));
 document.getElementById('target').style.backgroundColor = colors[num];
}
