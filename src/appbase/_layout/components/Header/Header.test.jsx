import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route } from 'react-router';

import { paths, buttons } from '../../../../dictionary';
import Providers from '../../../../providers';
import Component from './Header';
import { profileInintialState } from '../../../dataMocks';


describe('Header', () => {

    test('"Add bot" button works', () => {
        const initialState = {
            profile: profileInintialState,
        };

        const path = paths.admin + paths.bots;
        let componentLocation = {};

        const { queryByText } = render(
            <Providers storeInitialState={initialState}>
                <MemoryRouter initialEntries={[path]} initialIndex={0}>
                    <Route
                        path={path}
                        render={({ history, location }) => {
                            componentLocation = location;
                            return (
                                <Component
                                    history={history}
                                    location={location}
                                />
                            );
                        }}
                    />
                </MemoryRouter>
            </Providers>,
        );

        const addBotButton = queryByText(buttons.bot.addNewBot);

        expect(addBotButton).not.toBeNull();

        fireEvent.click(addBotButton);

        expect(componentLocation.pathname).toEqual(paths.admin + paths.bots + paths.create);
    });

    test('No "Add bot" button for user', () => {
        const initialState = {
            profile: {
                ...profileInintialState,
                role: 'user',
            },
        };

        const path = paths.admin + paths.bots;
        let componentLocation = {};

        const { queryByText } = render(
            <Providers storeInitialState={initialState}>
                <MemoryRouter initialEntries={[path]} initialIndex={0}>
                    <Route
                        path={path}
                        render={({ history, location }) => {
                            componentLocation = location;
                            return (
                                <Component
                                    history={history}
                                    location={location}
                                />
                            );
                        }}
                    />
                </MemoryRouter>
            </Providers>,
        );

        const addBotButton = queryByText(buttons.bot.addNewBot);

        expect(addBotButton).toBeNull();
    });

});
