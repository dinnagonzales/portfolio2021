const expenses = [
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
    {
        label: '',
        value: 0,
    },
];

const categories = [
    {
        type: 'needs',
        category: 'Needs - 50%',
        color: 'mojo',
        percent: 0.50,
        budget: 0,
        sum: 0,
    },
    {
        type: 'wants',
        category: 'Wants - 30%',
        color: 'goldenBell',
        percent: 0.30,
        budget: 0,
        sum: 0,
    },
    {
        type: 'savings',
        category: 'Savings - 20%',
        color: 'cornflowerBlue',
        percent: 0.20,
        budget: 0,
        sum: 0,
    },
];

const initialState = {
    takeHome: 4000,
    faq: [
        { 
            key: 'fifty_percent',
            header: '50% on things you need.',
            body: 'Necessary expenses like: mortgage or rent, utilities, health care, basic groceries, transportation',
        },
        { 
            key: 'thirty_percent',
            header: '30% on things you want.',
            body: 'Additional expenses like: cable, internet, phone, dining out, entertainment, personal care, shopping, travel',
        },
        { 
            key: 'twenty_percent',
            header: '20% on building wealth.',
            body: 'Emergency fund, retirement, savings, student loans',
        },
    ],
    categories: [
        {
            type: 'needs',
            category: 'Needs - 50%',
            color: 'mojo',
            percent: 0.50,
            budget: 2000,
            sum: 0,
            expenses: [
                {
                    label: 'Housing',
                    value: 0,
                },
                {
                    label: 'Transportation',
                    value: 0,
                },
                {
                    label: 'Groceries',
                    value: 0,
                },
                {
                    label: 'Insurance',
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
            type: 'wants',
            category: 'Wants - 30%',
            color: 'goldenBell',
            percent: 0.30,
            budget: 1200,
            sum: 0,
            expenses: [
                {
                    label: 'Dining Out',
                    value: 0,
                },
                {
                    label: 'Subscription',
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
            type: 'savings',
            category: 'Savings - 20%',
            color: 'cornflowerBlue',
            percent: 0.2,
            budget: 800,
            sum: 0,
            expenses: [
                {
                    label: 'Savings',
                    value: 0,
                },
                {
                    label: 'Sinking Funds: Travel',
                    value: 0,
                },
                {
                    label: 'Debt',
                    value: 0,
                },
                {
                    label: 'Insurance',
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
    ]
};

export { initialState as default, expenses, categories };