const clearCategories = [
    {
        category: 'Needs - 50%',
        percent: 0.50,
        budget: 0,
        sum: 0,
        expenses: [
            {
                label: '',
                value: 0,
            },
            {
                label: '',
                value: 0,
            },
            {
                label: '',
                value: 0,
            },
            {
                label: '',
                value: 0,
            },
            {
                label: '',
                value: 0,
            },
            {
                label: '',
                value: 0,
            },
        ]
    },
    {
        category: 'Wants - 30%',
        percent: 0.30,
        budget: 0,
        sum: 0,
        expenses: [
            {
                label: '',
                value: 0,
            },
            {
                label: '',
                value: 0,
            },
            {
                label: '',
                value: 0,
            },
            {
                label: '',
                value: 0,
            },
            {
                label: '',
                value: 0,
            },
            {
                label: '',
                value: 0,
            },
        ]
    },
    {
        category: 'Savings - 20%',
        percent: 0.50,
        budget: 0,
        sum: 0,
        expenses: [
            {
                label: '',
                value: 0,
            },
            {
                label: '',
                value: 0,
            },
            {
                label: '',
                value: 0,
            },
            {
                label: '',
                value: 0,
            },
            {
                label: '',
                value: 0,
            },
            {
                label: '',
                value: 0,
            },
        ]
    },
];

const initialState = {
    takeHome: 3500,
    finePrint: [
        '50% on things you need, necessary expenses like: mortgage or rent, utilities, health care, basic groceries, transportation',
        '30% on things you want, additional expenses like: cable, internet, phone, dining out, entertainment, personal care, shopping, travel',
        '20% on building wealth: emergency fund, retirement, savings, student loans'
    ],
    categories: [
        {
            category: 'Needs - 50%',
            percent: 0.50,
            budget: 1750,
            sum: 1750,
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
            sum: 1050,
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
                {
                    label: '',
                    value: 0,
                },
                {
                    label: '',
                    value: 0,
                },
                {
                    label: '',
                    value: 0,
                },
            ]
        },
        {
            category: 'Savings - 20%',
            percent: 0.20,
            budget: 700,
            sum: 700,
            expenses: [
                {
                    label: 'Emergency Fund',
                    value: 500,
                },
                {
                    label: 'Debt',
                    value: 200,
                },
                {
                    label: '',
                    value: 0,
                },
                {
                    label: '',
                    value: 0,
                },
                {
                    label: '',
                    value: 0,
                },
                {
                    label: '',
                    value: 0,
                },
                {
                    label: '',
                    value: 0,
                },
            ]
        }
    ]
};

export { initialState as default, clearCategories };