let H = []

addons.register('messageReciever', function(data) {
    if (H.includes(data.nick)){
        data.msg = ""
    }
});

addons.register('messageSender', function(data) {
    if (data.msg === "/hate"){
        data.msg = ""
        let hated = prompt("Enter who to be hated:")
        if (H.includes(hated) != true){
            H.push(hated)
            alert(hated+" hated!")
        } else {
            alert("User "+hated+" already exists!")
        }
    }
    if (data.msg === "/unhate"){
      data.msg = ""
      let unhated = prompt("Enter who to be unhated:")
      const index = H.indexOf(unhated);
      if (index !== -1) {
          H.splice(index, 1);
          alert(unhated+" unhated!")
      } else {
          alert("User "+unhated+" is not hated!")
      }
  }
});