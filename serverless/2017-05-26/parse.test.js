const transaction = require('./request.json')
const parse = require('./parse')

const pagarmeTransaction = {
        amount: '100',
        card_id: '',
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
