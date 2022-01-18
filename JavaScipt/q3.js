const groupObjectsBy=function(arr,key){
  result={}
  arr.forEach(function(obj){
    let name=obj[key];
    if(!result[name])
      result[name]=[]
    result[name].push(obj);
  })
  return result;
}
console.log(groupObjectsBy([ 
  {
    "channel": "A",
    "name": "shoe"
  },
  {
    "channel": "A",
    "name": "electronics"
  },
  {
    "channel": "B",
    "name": "apparel"
  },
  {
    "channel": "C",
    "name": "electronics"
  }
],'channel'));