import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route } from 'react-router';

import { paths } from '../../../../dictionary';
import Providers from '../../../../providers';
import initialFilterParams, { created_at } from '../../../../utils/initialFilterParams';
import { objToQueryString } from '../../../../utils/query';
import Component from '../AdminBotListContainer';
import { usersInintialState, botsInintialState } from '../../../dataMocks';


describe('AdminBotListContainer', () => {
    const initialState = {
        users: usersInintialState,
        bots: botsInintialState,
    };

    test('Query param changed to initialFilterParams when rendered', () => {
        const componentProps = {
            profile: {
                timezone: '+02:00',
                role: 'admin',
            },
            usersForBotCreation: [],
        };

        const path = paths.admin + paths.bots;
        let componentLocation = {};

        render(
            <Providers storeInitialState={{}}>
                <MemoryRouter initialEntries={[path]} initialIndex={0}>
                    <Route
                        path={path}
                        render={({ history, location }) => {
                            componentLocation = location;
                            return (
                                <Component
                                    {...componentProps}
                                    history={history}
                                    location={location}
                                />
                            );
                        }}
                    />
                </MemoryRouter>
            </Providers>,
        );

        const expectedQuery = `?${objToQueryString(initialFilterParams(componentProps.profile.timezone))}`;

        expect(componentLocation.search).toEqual(expectedQuery);
    });

    test('Initial params affect filter inputs values and inputs values affects query param', () => {
        const componentProps = {
            profile: {
                timezone: '+02:00',
                role: 'admin',
            },
            usersForBotCreation: [],
        };

        const path = paths.admin + paths.bots;
        let componentLocation = {};

        const { queryByDisplayValue, debug } = render(
            <Providers storeInitialState={initialState}>
                <MemoryRouter initialEntries={[path]} initialIndex={0}>
                    <Route
                        path={path}
                        render={({ history, location }) => {
                            componentLocation = location;
                            return (
                                <Component
                                    {...componentProps}
                                    history={history}
                                    location={location}
                                />
                            );
                        }}
                    />
                </MemoryRouter>
            </Providers>,
        );

        const startDateTimeInput = queryByDisplayValue(created_at.start_date);

        expect(startDateTimeInput).not.toBeNull();

        fireEvent.change(startDateTimeInput, { target: { value: '2019-10-20' } });

        const defaultQuery = `?${objToQueryString(initialFilterParams(componentProps.profile.timezone))}`;
        expect(componentLocation.search).not.toEqual(defaultQuery);
    });
});
