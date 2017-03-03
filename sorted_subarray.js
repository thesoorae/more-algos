arr =  [0, 1, 15, 25, 6, 7, 30, 40, 50]
findMax(arr);

function findMax(arr){
  let start, end, min, max;

  for(i=1;i<arr.length; i++){
    if(arr[i]<arr[i-1]){
      start= i;
      break;
    }
  }
  for(j = arr.length - 1; j > 0 ; j--){
    if(arr[j] < arr[j-1]){
      end = j;
      break;
    }
  }
  console.log(arr);

  return check(arr, start, end);

}

  function check(arr, start, end){
  sorted = arr.slice(start, end + 1).sort(function(a, b){return a - b});
  min = sorted[0];
  max = sorted[sorted.length - 1];
  first = arr.slice(0, start);
  second = arr.slice(end + 1);
  console.log(sorted, min, max, first, second);
  newstart = null;
  newend = null;
  for(i = first.length - 1; i>= 0 ; i--){
    if(first[i] < min){
      break;
    } else{
      newstart = i;
      if(first[i] > max) max = first[i];
  }
  }
  console.log("min, max", min, max);

  for(j = 0; j < second.length ; j++){
    if(second[j] > max){
      break;
    } else{
      newend = end + 1 + j;
    }
  }
  console.log("newstart and end", newstart, newend);
  console.log("start and end", start, end);
  if(newstart || newend){
    newstart = newstart || start;
    newend = newend || end;
    check(arr, newstart, newend);
  } else {
    ans = [start, end];
    return ans;
  }
  }
