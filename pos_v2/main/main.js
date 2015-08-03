//TODO: Please write code in this file.
function printReceipt(inputs) {
  var result_array = [];
  var temp_array = [];
  var actual_sum = 0;
  var allItems = loadAllItems();
  var allPromotions = loadPromotions();
  for(var item = 0; item < inputs.length; item ++) {
    for(var goods_item = 0; goods_item < allItems.length; goods_item ++) {
      if (inputs[item] === allItems[goods_item].barcode) {
        temp_array.push(allItems[goods_item]);
      } else if (inputs[item].substring(0,allItems[goods_item].barcode.length) === allItems[goods_item].barcode){
         temp_array.push(allItems[goods_item]);
         temp_array[temp_array.length-1].count = inputs[item].substring(allItems[goods_item].barcode.length+1, inputs[item].length);
        //  console.log(temp_array[temp_array.length-1].count);
      }
    }
  }
  var currentDate = new Date();
  var formattedDateString;
  formattedDateString = currentDate.getFullYear() + '年'
                        + (parseInt(currentDate.getMonth() + 1) > 9?(currentDate.getMonth()+1).toString():'0' + (currentDate.getMonth()+1)) + '月'
                        + (currentDate.getDate() > 9?currentDate.getDate().toString():'0' + currentDate.getDate()) + '日 '
                        + currentDate.getHours() + ':'
                        + currentDate.getMinutes() + ':'
                        + (currentDate.getSeconds() > 9?currentDate.getSeconds().toString():'0' + currentDate.getSeconds());
  var result_string = "***<没钱赚商店>收据***\n打印时间：" + formattedDateString + "\n----------------------\n";

  // var result_string = "***<没钱赚商店>收据***\n打印时间："+ +"\n";
  var sum = 0;
  var sign = false;
  var array_length = 0;
  for(var item = 0; item < temp_array.length; item++) {
    // console.log(result_array[item].count);
    if(temp_array[item].count == 2 ) {
      result_array.push(temp_array[item]);
      // console.log(result_array);
      continue;
    }
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
    // console.log(result_array[item]);
  }

  for(var result_item = 0; result_item < result_array.length; result_item++) {
    var temp_sum;

    actual_sum += result_array[result_item].count * result_array[result_item].price;

    if(result_array[result_item].count < 3) {
      temp_sum = (result_array[result_item].count * result_array[result_item].price);
    } else {
      temp_count = result_array[result_item].count - parseInt(result_array[result_item].count/3);
      temp_sum = (temp_count * result_array[result_item].price);
    }
    result_string += "名称：" + result_array[result_item].name
                  + "，数量：" + result_array[result_item].count + result_array[result_item].unit
                  + "，单价：" + result_array[result_item].price.toFixed(2)
                  + "(元)，小计：" + temp_sum.toFixed(2)
                  + "(元)\n";
    sum +=  temp_sum;
  }
  // console.log(actual_sum);
  result_string += "----------------------\n总计：" + sum.toFixed(2) + "(元)\n节省："+ (actual_sum - sum).toFixed(2) + "(元)\n**********************";
  console.log(result_string);
}
