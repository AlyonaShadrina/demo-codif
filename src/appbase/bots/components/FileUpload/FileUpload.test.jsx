import React from 'react';
import axios from 'axios';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';

import { paths } from '../../../../dictionary';
import Component from './FileUpload';
import { listCaption } from './UploadedFiles';


jest.mock('axios');

const files = [
    {
        id: 352,
        bot_id: 335,
        name: 'annotation-highlight.pdf'
    }
];


describe('FileUpload', () => {

    test('Should show list of uploaded files', async () => {

        const { queryByText } = render(
            <MemoryRouter initialEntries={[`${paths.users}/6${paths.bots}/335`]} initialIndex={0}>
                <Route path={`${paths.users}/:userId${paths.bots}/:id`}>
                    <Component files={files} />
                </Route>
            </MemoryRouter>
        );

        const list = queryByText(listCaption);
        expect(list).not.toBeNull();
    });

    test("Shouldn't show list of uploaded files if no files", async () => {

        const { queryByText } = render(
            <Component />
        );

        const list = queryByText(listCaption);
        expect(list).toBeNull();
    });

    test("Input should receive file", async () => {

        const uploadFile = jest.fn();

        const { queryByText, queryByTestId } = render(
            <Component uploadFile={uploadFile}/>
        );

        const list = queryByText(listCaption);
        const input = queryByTestId("uploadFile");

        expect(list).toBeNull();
        expect(Object.keys(input.files).length).toBe(0);

        fireEvent.change(input, {
            target: {
                files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
            },
        });

        expect(input.files.length).toBe(1);
    });
});