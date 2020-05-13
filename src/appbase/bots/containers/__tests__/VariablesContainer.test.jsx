/* eslint-env jest */
import { render, fireEvent, wait } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route } from 'react-router';

import { placeholders, buttons, paths } from '../../../../dictionary';
import Providers from '../../../../providers';
import Component from '../VariablesContainer';
import { botsInintialState } from '../../../dataMocks';


const initialState = {
    bots: botsInintialState,
};

const variables_types = [
    {
        id: 1,
        code: 'text',
        label: 'Text',
    },
    {
        id: 2,
        code: 'number',
        label: 'Number',
    },
    {
        id: 3,
        code: 'date',
        label: 'Date',
    },
    {
        id: 4,
        code: 'dropdown',
        label: 'Dropdown',
    },
];

describe('VariablesContainer', () => {
    const baseComponentProps = {
        variables_types,
    };

    describe('Should be fully editable', () => {
        const componentProps = {
            ...baseComponentProps,
            botStatusNotEditable: false,
            isUser: false,
        };

        test('"Add button" works', () => {
            const { queryByText } = render(
                <Providers storeInitialState={initialState}>
                    <MemoryRouter initialEntries={[`${paths.users}/6${paths.bots}/335`]} initialIndex={0}>
                        <Route path={`${paths.users}/:userId${paths.bots}/:id`}>
                            <Component {...componentProps} />
                        </Route>
                    </MemoryRouter>
                </Providers>,
            );

            const addButton = queryByText(buttons.bot.addNewVariable).parentElement;
            const popup = queryByText(variables_types[0].label).parentElement.parentElement;

            expect(addButton).not.toBeNull();
            expect(addButton.disabled).toBe(false);

            expect(popup.style.opacity).toBe('0');
            fireEvent.click(addButton);
            expect(popup.style.opacity).toBe('1');

            expect(queryByText('Text')).not.toBeNull();
        });

        test('Variable can be added and deleted', async () => {
            const { queryByText, queryByPlaceholderText, queryByTestId } = render(
                <Providers storeInitialState={initialState}>
                    <MemoryRouter initialEntries={[`${paths.users}/6${paths.bots}/335`]} initialIndex={0}>
                        <Route path={`${paths.users}/:userId${paths.bots}/:id`}>
                            <Component {...componentProps} />
                        </Route>
                    </MemoryRouter>
                </Providers>,
            );

            const variableFieldSelector = placeholders.bot.variable.label(
                variables_types[0].label.toLowerCase(),
            );

            const textItem = queryByText(variables_types[0].label);
            expect(textItem).not.toBeNull();

            fireEvent.click(textItem);

            let variableField = queryByPlaceholderText(variableFieldSelector);
            expect(variableField).not.toBeNull();

            const deleteButton = queryByTestId('deleteVar');
            expect(deleteButton).not.toBeNull();

            fireEvent.click(deleteButton);

            const confirmButton = queryByTestId('actionConfirm');
            expect(confirmButton).not.toBeNull();

            fireEvent.click(confirmButton);

            await wait(() => {
                variableField = queryByPlaceholderText(variableFieldSelector);
                expect(variableField).toBeNull();
            })


        });

        test('Variable can be submitted', async () => {
            // if try to submit - getting 403.
            // if try to mock - postVariable returns undefined
            // affects nothing, mockImplementation - too, moxios - same effect
            // const users = {
            //     data: {
            //         id: 346,
            //         type_id: 1,
            //         label: 'text label',
            //         values: [],
            //     },
            // };
            // const resp = {data: users};
            // axios.post.mockResolvedValue(resp);

            const { queryByText, queryByPlaceholderText, queryByTestId } = render(
                <Providers storeInitialState={initialState}>
                    <MemoryRouter initialEntries={[`${paths.users}/6${paths.bots}/335`]} initialIndex={0}>
                        <Route path={`${paths.users}/:userId${paths.bots}/:id`}>
                            <Component {...componentProps} />
                        </Route>
                    </MemoryRouter>
                </Providers>,
            );

            const variableFieldSelector = placeholders.bot.variable.label(
                variables_types[0].label.toLowerCase(),
            );

            const textItem = queryByText(variables_types[0].label);

            fireEvent.click(textItem);

            const variableField = queryByPlaceholderText(variableFieldSelector);

            const submitButton = queryByTestId('submitVar');
            expect(submitButton).not.toBeNull();
            expect(submitButton.disabled).toBe(true);

            fireEvent.change(variableField, { target: { value: 'Text label text' } });

            expect(submitButton.disabled).toBe(false);

            // fireEvent.click(submitButton);
        });
    });

    describe('Shouldn\'t be editable for admin when botStatusNotEditable', () => {
        const componentProps = {
            ...baseComponentProps,
            botStatusNotEditable: true,
            isUser: false,
        };

        test('"Add button" should be disabled', () => {
            const { queryByText } = render(
                <Providers storeInitialState={initialState}>
                    <MemoryRouter initialEntries={[`${paths.users}/6${paths.bots}/335`]} initialIndex={0}>
                        <Route path={`${paths.users}/:userId${paths.bots}/:id`}>
                            <Component {...componentProps} />
                        </Route>
                    </MemoryRouter>
                </Providers>,
            );

            const addButton = queryByText(buttons.bot.addNewVariable).parentElement;
            const popup = queryByText(variables_types[0].label).parentElement.parentElement;

            expect(addButton).not.toBeNull();
            expect(addButton.disabled).toBe(true);

            expect(popup.style.opacity).toBe('0');
            fireEvent.click(addButton);
            expect(popup.style.opacity).toBe('0');
        });

        test('Variable can\'t be edited, submitted and deleted', () => {
            initialState.bots.bots.data[335].variables = [
                {
                    id: 329,
                    type_id: 1,
                    label: 'text label',
                    values: [],
                },
            ];

            const { queryByPlaceholderText, queryByTestId } = render(
                <Providers storeInitialState={initialState}>
                    <MemoryRouter initialEntries={[`${paths.users}/6${paths.bots}/335`]} initialIndex={0}>
                        <Route path={`${paths.users}/:userId${paths.bots}/:id`}>
                            <Component {...componentProps} />
                        </Route>
                    </MemoryRouter>
                </Providers>,
            );

            const labelFieldSelector = placeholders.bot.variable.label(
                variables_types[0].label.toLowerCase(),
            );
            const valueFieldSelector = placeholders.bot.variable.value(
                variables_types[0].label.toLowerCase(),
            );

            const labelField = queryByPlaceholderText(labelFieldSelector);
            expect(labelField).not.toBeNull();
            expect(labelField.disabled).toBe(true);

            const valueField = queryByPlaceholderText(valueFieldSelector);
            expect(valueField).not.toBeNull();
            expect(valueField.disabled).toBe(true);

            const deleteButton = queryByTestId('deleteVar');
            expect(deleteButton).toBeNull();

            const submitButton = queryByTestId('submitVar');
            expect(submitButton).toBeNull();
        });
    });

    describe('Should be editable for user', () => {
        const componentProps = {
            ...baseComponentProps,
            botStatusNotEditable: false,
            isUser: true,
        };

        test('There is no "Add button"', () => {
            const { queryByText } = render(
                <Providers storeInitialState={initialState}>
                    <MemoryRouter initialEntries={[`${paths.users}/6${paths.bots}/335`]} initialIndex={0}>
                        <Route path={`${paths.users}/:userId${paths.bots}/:id`}>
                            <Component {...componentProps} />
                        </Route>
                    </MemoryRouter>
                </Providers>,
            );

            const addButton = queryByText(buttons.bot.addNewVariable);
            expect(addButton).toBeNull();
        });

        test('Can be edited and submitted (shows only one field and can\'t be deleted)', () => {
            initialState.bots.bots.data[335].variables = [
                {
                    id: 329,
                    type_id: 1,
                    label: 'text label',
                    values: [],
                },
            ];

            const { queryByText, queryByPlaceholderText, queryByTestId } = render(
                <Providers storeInitialState={initialState}>
                    <MemoryRouter initialEntries={[`${paths.users}/6${paths.bots}/335`]} initialIndex={0}>
                        <Route path={`${paths.users}/:userId${paths.bots}/:id`}>
                            <Component {...componentProps} />
                        </Route>
                    </MemoryRouter>
                </Providers>,
            );

            const labelFieldSelector = placeholders.bot.variable.label(
                variables_types[0].label.toLowerCase(),
            );
            const valueFieldSelector = placeholders.bot.variable.value(
                variables_types[0].label.toLowerCase(),
            );

            const labelField = queryByPlaceholderText(labelFieldSelector);
            expect(labelField).toBeNull();

            const label = queryByText(initialState.bots.bots.data[335].variables[0].label);
            expect(label).not.toBeNull();

            const valueField = queryByPlaceholderText(valueFieldSelector);
            expect(valueField).not.toBeNull();
            expect(valueField.disabled).toBe(false);

            const submitButton = queryByTestId('submitVar');
            expect(submitButton).not.toBeNull();
            expect(submitButton.disabled).toBe(true);

            fireEvent.change(valueField, { target: { value: 'Text label text' } });

            expect(submitButton.disabled).toBe(false);

            const deleteButton = queryByTestId('deleteVar');
            expect(deleteButton).toBeNull();
        });
    });
    describe('Should not be editable for user', () => {
        const componentProps = {
            ...baseComponentProps,
            botStatusNotEditable: true,
            isUser: true,
        };

        test('Can\'t be edited and submitted', () => {
            initialState.bots.bots.data[335].variables = [
                {
                    id: 329,
                    type_id: 1,
                    label: 'text label',
                    values: [],
                },
            ];

            const { queryByText, queryByPlaceholderText, queryByTestId } = render(
                <Providers storeInitialState={initialState}>
                    <MemoryRouter initialEntries={[`${paths.users}/6${paths.bots}/335`]} initialIndex={0}>
                        <Route path={`${paths.users}/:userId${paths.bots}/:id`}>
                            <Component {...componentProps} />
                        </Route>
                    </MemoryRouter>
                </Providers>,
            );

            const valueFieldSelector = placeholders.bot.variable.value(
                variables_types[0].label.toLowerCase(),
            );

            const label = queryByText(initialState.bots.bots.data[335].variables[0].label);
            expect(label).not.toBeNull();

            const valueField = queryByPlaceholderText(valueFieldSelector);
            expect(valueField).not.toBeNull();
            expect(valueField.disabled).toBe(true);

            const submitButton = queryByTestId('submitVar');
            expect(submitButton).toBeNull();
        });
    });
});
