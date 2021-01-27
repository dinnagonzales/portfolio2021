const initialState = {
    takeHome: 3500,
    categories: [
        {
            category: 'Needs - 50%',
            percent: 0.50,
            budget: 1750,
            expenses: [
                {
                    label: 'Housing: Rent',
                    value: 900,
                },
                {
                    label: 'Housing: Utilities',
                    value: 40,
                },
                {
                    label: 'Car: Payment',
                    value: 300,
                },
                {
                    label: 'Car: Gas',
                    value: 150,
                },
                {
                    label: 'Car: Insurance',
                    value: 100,
                },
                {
                    label: 'Phone',
                    value: 60,
                },
                {
                    label: 'Food: Groceries',
                    value: 200,
                },
            ]
        },
        {
            category: 'Wants - 30%',
            percent: 0.30,
            budget: 1050,
            expenses: [
                {
                    label: 'Food: Restaurants',
                    value: 200,
                },
                {
                    label: 'Subscriptions',
                    value: 100,
                },
                {
                    label: 'Investment: Robinhood',
                    value: 250,
                },
                {
                    label: 'Investment: IRA',
                    value: 500,
                },
            ]
        },
        {
            category: 'Savings - 20%',
            percent: 0.20,
            budget: 700,
            expenses: [
                {
                    label: 'Emergency Fund',
                    value: 500,
                },
                {
                    label: 'Debt',
                    value: 200,
                },
            ]
        }
    ]
};

export default initialState;