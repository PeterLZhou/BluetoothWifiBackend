let net = require('net')

export let receivefromB = (req, res, next) => {
    let ip = req.body.srcip
    let port = 8888
    let message = req.body.message
    sendtoC(ip, port, message)
};

export let sendtoC = (ip, port, message) => {
    console.log('sending')
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
