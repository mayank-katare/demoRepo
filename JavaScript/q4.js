function SortArray(...arr){
  this.arr=arr;
  
  sortArray=function(arr){
  return arr.sort((a,b)=>{
            return a - b
      })
  }
  
  this.getSortedArray=function(){
    return sortArray(this.arr);
  }
}
function SortObjectArray(key,...arr){
  this.key=key;
  SortArray.call(this,...arr)
  
  sortArray=function(arr,key){
  return arr.sort((a,b)=>{
            return a[key] - b[key]
      })
  }
  
  this.getSortedArray=function(){
    return sortArray(this.arr,this.key);
  }
}
const a=new SortArray(1,2,4,3,4,5,6);
const b=new SortObjectArray('A',{'A':45},{'A':12},{'A':15},{'A':36});
console.log(a.getSortedArray());
console.log(b.getSortedArray());