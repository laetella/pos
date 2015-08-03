//TODO: Please write code in this file.
//打印日期的类  输出数据的类  计算价格的类
//1st  step： 把inputs中的所有商品 转换成 一个存放商品所有信息的数组
//2nd step： 把所有商品的数组 进行整理 变成 按商品种类划分的数组
//3rd step：处理价格
function date() {
  dateDigitToString = function(num) {
    return num < 10 ? '0' + num : num;
  };
  var currentDate = new Date();
  this.year = dateDigitToString(currentDate.getFullYear());
  this.month = dateDigitToString(currentDate.getMonth() + 1);
  this.date = dateDigitToString(currentDate.getDate());
  this.hour = dateDigitToString(currentDate.getHours());
  this.minute = dateDigitToString(currentDate.getMinutes());
  this.second = dateDigitToString(currentDate.getSeconds());
  this.getCurrentDate = function() {
    return this.year + '年' + this.month + '月' + this.date + '日 ' + this.hour + ':' + this.minute + ':' + this.second;
  }
}
function count_item() {
  this.temp_array = [];
  this.allItems = loadAllItems();
  this.result_array = [];
  this.array_length = 0;
  this.actual_sum = 0;
  this.allPromotions = loadPromotions();
  this.sum = 0;
  this.itemString = "";
  this.storeItem = function(inputs) {
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
  this.addItem = function(inputs) {
    this.storeItem(inputs);
    var sign = false;
    for(var item = 0; item < this.temp_array.length; item++) {
      if(this.temp_array[item].count == 2 ) {
        this.result_array.push(this.temp_array[item]);
        continue;
      }
      for(var result_item = 0; result_item < this.result_array.length; result_item++) {
        if(this.result_array[result_item].name === this.temp_array[item].name) {
          this.result_array[result_item].count ++;
          sign = true;
          break;
        }
        sign = false;
      }
      if(sign === false) {
        this.result_array.push({
                  name:this.temp_array[item].name,
                  count:1,
                  price:this.temp_array[item].price,
                  unit:this.temp_array[item].unit});
      }
    }
  }
  this.calculatePrice = function(inputs) {
    return this.sum;
  }
  this.printItem = function(inputs) {
    this.addItem(inputs);
    for(var result_item = 0; result_item < this.result_array.length; result_item++) {
      var temp_sum;
      this.actual_sum += this.result_array[result_item].count * this.result_array[result_item].price;
      if(this.result_array[result_item].count < 3) {
        temp_sum = (this.result_array[result_item].count * this.result_array[result_item].price);
      } else {
        temp_count = this.result_array[result_item].count - parseInt(this.result_array[result_item].count/3);
        temp_sum = (temp_count * this.result_array[result_item].price);
      }
      this.itemString += "名称：" + this.result_array[result_item].name
                    + "，数量：" + this.result_array[result_item].count + this.result_array[result_item].unit
                    + "，单价：" + this.result_array[result_item].price.toFixed(2)
                    + "(元)，小计：" + temp_sum.toFixed(2)
                    + "(元)\n";
      this.sum += temp_sum;
    }
    return this.itemString;
  }
  this.subPrice = function() {
    return this.actual_sum - this.sum;
  }
}
function printReceipt(inputs) {
  var result_string = "***<没钱赚商店>收据***\n打印时间：" + new date().getCurrentDate() + "\n----------------------\n";
  var obj = new count_item();
  result_string += obj.printItem(inputs) + "----------------------\n总计：" + obj.calculatePrice(inputs).toFixed(2) + "(元)\n节省："+ obj.subPrice().toFixed(2) + "(元)\n**********************";
  console.log(result_string);
}
