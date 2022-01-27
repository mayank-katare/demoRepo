function MetadataParser(version,channel,keyField){
  this.version=version;
  this.channel=channel;
  this.keyField=keyField;
  
  this.setVersion=function(version){
    this.version=version;
  }
  
  this.setChannel=function(chanel){
    this.channel=channel;
  }
  
  this.setkeyField=function(keyField){
    this.keyField=keyField;
  }
  
  this.getVersion=function()
  {
    return this.version;
  }
  this.getChannel=function()
  {
    return this.channel;
  }
  this.getkeyField=function()
  {
    return this.keyField;
  }
}

MetadataParser.prototype.getKeyFields=function(arr){
  return arr.map((obj)=>{
        return obj.keyField;
    })
}
const a=new MetadataParser(10,'A','ABC');
const b=new MetadataParser(12,'B','DEF');
const c=new MetadataParser(14,'C','GHI');
console.log(a.getKeyFields([a,b,c]));