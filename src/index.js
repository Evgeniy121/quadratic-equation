module.exports = function solveEquation(equation) {
  // your implementation

var i,c,p,a,b,o,d,x1,x2;
   i=0;
    while (equation[i]!=' ')
    {
        i++;
       
        }
 p=equation.substring(0,i+1);
a=+p; 
i=i+9; o=i;
 while (equation[i]!=' ')
    {
        i++;
               }

 p=equation[o-2]+equation.substring(o,i+1);
       b=+p;
    i=i+7;        
p=equation[i-2]+equation.substring(i);
     
c=+p;
var  d=(b*b)-(4*a*c);
var ar=[];
var x1=(b*(-1)+Math.sqrt(d))/(2*a);
var x2=(b*(-1)-Math.sqrt(d))/(2*a);
 if (x1 > x2) {ar[0]=Math.round(x2); ar[1]=Math.round(x1);} else{ar[1]=Math.round(x2); ar[0]=Math.round(x1);}
    return(ar);
}
