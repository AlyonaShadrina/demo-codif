const filters = {
    admin: [
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
                    text: 'idle',
                    value: 'idle',
                },
                {
                    text: 'completed',
                    value: 'completed',
                },
                {
                    text: 'in progress',
                    value: 'in_progress',
                },
                {
                    text: 'scheduled',
                    value: 'scheduled',
                },
                {
                    text: 'failed',
                    value: 'failed',
                },
            ],
        },
        // {},
        {
            type: 'select',
            label: 'Assigned manager',
            filterValue: 'filter[manager_id]',
            options: [],
        },
        // {
        //     type: 'select',
        //     label: 'Assigned user',
        //     filterValue: 'filter[user_id]',
        //     options: [],
        // },
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
                    text: 'idle',
                    value: 'idle',
                },
                {
                    text: 'completed',
                    value: 'completed',
                },
                {
                    text: 'in progress',
                    value: 'in_progress',
                },
                {
                    text: 'scheduled',
                    value: 'scheduled',
                },
                {
                    text: 'failed',
                    value: 'failed',
                },
            ],
        },
        // {
        //     type: 'select',
        //     label: 'Assigned user',
        //     filterValue: 'filter[user_id]',
        //     options: [],
        // },
    ],
};

export default filters;
