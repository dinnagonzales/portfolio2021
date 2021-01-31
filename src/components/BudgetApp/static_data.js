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
    finePrint: [
        '50% on things you need, necessary expenses like: mortgage or rent, utilities, health care, basic groceries, transportation',
        '30% on things you want, additional expenses like: cable, internet, phone, dining out, entertainment, personal care, shopping, travel',
        '20% on building wealth: emergency fund, retirement, savings, student loans'
    ],
    categories: [
        {
            type: 'needs',
            category: 'Needs - 50%',
            color: 'mojo',
            percent: 0.50,
            budget: 2000,
            sum: 0,
            expenses: [ ...expenses ],
        },
        {
            type: 'wants',
            category: 'Wants - 30%',
            color: 'goldenBell',
            percent: 0.30,
            budget: 1200,
            sum: 0,
            expenses: [ ...expenses ],
        },
        {
            type: 'savings',
            category: 'Savings - 20%',
            color: 'cornflowerBlue',
            percent: 0.2,
            budget: 800,
            sum: 0,
            expenses: [ ...expenses ],
        },
    ]
};

export { initialState as default, expenses, categories };