function isSnakeEyes(die1, die2) {
    if (die1 === 1 && die2 === 1) {
      console.log('Snake Eyes!');
    } else {
      console.log('Not Snake Eyes!');
    }
  }
  function multiply(x, y){
    if(typeof x !== 'number' && typeof y !== 'number')
    return false;
    else {
        return x * y;
    }
}  
function isShortsWeather(temperature){
    if(temperature >= 75){
        return true;
    }else{
        return false;
    }
}
function lastElement(arr) {
    if (arr.length === 0) {
      return null;
    } else {
      return arr[arr.length - 1];
    }
  }
  function capitalize(cap) {
    return cap[0].toUpperCase()+cap.slice(1);
  }
  function sumArray(nums) {
    let total = 0;
    for (let num of nums) {
      total += num;
    }
    return total;
  }
  function returnDay(num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
      return null;
    } else {
      return days[num - 1];
    }
  }
