
const ageFilter = (id) => {
    if (id  && !(id.length == 18 || id.length == 15)) return ''
      var myDate = new Date();
      var month = myDate.getMonth() + 1;
      var day = myDate.getDate();
      var age = myDate.getFullYear() - id.substring(6, 10) - 1;
        if (id.substring(10, 12) < month || id.substring(10, 12) == month && id.substring(12, 14) <= day) {
            age++;
        }
  return age;
}

const timeFilter  = function(time, format){ 
            if(!time) return '未知时间'; 
          var t = new Date(time);  
          var tf = function(i){return (i < 10 ? '0' : '') + i};  
          if(!format) format = 'yyyy/MM/dd'
          return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){  
              switch(a){  
                  case 'yyyy':  
                      return tf(t.getFullYear());  
                      break;  
                  case 'MM':  
                      return tf(t.getMonth() + 1);  
                      break;  
                  case 'mm':  
                      return tf(t.getMinutes());  
                      break;  
                  case 'dd':  
                      return tf(t.getDate());  
                      break;  
                  case 'HH':  
                      return tf(t.getHours());  
                      break;  
                  case 'ss':  
                      return tf(t.getSeconds());  
                      break;  
              }  
          })  
      }; 

    const sexFilter =  sex => {
        if(sex == 0) {
            return '男'
        } else {
            return '女'
        }
    };

    const bloodFilter = bloodData => {
        let arr = bloodData.split('/');
        if(arr.length == 2) {
            let high = arr[0]
            if(high > 120) {
                return '偏高'
            } 
            let low = arr[1] 
            if(low < 80) {
                return '偏低'
            }
            return '正常'
        }
        return '未知'
    };
    const bmiFilter = wh => {
        let arr = wh.split('/');
        if(arr.length == 2) {
            let w = arr[0];
            let h = arr[1];
            let bmi = 0;
            try {
                bmi = (w/((h*h)/10000)).toFixed(2)
            }
            catch (err) {
                console.log(err);
                return 0;
            }
           return (bmi + 'kg/m2');

        }
        return '0kg/m2'
    };
export default {
    ageFilter,
    timeFilter,
    bloodFilter,
    sexFilter,
    bmiFilter
}