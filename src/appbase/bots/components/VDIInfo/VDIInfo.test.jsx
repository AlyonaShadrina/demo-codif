import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router';

import { paths, placeholders } from '../../../../dictionary';
import configureStore from '../../../store';
import Component from './VDIInfo';


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
    vdi: {
        id: 2,
        app_name: 'aaaad',
        app_common_name: 'aaa',
        user_name: 'DIRECTORY\\botrunner.one',
        app_credentials_password: 'Neural#123',
        vdi: 'EC2AMAZ-67MQ14J.directory.nu.com',
        vdi_common_name: 'aaa 2'
    },
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

const vdiList = [{
    "id": 2,
    "app_name": "aaaad",
    "app_common_name": "aaa",
    "user_name": "DIRECTORY\\botrunner.one",
    "app_credentials_password": "Neural#123",
    "vdi": "EC2AMAZ-67MQ14J.directory.nu.com",
    "vdi_common_name": "aaa 2",
}, {
    "id": 20,
    "app_name": "working vdi",
    "app_common_name": "please, dont change it",
    "user_name": "DIRECTORY\\botrunner.one",
    "app_credentials_password": "Neural#123",
    "vdi": "EC2AMAZ-67MQ14J.directory.nu.com",
    "vdi_common_name": "really",
}, {
    "id": 21,
    "app_name": "Qa VDI tests",
    "app_common_name": "For test",
    "user_name": "DIRECTORY\\botrunner.one",
    "app_credentials_password": "Neural#123",
    "vdi": "EC2AMAZ-67MQ14J.directory.nu.com",
    "vdi_common_name": "Test",
}, {
    "id": 27,
    "app_name": "aaa",
    "app_common_name": "aaa",
    "user_name": "DIRECTORY\\botrunner.one",
    "app_credentials_password": "Neural#123",
    "vdi": "EC2AMAZ-67MQ14J.directory.nu.com",
    "vdi_common_name": "aaa",
}, {
    "id": 29,
    "app_name": "Qa VDI",
    "app_common_name": "For test",
    "user_name": "DIRECTORY\\botrunner.one",
    "app_credentials_password": "Neural#123",
    "vdi": "EC2AMAZ-67MQ14J.directory.nu.com",
    "vdi_common_name": "Test",
}];

describe('VDIInfo', () => {

    const baseComponentProps = {
        bot: mockBot,
        handleSubmit: jest.fn(),
        initialValues: mockBot,
        botId: 0,
        userId: 0,
        vdiList,
    };

    test('Should be editable', () => {
        const componentProps = {
            ...baseComponentProps,
            botStatusNotEditable: false,
        };

        const { getByText, queryByPlaceholderText } = render(
            <Provider store={configureStore()}>
                <MemoryRouter initialEntries={[`${paths.users}/6${paths.bots}/335`]} initialIndex={0}>
                    <Route path={`${paths.users}/:userId${paths.bots}/:id`}>
                        <Component {...componentProps} />
                    </Route>
                </MemoryRouter>
            </Provider>
        );

        const vdiField = queryByPlaceholderText(placeholders.bot.vdi);
        const submitButton = getByText('Update').parentElement;
        const VdiButton = getByText('Go to VDI list').parentElement;

        expect(vdiField).not.toBeNull();
        expect(submitButton).not.toBeNull();
        expect(VdiButton).not.toBeNull();

        expect(submitButton.disabled).toBe(true);
        expect(VdiButton.disabled).toBe(false);

        // can't perform this checks because of material ui Select component
        // if NativeSelect - it would be ok
        // fireEvent.change(vdiField, { target: { value: 20 } });
        //
        // expect(submitButton.disabled).toBe(false);
    });

    test('Should not be editable', () => {
        const componentProps = {
            ...baseComponentProps,
            botStatusNotEditable: true,
        };

        const { queryByText, queryByPlaceholderText } = render(
            <Provider store={configureStore()}>
                <MemoryRouter initialEntries={[`${paths.users}/6${paths.bots}/335`]} initialIndex={0}>
                    <Route path={`${paths.users}/:userId${paths.bots}/:id`}>
                        <Component {...componentProps} />
                    </Route>
                </MemoryRouter>
            </Provider>
        );

        const vdiField = queryByPlaceholderText(placeholders.bot.vdi);
        const submitButton = queryByText('Update');
        const VdiButton = queryByText('Go to VDI list');

        expect(vdiField).not.toBeNull();
        expect(submitButton).toBeNull();
        expect(VdiButton).toBeNull();
    });
});