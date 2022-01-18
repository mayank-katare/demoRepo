class MetadataParser{
  constructor(version,channel,keyField){
    this.version=version;
    this.channel=channel;
    this.keyField=keyField;
  }
  setVersion(version){
    this.version=version;
  }
  setChannel(version){
    this.version=version;
  }
  setkeyField(version){
    this.version=version;
  }
  getVersion()
  {
    return this.version;
  }
  getChannel()
  {
    return this.channel;
  }
  getkeyField()
  {
    return this.keyField;
  }
  getKeyFields(arr){
    return arr.map((obj)=>{
        return obj.keyField;
    })
  }
}
const a=new MetadataParser(10,'A','ABC');
const b=new MetadataParser(12,'B','DEF');
const c=new MetadataParser(14,'C','GHI');
console.log(a.getKeyFields([a,b,c]));