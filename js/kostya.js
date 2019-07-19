
$('#imageModal').on('show.bs.modal', function (event) {
  var clicked = $(event.relatedTarget)
  var image = clicked.find('img').attr("src");
  var modal = $(this)
  modal.find('.modal-body img').attr("src", image)
})
