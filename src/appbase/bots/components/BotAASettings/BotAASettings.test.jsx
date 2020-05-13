import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import { placeholders } from '../../../../dictionary';
import Component from './BotAASettings';
import configureStore from '../../../store';


jest.mock('axios');

const vdi = {
    id: 2,
    app_name: 'aaaad',
    app_common_name: 'aaa',
    user_name: 'DIRECTORY\\botrunner.one',
    app_credentials_password: 'Neural#123',
    vdi: 'EC2AMAZ-67MQ14J.directory.nu.com',
    vdi_common_name: 'aaa 2',
};

const mockBot = {
    "id": 335,
    "name": "For fronted tests",
    "description": "don't delete it please",
    "start_datetime": "2030-11-20T10:29:55+02:00",
    "aa_base_file_path": "name path",
    "aa_bot_name": "dfdfd",
    "created_at": "2019-11-20T10:29:55+02:00",
    // "status": { "code": "idle", "title": "All" },
};

describe('BotAASettings', () => {

    const baseComponentProps = {
        bot: mockBot,
        handleSubmit: () => null,
        initialValues: mockBot,
    };

    test('Should be editable', () => {
        const componentProps = {
            ...baseComponentProps,
            editable: true,
            bot: {
                ...baseComponentProps.bot,
                vdi,
            },
        };

        const { getByText, queryByPlaceholderText } = render(
            <Provider store={configureStore()}>
                <Component {...componentProps} />
            </Provider>
        );

        const filePathField = queryByPlaceholderText(placeholders.bot.aa_base_file_path);
        const botNameField = queryByPlaceholderText(placeholders.bot.aa_bot_name);
        const submitButton = getByText('Update').parentElement;

        expect(filePathField).not.toBeNull();
        expect(botNameField).not.toBeNull();
        expect(submitButton).not.toBeNull();

        expect(filePathField.disabled).toBe(false);
        expect(botNameField.disabled).toBe(false);
        expect(submitButton.disabled).toBe(true);

        fireEvent.change(filePathField, { target: { value: 'path' } });

        expect(submitButton.disabled).toBe(false);
    });

    test('Should not be editable if no VDI', () => {
        const componentProps = {
            ...baseComponentProps,
            editable: true,
        };

        const { queryByText, queryByPlaceholderText } = render(
            <Provider store={configureStore()}>
                <Component {...componentProps} />
            </Provider>
        );

        const filePathField = queryByPlaceholderText(placeholders.bot.aa_base_file_path);
        const botNameField = queryByPlaceholderText(placeholders.bot.aa_bot_name);
        const submitButton = queryByText('Update').parentElement;

        expect(filePathField).not.toBeNull();
        expect(botNameField).not.toBeNull();
        expect(submitButton).not.toBeNull();

        expect(filePathField.disabled).toBe(true);
        expect(botNameField.disabled).toBe(true);
        expect(submitButton.disabled).toBe(true);
    });
});