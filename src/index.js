module.exports = function check(str, bracketsConfig) {
var arr = [];
var lastj,p=0;
var openBrackets=0;
for(var i=0;i<str.length;i++){
    for(var j=0;j<bracketsConfig.length;j++)
        {
            
               if(str[i]===bracketsConfig[j][0]){
                
                openBrackets++;
                arr.push(str[i]);
                lastj = j;
                
            }
            
            
            if(str[i]===bracketsConfig[j][1] && openBrackets>0 && arr[arr.length-1]==bracketsConfig[j][0] ){
                openBrackets--;
                arr.pop();
            }else if(str[i]===bracketsConfig[j][1] && openBrackets==0){
                return false;
                //return false;
            }else if(str[i]===bracketsConfig[j][1] && arr[arr.length-1]!==bracketsConfig[j][0]){
                     return false;
                     }
            }
            
        
}
if(openBrackets===0 && arr.length==0){
    //return true;
    return true;
}else if(openBrackets!==0){
         return false;
         }
  // your solution
}
