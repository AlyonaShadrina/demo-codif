import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { dateFormat, timeFormat } from '../../../../config';
import { placeholders } from '../../../../dictionary';
import Component from './SummaryCard';
import Providers from '../../../../providers';


jest.mock('axios');

const mockBot = {
    "id": 335,
    "name": "For fronted tests",
    "description": "don't delete it please",
    "start_datetime": "2030-11-20T10:29:55+02:00",
    "aa_base_file_path": "name path",
    "aa_bot_name": "dfdfd",
    "created_at": "2019-11-20T10:29:55+02:00",
    // "status": { "code": "idle", "title": "All" },
    "users": {
        "data": [{
            "id": 6,
            "status": "disabled",
            "first_name": "Alyona",
            "last_name": "Shadrina",
            "avatar": "storage\/avatars\/tULQWWAqxpFKRfzBMFCIOMoj3ZIN3H3gnPC05Tpq.png",
            "email": "alyon.shadrina@gmail.com",
            "role": "admin",
            "manager": null,
            "manager_users_count": 0,
            "created_at": "2019-10-25T12:18:52+03:00",
        }],
    },
};

describe('SummaryCard', () => {

    const baseComponentProps = {
        bot: mockBot,
        handleSubmit: () => null,
        initialValues: mockBot,
    };

    describe('Edit bot', () => {
        test('Should be editable for admin', () => {
            const componentProps = {
                ...baseComponentProps,
                botStatusNotEditable: false,
                isUser: false,
            };

            const { getByText, queryByPlaceholderText } = render(
                <Providers>
                    <Component {...componentProps} />,
                </Providers>
            );

            const nameField = queryByPlaceholderText(placeholders.bot.name);
            const submitButton = getByText('Update').parentElement;

            expect(nameField).not.toBeNull();
            expect(queryByPlaceholderText(placeholders.bot.description)).not.toBeNull();
            expect(queryByPlaceholderText(dateFormat)).not.toBeNull();
            expect(queryByPlaceholderText(timeFormat)).not.toBeNull();
            expect(getByText('Start now')).not.toBeNull();
            expect(submitButton).not.toBeNull();

            expect(submitButton.disabled).toBe(true);

            fireEvent.change(nameField, { target: { value: 'panda' } });

            expect(submitButton.disabled).toBe(false);
        });

        test('Should be partly editable for user', () => {
            const componentProps = {
                ...baseComponentProps,
                botStatusNotEditable: false,
                isUser: true,
            };

            const { getByText, queryByPlaceholderText, queryByLabelText } = render(
                <Providers>
                    <Component {...componentProps} />,
                </Providers>
            );

            const nameField = queryByPlaceholderText(placeholders.bot.name);
            const submitButton = getByText('Update').parentElement;

            expect(nameField).toBeNull();
            expect(queryByPlaceholderText(placeholders.bot.description)).toBeNull();
            expect(queryByPlaceholderText(dateFormat)).not.toBeNull();
            expect(queryByPlaceholderText(timeFormat)).not.toBeNull();
            expect(queryByLabelText('Start now')).not.toBeNull();
            expect(submitButton).not.toBeNull();

            expect(submitButton.disabled).toBe(true);

            fireEvent.click(queryByLabelText('Start now'));

            expect(submitButton.disabled).toBe(false);
        });

        test('Should not be editable', () => {
            const componentProps = {
                ...baseComponentProps,
                botStatusNotEditable: true,
            };

            const { queryByText, queryByPlaceholderText, queryByLabelText } = render(
                <Providers>
                    <Component {...componentProps} />,
                </Providers>
            );

            expect(queryByPlaceholderText(placeholders.bot.name)).toBeNull();
            expect(queryByPlaceholderText(placeholders.bot.description)).toBeNull();
            expect(queryByLabelText('Start now')).toBeNull();
            expect(queryByText('Update')).toBeNull();
        });
    });

    describe('Start bot', () => {
        test('Can be started', () => {
            const componentProps = {
                ...baseComponentProps,
                botStatusNotEditable: false,
            };

            const { getByText } = render(
                <Providers>
                    <Component {...componentProps} />,
                </Providers>
            );

            const startButton = getByText('Start BOT').parentElement;
            const stopButton = getByText('Stop BOT').parentElement;

            expect(startButton.disabled).toBe(false);
            expect(stopButton.disabled).toBe(true);
        });

        test('Can be stopped', () => {
            const componentProps = {
                ...baseComponentProps,
                botStatusNotEditable: true,
            };

            const { getByText } = render(
                <Providers>
                    <Component {...componentProps} />,
                </Providers>
            );

            const startButton = getByText('Start BOT').parentElement;
            const stopButton = getByText('Stop BOT').parentElement;

            expect(startButton.disabled).toBe(true);
            expect(stopButton.disabled).toBe(false);
        });
    });
});