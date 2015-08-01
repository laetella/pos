//TODO: Please write code in this file.
function printReceipt(inputs) {
  var result_array = [];
  var temp_array = [];
  var allItems = loadAllItems();
  for(var item = 0; item < inputs.length; item ++) {
    for(var goods_item = 0; goods_item < allItems.length; goods_item ++) {
      if (inputs[item] === allItems[goods_item].barcode) {
        temp_array.push(allItems[goods_item]);
      }
    }
  }
  var result_string = "***<没钱赚商店>收据***\n";
  var sum = 0;
  var sign = false;
  var array_length = 0;
  for(var item = 0; item < temp_array.length; item++) {
    for(var result_item = 0; result_item < result_array.length; result_item++) {
      if(result_array[result_item].name === temp_array[item].name) {
        result_array[result_item].count ++;
        sign = true;
        break;
      }
      sign = false;
    }
    if(sign === false) {
      result_array.push({
                name:temp_array[item].name,
                count:1,
                price:temp_array[item].price,
                unit:temp_array[item].unit});
    }
  }
  for(var result_item = 0; result_item < result_array.length; result_item++) {
    result_string += "名称：" + result_array[result_item].name
                  + "，数量：" + result_array[result_item].count + result_array[result_item].unit
                  + "，单价：" + result_array[result_item].price.toFixed(2)
                  + "(元)，小计：" + (result_array[result_item].count * result_array[result_item].price).toFixed(2)
                  + "(元)\n";
    sum +=  result_array[result_item].count * result_array[result_item].price;
  }
  result_string += "----------------------\n总计：" + sum.toFixed(2) + "(元)\n**********************";
  console.log(result_string);
}
