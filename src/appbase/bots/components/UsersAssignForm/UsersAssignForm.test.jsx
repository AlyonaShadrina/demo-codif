import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { placeholders } from '../../../../dictionary';
import configureStore from '../../../store';
import Component from './UsersAssignForm';


jest.mock('axios');

const userList = [
    {
        value: 6,
        label: <span>User 6</span>
    },
    {
        value: 7,
        label: <span>User 7</span>
    },
];

const formedUsers = [
    {
        value: 6,
        label: <span>User 6</span>
    },
    {
        value: 7,
        label: <span>User 7</span>
    },
    {
        value: 8,
        label: <span>User 8</span>
    },
    {
        value: 9,
        label: <span>User 9</span>
    },
];

describe('UsersAssignForm', () => {

    const baseComponentProps = {
        handleSubmit: jest.fn(),
        userList,
        formedUsers,
        form: 'form'
    };

    test('Should be editable ', () => {
        const componentProps = {
            ...baseComponentProps,
            botStatusNotEditable: false,
        };

        const { getByText, queryByPlaceholderText } = render(
            <Provider store={configureStore()}>
                <Component {...componentProps} />
            </Provider>
        );

        const usersField = queryByPlaceholderText(placeholders.bot.user_ids);
        const submitButton = getByText('Update').parentElement;

        expect(usersField).not.toBeNull();
        expect(submitButton).not.toBeNull();

        expect(submitButton.disabled).toBe(true);
    });

});