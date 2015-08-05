function CartItem(barcode,count) {
  this.barcode = barcode;
  this.count = count;
  this._item = {};
  this.price = 0.00;
  this.setItem = function(barcode) {
    var allItems= loadAllItems();
      for(item = 0; item < allItems.length; item ++) {
        if(barcode === allItems[item].barcode) {
          this._item.single_price = allItems[item].price.toFixed(2);
          this._item.name = allItems[item].name;
          this._item.unit = allItems[item].unit;
          break;
        }
      }
  }
  this.getSubPrice = function () {
    var allPromotions = loadPromotions();
    var temp_count = this.count;
    for(var prom = 0; prom < allPromotions[0].barcodes.length; prom ++) {
      if(this.barcode === allPromotions[0].barcodes[prom]) {
        if(this.count >= 3) {
          temp_count = (this.count - Math.floor(this.count/3));
        }
      }
    }
    return temp_count * this._item.single_price;
  }
}
