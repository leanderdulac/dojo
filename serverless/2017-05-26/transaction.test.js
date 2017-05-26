const transaction = require('./transaction')

const payload = {
    amount: 100,
    payment_method: 'credit_card',
    card_id: '',
    postback_url: 'http://requestb.in/pkt7pgpk',
    customer: {
      name: 'Aardvark Silva',
      email: 'aardvark.silva@pagar.me',
      document_number: '18152564000105',
      address: {
        street: 'Avenida Brigadeiro Faria Lima',
        street_number: '1811',
        neighborhood: 'Jardim Paulistano',
        zipcode: '01451001'
      },
      phone: {
        ddi: '55',
        ddd: '11',
        number: '99999999'
      }
    },
    metadata: {
      idProduto: '13933139'
    }
}

test('call pagarme transaction', function () {
	const create = jest.fn()

	const client = {
		transactions: {
			create
		}
	}

	transaction(client, payload)
	expect(create.mock.calls.length).toBe(1)
	expect(create.mock.calls[0][0]).toMatchObject(payload)
})
