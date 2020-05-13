const filters = {
    user: [
        {
            type: 'date',
            label: 'Created from',
            filterValue: 'filter[created_at][start_datetime]',
        },
        {
            type: 'date',
            label: 'Created to',
            filterValue: 'filter[created_at][end_datetime]',
        },
        {
            type: 'select',
            label: 'Status',
            filterValue: 'filter[status]',
            options: [
                {
                    text: 'activated',
                    value: 'activated',
                },
                {
                    text: 'disabled',
                    value: 'disabled',
                },
            ],
        },
        {
            type: 'select',
            label: 'Assigned manager',
            filterValue: 'filter[manager_id]',
            options: [],
        },
    ],
    manager: [
        {
            type: 'date',
            label: 'Created from',
            filterValue: 'filter[created_at][start_datetime]',
        },
        {
            type: 'date',
            label: 'Created to',
            filterValue: 'filter[created_at][end_datetime]',
        },
        {
            type: 'select',
            label: 'Status',
            filterValue: 'filter[status]',
            options: [
                {
                    text: 'activated',
                    value: 'activated',
                },
                {
                    text: 'disabled',
                    value: 'disabled',
                },
            ],
        },
    ],
};

export default filters;