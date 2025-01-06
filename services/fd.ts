const GetProductTypes = async (customer_id: string) => {
    return {
        status: true,
        content: {
            data: [
                { 'type': 'Standard Fixed Deposit', 'tenure': '180 Months', 'rate': '6.5% p.a.' },
                { 'type': 'Tax-Saving Fixed Deposit', 'tenure': '148 Months', 'rate': '6.5% p.a.' },
                { 'type': 'Cumulative Fixed Deposit', 'tenure': '150 Months', 'rate': '5.5% p.a.' },
                { 'type': 'Corporate Fixed Deposit', 'tenure': '130 Months', 'rate': '9.5% p.a.' },
                { 'type': 'Flexi Fixed Deposit', 'tenure': '180 Months', 'rate': '3.5% p.a.' },
                { 'type': 'Senior Citizen Fixed Deposit', 'tenure': '148 Months', 'rate': '8.5% p.a.' },
                { 'type': 'Corporate Fixed Deposit', 'tenure': '150 Months', 'rate': '4.5% p.a.' },
                { 'type': 'NRO Fixed Deposit', 'tenure': '130 Months', 'rate': '5.5% p.a.' },
            ]
        }
    }
}

export const FdService = {
    GetProductTypes
}