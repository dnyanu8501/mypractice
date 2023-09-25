let nu=1533;
let no=nu.toString();
let len=no.length;
let sum=0;
for(let i=0;i<len;i++){
    no3=no.charAt(i)**len;
    sum=no3+sum;
   
}
console.log(sum);

//prime number 
let no1=17;
let count=0;
for(let i=1; i<=no1; i++)
		{
			
			if(no1%i==0)
			{
				count=count+1;
			}
		}
		
		if(count==2)
		{
			console.log("Entered Number Is Prime");
		}
		else if(count>2)
		{
			console.log("Not Prime");
		}