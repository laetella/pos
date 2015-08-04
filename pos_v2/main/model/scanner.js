function Scanner(single_inputs) {
  this.barcode = single_inputs;
  this.count = 1;
}
Scanner.prototype.getCount = function(single_inputs) {
 var  allItems = loadAllItems();
  for(var goods_item = 0; goods_item < allItems.length; goods_item ++) {
    if (single_inputs.length != allItems[goods_item].barcode.length){
      this.barcode = single_inputs.substring(0, allItems[goods_item].barcode.length);
      this.count = Number(single_inputs.substring(allItems[goods_item].barcode.length+1, single_inputs.length));
      break;
    }
  }
return this.count;
};
