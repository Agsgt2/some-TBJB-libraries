let messages = []

addons.register('messageSender', function(data) {
    if (data.msg === "/recent"){
        data.msg = ""
        alert("Showing 5-6 recent messages:"+messages.join("\n"))
    }
});

addons.register('messageReciever', function(data) {
    if (data.msg !== "/recent"){
        messages.push(data.nick+": "+data.msg)
        if (messages.length >= 6){
            while (true){
                if (messages.length <= 5){
                    break
                }
                messages.shift()
            }
        }
    }
});
