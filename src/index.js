module.exports = function check(str, bracketsConfig) {
var checkPassed ;
    var arr = [];
    if (str.length % 2 !== 0) {
       return false;
    } else {
        for (var i = 0; i < str.length; i++) {
            for (var j = 0; j < bracketsConfig.length;j++) {
                if (str[i] == bracketsConfig[j][0] ) {
                    if(str[i]==bracketsConfig[j][0] && str[i]==bracketsConfig[j][1] && str[i]==arr[arr.length-1]){
                        arr.pop();
                    }else{
                         arr.push(str[i]);
                    checkPassed =true;
                    }
                }
                if (str[i] == bracketsConfig[j][1] && checkPassed == false && arr.length>0 ) {
                    if(bracketsConfig[j][0]==arr[arr.length-1]){
                          arr.pop();
                    }else{
                    }
                }
                    if(checkPassed == true){
                        j++;
                    }
                     checkPassed =false;
            }
        }
    }
    if (arr.length === 0) {
        return true;
    } else if (arr.length !== 0) {
        return false;
    }
  // your solution
}
