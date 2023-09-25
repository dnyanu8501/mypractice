
for (let i = 0; i < 60; i++) {
    let count=0;
    for (let num = 0; num < 60; num++) {
        if(i%num==0){
            count=count+1;
        }
        
    }
    if(count==2){
        console.log(i);
    }
    
}