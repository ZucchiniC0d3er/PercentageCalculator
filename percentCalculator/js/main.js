
function perCentPrice() {
  var price = parseFloat(document.getElementById('price').value);
  var percentOff = parseFloat(document.getElementById('percentOff').value);
  var saved = (price * percentOff) / 100;
  var priceAfterSavings = price - saved;

  document.getElementById('finalPrice').innerHTML = "Your final price is " +
  priceAfterSavings;
}
