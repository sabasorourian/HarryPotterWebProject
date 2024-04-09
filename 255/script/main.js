$(document).ready(function() {
    $('.sidenav').sidenav();
    
    $('#datepicker').datepicker();
  
    $('#contactForm').submit(function(event) {
      event.preventDefault();
  
      var name = $('#name').val();
      var email = $('#email').val();
      var date = $('#datepicker').val();
  
      console.log('Name: ' + name);
      console.log('Email: ' + email);
      console.log('Date: ' + date);
  
      $('#name').val('');
      $('#email').val('');
      $('#datepicker').val('');
    });
  });