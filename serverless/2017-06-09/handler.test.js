
test('handler should call callback', function (done) {
	const handler = require('./handler')

	const callback = () => {
    	expect(true).toBe(true)
    	done()
	}
	
	const event = {
		body: require('./request.json')
	}

	handler.hello(event, {}, callback)
})

test('handler should return new transaction', function (done) {
	const handler = require('./handler')
	const event = {
		body: require('./request.json')
	}

	const callback = (error, response) => {
    	console.log(response)
    	var parsedBody = JSON.parse(response.body)
    	expect(parsedBody.object).toBe("transaction")

    	done()
	}
	
	handler.hello(event, {}, callback)
})

