function Scanner(inputs) {
  this.barcode = inputs;
  this.count = 1;
  this.allItems = loadAllItems();
}
Scanner.prototype.getCount = function(inputs) {
  for(var goods_item = 0; goods_item < this.allItems.length; goods_item ++) {
    // if (inputs.substring(0,this.allItems[goods_item].barcode.length) === this.allItems[goods_item].barcode){
    if (inputs.length != this.allItems[goods_item].barcode.length){
      this.barcode = inputs.substring(0, this.allItems[goods_item].barcode.length);
      this.count = Number(inputs.substring(this.allItems[goods_item].barcode.length+1, inputs.length));
      break;
    } else {
      this.count = 1;
    }
  }
return this.count;
};
