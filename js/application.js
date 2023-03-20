var getCost = function (ele) {
  var price = parseFloat($(ele).children('.price').text());
  var qty = parseFloat($(ele).find('.qty input').val());

  var cost = price * qty;
  $(ele).children('.cost').html(cost);

  return cost;
}

$(document).ready(function() {
  $('tbody .itemRow').each(function (i, ele) {
    getCost(ele);
  });

 });