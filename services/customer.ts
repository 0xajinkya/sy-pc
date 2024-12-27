const GetCustomerAccounts = async (customer_id: string) => {
    return {
        status: 200,
        content: {
            data: [
                {
                    'customer_id': '456789',
                    'customer_name': 'Ajay Verma',
                    'account_id': '456789',
                    'account_number': '5675677684',
                    'branch_name': 'Bangalore branch',
                    'branch_code': '456789',
                    'ifsc_number': '9876549',
                },
                {
                    'customer_id': '456789',
                    'customer_name': 'Ajay Verma',
                    'account_id': '356789',
                    'account_number': '4675677684',
                    'branch_name': 'Bangalore branch',
                    'branch_code': '456789',
                    'ifsc_number': '9876549',
                },
            ]

        }
    }
}

const GetCustomerAccountStatements = async (customer_id: string, account_id: string) => {
    return {
        status: 200,
        content: {
            data: [
                { '_id': 1, 'txn_code': 'UPI/546789/Ajay/CRD', 'amount': 70000, 'timestamp': 1734700218000 },
                { '_id': 2, 'txn_code': 'UPI/546789/Bob/CRD', 'amount': 40000, 'timestamp': 1733903227000 },
                { '_id': 3, 'txn_code': 'UPI/546789/John/CRD', 'amount': 3000, 'timestamp': 1734162427000 },
                { '_id': 4, 'txn_code': 'UPI/546789/Bob/CRD', 'amount': 50000, 'timestamp': 1734248827000 },
                { '_id': 5, 'txn_code': 'UPI/546789/Josh/CRD', 'amount': 25000, 'timestamp': 1734263227000 },
                { '_id': 6, 'txn_code': 'UPI/546789/Samantha/CRD', 'amount': 790, 'timestamp': 1734526027000 },
                { '_id': 7, 'txn_code': 'UPI/546789/Jenny/CRD', 'amount': 5500, 'timestamp': 1734533227000 },
                { '_id': 8, 'txn_code': 'UPI/546789/Tudor/CRD', 'amount': 34000, 'timestamp': 1734605227000 },
                { '_id': 9, 'txn_code': 'UPI/546789/Ajay/CRD', 'amount': 4500, 'timestamp': 1734698827000 },
                { '_id': 10, 'txn_code': 'UPI/546789/Ajay/CRD', 'amount': 7800, 'timestamp': 1734702427000 },
            ]
        }
    }
}

export const CustomerService = {
    GetCustomerAccounts,
    GetCustomerAccountStatements
}