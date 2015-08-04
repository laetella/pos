function printReceipt(inputs) {
  var result_string = "***<没钱赚商店>收据***\n打印时间：" + new MyDate().getCurrentDate() + "\n----------------------\n";
  var scan_item;
  var single_item;
  var totalItem = new Cart();
  for(var item = 0; item < inputs.length; item++) {
    scan_item = new Scanner(inputs[item]);
    single_item = new CartItem(scan_item.barcode,scan_item.getCount(inputs[item]));
    single_item.setItem(scan_item.barcode, scan_item.getCount(inputs[item]));
    totalItem.addItem(single_item);
  }
  result_string += totalItem.printItem() + "----------------------\n总计：" + totalItem.calculatePrice().toFixed(2) + "(元)\n节省："+ totalItem.savePrice().toFixed(2) + "(元)\n**********************";
  console.log(result_string);
}
