var getCost = function (ele) {
  var price = parseFloat($(ele).children('.price').text());
  var qty = parseFloat($(ele).find('.qty input').val());

  var cost = price * qty;
  $(ele).children('.cost').html(cost);

  return cost;
}

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

  $(document).on('input', 'tr input', function () {
    getTotalCart();
  });
  
  $('#addItemRow').on('submit', function(event) {
    event.preventDefault();
    var item = $(this).children('.addName').val();
    var price = $(this).children('.addPrice').val();

    $('tbody').append('<tr class="itemRow">' + '<td class="name">' + item + '</td>' + '<td class="price">' + price + '</td>' + '<td class="qty"><input type="number" value="0"></td>' + '<td class="cost"></td>' + '<td><button class="btn btn-light btn-sm remove"><i class="fa-regular fa-circle-xmark"></i></button></td>' + '</tr>');

    getTotalCart();
    $(this).children('.addName').val('');
    $(this).children('.addPrice').val('');
  });
});

