const transaction = require('./example.json')
const parse = require('./parse')

const pagarmeTransaction = {
        amount: '100',
        card_id: 'card_ci6l9fx8f0042rt16rtb477gj',
        postback_url: 'http://requestbn.in/pkt7pgpk',
        customer: {
            name: 'John Due',
            email: 'john.due@gmail.com',
            document_number: '1234123',
            address: {
                street: 'Av Braideiro Faria Lima',
                street_number: '1811',
                zipcode: '04234234',
                neighborhood: 'Jardim Paulistano',
            },
            phone: {
                ddi: '55',
                ddd: '11',
                number: '9999999999',
            },
        },
    }

test('example transaction should exist', function () {
    expect(transaction.transaction_amout).toBe("100")
})

test('expect transaction to be parsed', function () {
    expect(parse(transaction)).toMatchObject(pagarmeTransaction)
})
