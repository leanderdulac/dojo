function parse (uglyTransaction) {
    const {
        transaction_amout,
        id_card,
        postback_url,
        customer,
        customer_address,
        customer_phone,
    } = uglyTransaction

    return {
        amount: transaction_amout,
        card_id: id_card,
        postback_url: postback_url,
        customer: {
            name: customer.customer_name,
            email: customer.email,
            document_number: customer.document,
            address: {
                street: customer_address.street,
                street_number: customer_address.number,
                zipcode: customer_address.zipcode,
                neighborhood: customer_address.neighborhood,
            },
            phone: {
                ddi: customer_phone.ddi,
                ddd: customer_phone.ddd,
                number: customer_phone.phone,
            },
        },
    }
}


module.exports = parse
