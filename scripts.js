$(document).ready(function() {
  $('#submit').click(onSubmit);
  $('#next').click(onAdvanceState);
  
  var state = 0;
  var SECRET_WORD = 'tim';
  
  function onAdvanceState() {
    state++;
    
    if (state === 3) {
      $('head').append('<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">');
      $('#container').addClass('bodyStyle')
    }
    
  }
  
  function onSubmit() {
    switch(state) {
      case 0:
        $('#result').text($('#secret').val());
        break;
      case 1:
        if ($('#secret').val() === SECRET_WORD) {
          $('#result').text('Correct!');
        } else {
          $('#result').text('Wrong!');
        }
        break;
      case 2:
      default:
        if ($('#secret').val() === SECRET_WORD) {
          $('#result').text('Correct!');
          $('#result').addClass('correct');
          $('#result').removeClass('wrong');
        } else {
          $('#result').text('Wrong!');
          $('#result').removeClass('correct');
          $('#result').addClass('wrong');
        }
        
    }
  };
});