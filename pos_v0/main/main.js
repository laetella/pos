//TODO: Please write code in this file.
function printReceipt(inputs) {
  var result_string = "***<没钱赚商店>收据***\n";
  var sum = 0;
  for(var item = 0; item < inputs.length; item++) {
    result_string += "名称：" + inputs[item].name
                  + "，数量：" + inputs[item].count + inputs[item].unit
                  + "，单价：" + inputs[item].price.toFixed(2)
                  + "(元)，小计：" + (inputs[item].count * inputs[item].price).toFixed(2)
                  + "(元)\n";
    sum +=  inputs[item].count * inputs[item].price;
  }
  result_string += "----------------------\n总计：" + sum.toFixed(2) + "(元)\n**********************";
  console.log(result_string);
}
