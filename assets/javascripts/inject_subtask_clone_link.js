// inject "Clone" link into "Subtask" table
jQuery(function(){
  // extract current issue ID from URL (easiest)
  var matches = location.pathname.match(/^\/issues\/(\d+)/);

  if (matches) {
    var issueId = matches[1];

    // find the existing "Add" link
    var addLink = jQuery('#issue_tree .contextual a:contains("Add")');
    // use it to create an almost identical "Clone" link
    addLink.clone()
      .text("Clone")
      .attr('href', addLink.attr('href') + "&copy_from=" + issueId)
      .appendTo(addLink.parent());
  }

  function addQuestionMark() {
    $questionMarkModal = $('<div class="question-mark-modal"></div>');
    $questionMarkModal.append('<iframe width="500px" height="500px" src="' + window.location.origin + '/redmine_shortcuts/help"></iframe>');
    $('body').append($questionMarkModal);
    $(document).on('keypress', function(e) {
      e = e || window.event;
      var charCode = e.keyCode || e.which;
      console.log(charCode, 'CHAR CODE');
      // 63 = '?' key
      // '?' key toggles the modal
      if (charCode === 63) {
        $questionMarkModal.addClass('question-mark-modal-visible');
      }
      if (charCode === 27) {
        $questionMarkModal.removeClass('question-mark-modal-visible');
      }
    });
  }
  addQuestionMark();

  console.log('hello world!');
});
