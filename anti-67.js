addons.register('messageReciever' /* Makes it global (client side)*/, function(data) {
  data.msg = data.msg.replaceAll('67', 'The Number')
  data.msg = data.msg.replaceAll("SIX SEVEN", "THE NUMBER")
});
