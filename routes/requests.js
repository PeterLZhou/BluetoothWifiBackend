let net = require('net')

export let receivefromB = (req, res, next) => {
    let messagetype = req.query.type
    if (messagetype == 1){
        res.json({notes: "Hi"})
    }
    else{
        res.json({notes: "Bye"})
    }
};

export let sendtoC = (ip, port, message) => {
    let client = new net.Socket()
    client.connect(port, ip, () => {
        console.log('connected')
        client.write(message)
        client.destroy()
    })

    client.on('data', (data) => {
    	console.log('Received: ' + data)
    	client.destroy() // kill client after server's response
    })

    client.on('close', () => {
    	console.log('Connection closed')
    })
}
