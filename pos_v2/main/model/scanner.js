function Scanner(inputs) {
  this.barcode = inputs;
  this.count = 1;
  this.allItems = loadAllItems();
}
