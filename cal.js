document.getElementById("btnn").addEventListener("click",()=>{
    let sum=0,i;
    var ele=document.getElementsByTagName("input");
    for(i=0;i<ele.length;i++){
        if(ele[i].type=="radio"){
            if(ele[i].checked){
                sum=sum+parseFloat(ele[i].value);
            }
        }
    }

    if(sum>0 && sum<3){
        // console.log("Mild and moderate depression");
        document.getElementById("imga").src="Group 1 1.png"
        
    }
    if(sum>=3 && sum<5){
          // console.log("Seasonal affective disorder (SAD)");
           document.getElementById("imga").src="Group 4 1.png"

    }
    if(sum>=5 && sum<7){
          // console.log("Atypical depression");
          document.getElementById("imga").src="Group 2 1.png"

    }
    
    if(sum>=7){
          // console.log("Major or clinical depression");
    document.getElementById("imga").src="Group 3 1.png"

        
    }
    console.log("HII",sum)
    // BELOW Tfunction will help the page to go at top
    
    
    document.body.scrollTop = 30; 
    // 30 is speed of scroll
    document.documentElement.scrollTop = 30; 
})
