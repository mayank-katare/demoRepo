class SortArray{
  constructor(...arr)
  {
    this.arr=arr;
  }
  
  #sortArray(arr) {
  return arr.sort((a,b)=>{
            return a - b
      })
  }
  
  getSortedArray(){
    return this.#sortArray(this.arr);
  }
}
class SortObjectArray extends SortArray{
  constructor(key,...arr){
    super(...arr)
    this.key=key;
  }
  
  #sortArray(arr,key) {
  return arr.sort((a,b)=>{
            return a[key] - b[key]
      })
  }
  
  getSortedArray(){
    return this.#sortArray(this.arr,this.key);
  }
}
const a=new SortArray(1,2,4,3,4,5,6);
const b=new SortObjectArray('A',{'A':45},{'A':12},{'A':15},{'A':36});
console.log(a.getSortedArray());
console.log(b.getSortedArray());