//TODO: Please write code in this file.
function printReceipt(inputs) {
  var result_string = "***<没钱赚商店>收据***\n";
  var result_array = [];
  var sum = 0;
  var sign = false;
  var array_length = 0;
  for(var item = 0; item < inputs.length; item++) {
    for(var result_item = 0; result_item < result_array.length; result_item++) {
      if(result_array[result_item].name === inputs[item].name) {
        result_array[result_item].count ++;
        sign = true;
        break;
      }
      sign = false;
    }
    if(sign === false) {
      result_array.push({
                name:inputs[item].name,
                count:1,
                price:inputs[item].price,
                unit:inputs[item].unit});
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
//  console.log(result_array.length);
  console.log(result_string);
}
