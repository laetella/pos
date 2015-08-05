function Cart() {
  this.resultArray = [];
}

Cart.prototype.addItem = function(tag) {
  var sign = false;
  for(var item = 0; item < this.resultArray.length; item++) {
    if(this.resultArray[item].barcode === tag.barcode) {
        this.resultArray[item].count += tag.count;
        sign = true;
        break;
    }
  }
  if (sign === false) {
    var newCartItem = new CartItem(tag);
    this.resultArray.push(newCartItem);
  }
  return this.resultArray;
};

Cart.prototype.calculatePrice = function() {
  var sum = 0;
  for(var resultItem = 0; resultItem < this.resultArray.length; resultItem++) {
    sum += this.resultArray[resultItem].getSubTotal();
  }
  return sum;
};

Cart.prototype.savePrice = function() {
  var actualSum = 0;
  for(var resultItem = 0; resultItem < this.resultArray.length; resultItem++) {
    actualSum += this.resultArray[resultItem].getSubActualTotal();
  }
  return actualSum - this.calculatePrice();
};
