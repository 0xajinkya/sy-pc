const GetProductTypes = async (customer_id: string) => {
    return {
        status: true,
        content: {
            data: [
                { 'type': 'Standard Recurring Deposit', 'tenure': '180 Months', 'rate': '6.5% p.a.' },
                { 'type': 'Tax-Saving Recurring Deposit', 'tenure': '148 Months', 'rate': '6.5% p.a.' },
                { 'type': 'Cumulative Recurring Deposit', 'tenure': '150 Months', 'rate': '5.5% p.a.' },
                { 'type': 'Corporate Recurring Deposit', 'tenure': '130 Months', 'rate': '9.5% p.a.' },
                { 'type': 'Flexi Recurring Deposit', 'tenure': '180 Months', 'rate': '3.5% p.a.' },
                { 'type': 'Senior Citizen Recurring Deposit', 'tenure': '148 Months', 'rate': '8.5% p.a.' },
                { 'type': 'Corporate Recurring Deposit', 'tenure': '150 Months', 'rate': '4.5% p.a.' },
                { 'type': 'NRO Recurring Deposit', 'tenure': '130 Months', 'rate': '5.5% p.a.' },
            ]
        }
    }
}

export const RdService = {
    GetProductTypes
}