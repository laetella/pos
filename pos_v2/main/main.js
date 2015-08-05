function printReceipt(inputs) {
  var scanItem = new Scanner();
  var thisCart = new Cart();
  var tag;
  for (var item = 0; item < inputs.length; item++) {
    tag = scanItem.getTag(inputs[item]);
    thisCart.addItem(tag);
  }
  console.log((new Printer()).printString(thisCart));
}
