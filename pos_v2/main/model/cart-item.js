function CartItem(barcode,count) {
  this.allItems = loadAllItems();
  this.barcode = barcode;
  this.name = '';
  this.unit = '';
  this.count = count;
  this.price = 0.00;
  this.single_price = 0.00;
}
// CartItem.prototype.getSubPrice = function (barcode,count) {
//   for(var goods_item = 0; goods_item < this.allItems.length; goods_item ++) {
//     if (barcode === this.allItems[goods_item].barcode){
//        return (this.allItems[goods_item].price * this.count).toFixed(2);
//     }
//   }
// };
CartItem.prototype.setItem = function(barcode,count) {
    for(item = 0; item < this.allItems.length; item ++) {
      if(barcode === this.allItems[item].barcode) {
        this.barcode = barcode;
        this.name = this.allItems[item].name;
        this.unit = this.allItems[item].unit;
        this.count = count;
        this.single_price = this.allItems[item].price.toFixed(2);
        this.price = (this.single_price * this.count).toFixed(2);
        console.log(this.count);
        // console.log(this.allItems[item].price);
        console.log(this.single_price);
        break;
      }
    }
}
