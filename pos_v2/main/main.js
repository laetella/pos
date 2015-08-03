//TODO: Please write code in this file.
function printReceipt(inputs) {
  var result_string = "***<没钱赚商店>收据***\n打印时间：" + new MyDate().getCurrentDate() + "\n----------------------\n";
  Scanner.prototype.getCount = function() {
    for(var item = 0; item < inputs.length; item ++) {
      for(var goods_item = 0; goods_item < this.allItems.length; goods_item ++) {
        if (inputs[item].substring(0,this.allItems[goods_item].barcode.length) === this.allItems[goods_item].barcode){
           this.count = inputs[item].substring(this.allItems[goods_item].barcode.length+1, inputs[item].length);
           break;
        }
      }
    }
    return this.count;
  };
  CartItem.prototype.storeItem = function(inputs) {
    for(var item = 0; item < inputs.length; item ++) {
      for(var goods_item = 0; goods_item < this.allItems.length; goods_item ++) {
        if (inputs[item] === this.allItems[goods_item].barcode) {
          this.temp_array.push(this.allItems[goods_item]);
        } else if (inputs[item].substring(0,this.allItems[goods_item].barcode.length) === this.allItems[goods_item].barcode){
           this.temp_array.push(this.allItems[goods_item]);
           this.temp_array[this.temp_array.length-1].count = inputs[item].substring(this.allItems[goods_item].barcode.length+1, inputs[item].length);
        }
      }
    }
  }
  CartItem.prototype.getSubPrice = function (barcode, count) {
    return (barcode * count).toFixed(2);
  };
  Cart.prototype.addItem = function(inputs) {
    this.obj.storeItem(inputs);
    var sign = false;
    for(var item = 0; item < this.obj.temp_array.length; item++) {
      if(this.obj.temp_array[item].count != undefined ) {
        this.obj.result_array.push(this.obj.temp_array[item]);
        continue;
      }
      for(var result_item = 0; result_item < this.obj.result_array.length; result_item++) {
        if(this.obj.result_array[result_item].name === this.obj.temp_array[item].name) {
          this.obj.result_array[result_item].count ++;
          sign = true;
          break;
        }
        sign = false;
      }
      if(sign === false) {
        this.obj.result_array.push({
                  name:this.obj.temp_array[item].name,
                  count:1,
                  price:this.obj.temp_array[item].price,
                  unit:this.obj.temp_array[item].unit});
      }
    }
  };
  Cart.prototype.calculatePrice = function(inputs) {
    return this.sum;
  };
  Cart.prototype.printItem = function(inputs) {
    this.addItem(inputs);
    for(var result_item = 0; result_item < this.obj.result_array.length; result_item++) {
      var temp_sum;
      this.actual_sum += this.obj.result_array[result_item].count * this.obj.result_array[result_item].price;
      if(this.obj.result_array[result_item].count < 3) {
        temp_sum = (this.obj.result_array[result_item].count * this.obj.result_array[result_item].price);
      } else {
        temp_count = this.obj.result_array[result_item].count - parseInt(this.obj.result_array[result_item].count/3);
        temp_sum = (temp_count * this.obj.result_array[result_item].price);
      }
      this.itemString += "名称：" + this.obj.result_array[result_item].name
                    + "，数量：" + this.obj.result_array[result_item].count + this.obj.result_array[result_item].unit
                    + "，单价：" + this.obj.result_array[result_item].price.toFixed(2)
                    + "(元)，小计：" + temp_sum.toFixed(2)
                    + "(元)\n";
      this.sum += temp_sum;
    }
    return this.itemString;
  };
  Cart.prototype.subPrice = function() {
    return this.actual_sum - this.sum;
  };
  for(var item = 0; item < inputs.length; item++) {
    new CartItem(inputs[item], new Scanner(inputs[item].getCount());
  }
  var obj = new Cart();
  result_string += obj.printItem(inputs) + "----------------------\n总计：" + obj.calculatePrice(inputs).toFixed(2) + "(元)\n节省："+ obj.subPrice().toFixed(2) + "(元)\n**********************";
  console.log(result_string);
}
