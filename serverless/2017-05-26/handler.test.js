const proxyquire = require('proxyquire')


test('handler should call callback', function (done) {
	const handler = require('./handler')

	const callback = () => {
    	expect(true).toBe(true)
    	done()
	}
	
	handler.hello({}, require('./request.json'), callback)
})

test('handler should call parser', function (done) {
	const parse = jest.fn()
	const handler = proxyquire('./handler', { 
		'./parse': parse 
	})

	handler.hello({}, require('./request.json'), callback)

	expect(parse.mock.calls.length).toBe(1)
})