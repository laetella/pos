function Cart(single_item) {
  this.goods_item = single_item;
  this.result_array = [];
  this.actual_sum = 0;
  this.sum = 0;
  this.itemString = "";
}
Cart.prototype.addItem = function(single_item) {
  var sign = false;
  for(var item = 0; item < this.result_array.length; item++) {
    if(this.result_array[item].barcode === single_item.barcode) {
  //    if(this.result_array[item].count === 1) {
        this.result_array[item].count ++;
        sign = true;
        break;
  //    } else {
  //      this.result_array[item].count = single_item.count;
  //      sign = true;
  //      break;
      //}
    }
    sign = false;
  }
  if (sign === false) {
    this.result_array.push(single_item);
  }
  return this.result_array;
};
Cart.prototype.calculatePrice = function() {
  return this.sum;
};
Cart.prototype.savePrice = function() {
  return this.actual_sum - this.sum;
};
Cart.prototype.printItem = function() {
  for(var result_item = 0; result_item < this.result_array.length; result_item++) {
    var temp_sum;
    this.actual_sum += this.result_array[result_item].count * this.result_array[result_item].single_price;
    if(this.result_array[result_item].count < 3) {
      temp_sum = (this.result_array[result_item].count * this.result_array[result_item].single_price);
    } else {
      temp_count = this.result_array[result_item].count - parseInt(this.result_array[result_item].count/3);
      temp_sum = (temp_count * this.result_array[result_item].single_price);
    }
    this.itemString += "名称：" + this.result_array[result_item].name
                  + "，数量：" + this.result_array[result_item].count + this.result_array[result_item].unit
                  + "，单价：" + this.result_array[result_item].single_price
                  + "(元)，小计：" + temp_sum.toFixed(2)
                  + "(元)\n";
    this.sum += temp_sum;
  }
  return this.itemString;
};
