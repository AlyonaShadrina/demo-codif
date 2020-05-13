import React from 'react';
import { Field } from 'redux-form';

import { reduxFormNames } from '../../../../config';
import AddButtonWithModalForm from '../../../_common/AddButtonWithModalForm';
import RenderField from '../../../_common/RenderTextFieldBordered';
import validate from './validate';


const AddTemplate = ({ add, initialValues }) => {
    const handleAddTemplate = (values) => {
        add(values);
    };

    return (
        <div>
            <AddButtonWithModalForm
                addButtonText="Add new document type"
                dialogTitle="Add new document type"
                form={reduxFormNames.addTemplate}
                onSubmitAction={handleAddTemplate}
                initialValues={initialValues}
                validate={validate}
            >
                <Field
                    name="issuer"
                    component="input"
                    type="hidden"
                />
                <Field
                    name="is_stable"
                    component="input"
                    type="hidden"
                />
                <Field
                    name="name"
                    label="Document type name"
                    placeholder="Enter name"
                    id="doc_name"
                    component={RenderField}
                    type="text"
                    required
                />
            </AddButtonWithModalForm>
        </div>
    );
};

export default AddTemplate;
