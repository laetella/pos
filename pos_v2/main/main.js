function printReceipt(inputs) {
  var result_string = "***<没钱赚商店>收据***\n打印时间：" + new MyDate().getCurrentDate() + "\n----------------------\n";
  var scan_item;
  var single_item;
  var allItems = loadAllItems();
  var totalItem = new Cart();
  var count;
  for(var item = 0; item < inputs.length; item++) {
    scan_item = new Scanner(inputs[item]);
    count = scan_item.getCount(inputs[item]);
    totalItem.addItem(scan_item.barcode,count);
  }
  result_string += totalItem.printItem() + "----------------------\n总计：" + totalItem.calculatePrice().toFixed(2) + "(元)\n节省："+ totalItem.savePrice().toFixed(2) + "(元)\n**********************";
  console.log(result_string);
}
