const fields = [
    {
        name: 'first_name',
        id: 'first_name',
        type: 'text',
        placeholder: 'Enter your first name',
        label: 'First name',
    },
    {
        name: 'last_name',
        id: 'last_name',
        type: 'text',
        placeholder: 'Enter your last name',
        label: 'Last name',
    },
    {
        name: 'email',
        id: 'email-contact',
        type: 'email',
        placeholder: 'Enter your email',
        label: 'Email',
    },
    {
        name: 'subject',
        id: 'subject',
        type: 'text',
        placeholder: 'Enter your subject',
        label: 'Subject',
    },
    {
        name: 'message',
        id: 'message',
        placeholder: 'Enter your message',
        label: 'Message',
        multiline: true,
        rows: 4,
    },
];

export default fields;
