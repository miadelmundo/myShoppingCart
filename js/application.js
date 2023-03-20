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

var sum = function(acc, x) { return acc + x; };

var getTotalCart = function () {
  var itemCosts = [];
  
  $('tbody .itemRow').each(function (i, ele) {
    var itemCost = getCost(ele);
    itemCosts.push(itemCost);
  });

  var totalCart = itemCosts.reduce(sum);

  $('#totalCart').html(totalCart);
}

$(document).ready(function() {
  getTotalCart();

  $(document).on('click', '.btn.remove', function (event) {
    $(this).closest('tr').remove();
    getTotalCart();
  })
});