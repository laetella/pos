function Cart() {
  this.result_array = [];
}
Cart.prototype.addItem = function(barcode,count) {
  var sign = false;
  for(var item = 0; item < this.result_array.length; item++) {
    if(this.result_array[item].barcode === barcode) {
        this.result_array[item].count += count;
        sign = true;
        break;
    }
    sign = false;
  }
  if (sign === false) {
    var newCartItem = new CartItem(barcode,count);
    newCartItem.setItem(barcode);
    this.result_array.push(newCartItem);
  }
  return this.result_array;
};
Cart.prototype.calculatePrice = function() {
  var sum = 0;
  for(var result_item = 0; result_item < this.result_array.length; result_item++) {
    sum += this.result_array[result_item].getSubPrice();
  }
  return sum.toFixed(2);
};
Cart.prototype.savePrice = function() {
  var actual_sum = 0;
  for(var result_item = 0; result_item < this.result_array.length; result_item++) {
    actual_sum += this.result_array[result_item].count * this.result_array[result_item]._item.single_price;
  }
  return (actual_sum - this.calculatePrice()).toFixed(2);
};
Cart.prototype.printItem = function() {
  var itemString = "";
  for(var result_item = 0; result_item < this.result_array.length; result_item++) {
    itemString += "名称：" + this.result_array[result_item]._item.name
                  + "，数量：" + this.result_array[result_item].count + this.result_array[result_item]._item.unit
                  + "，单价：" + this.result_array[result_item]._item.single_price
                  + "(元)，小计：" + this.result_array[result_item].getSubPrice().toFixed(2)
                  + "(元)\n";
  }
  return itemString;
};
