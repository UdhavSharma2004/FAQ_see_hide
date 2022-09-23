let loc=document.getElementsByClassName("icons");
let val=document.getElementsByClassName("ans");
let clk=[0];
// console.log(loc.length);
for(let i=0;i<loc.length;i++){
    clk[i]=0;
    loc[i].addEventListener('click',function(){
        clk[i]++;
        console.log(clk[i]);
        if(clk[i]%2===0){
            loc[i].innerHTML='+';
        val[i].style.display='none';
        }
        else{
            loc[i].innerHTML='-';
        val[i].style.display='block';
        }
    })
}