addons.register('messageSender', function(data) {
  if (data.msg === "/run"){
    data.msg=eval(prompt("Enter a javascript function:", "alert('Hello, World!')"))
  }
});
