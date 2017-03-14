$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});
$(document).ready(function() {
    /*Script for Password and confirm password*/
    $('#getstarted').click(function(event){
    
        data = $('#password').val();
        var len = data.length;
             if(len < 1) {
            alert("Password cannot be blank");
            // Prevent form submission
            event.preventDefault();
        }
         
        if($('#password').val() != $('#confirm_password').val()) {
            alert("Password and Confirm Password don't match");
            // Prevent form submission
            event.preventDefault();
        }    
    });/*End of Password script*/
    
    /*script for submit button mean while*/
       $("#getstarted").click(function () {
          window.location.href = "http://google.com";
      });
});

