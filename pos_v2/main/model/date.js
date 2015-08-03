function MyDate() {
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
