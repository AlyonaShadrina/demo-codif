import React from 'react';
import { Helmet } from 'react-helmet';
import logoShort from '../../../assets/logo-short.ico';


const DEFAULT_PAGE_TITLE = 'codif';
const DEFAULT_HEAD_DESCRIPTION = 'Manage, edit, analise your documents automatically.';

const HeadTag = ({ title, description }) => (
    <Helmet>
        <title>
            {
                title ? `${title} | ${DEFAULT_PAGE_TITLE}` : DEFAULT_PAGE_TITLE
            }
        </title>
        <meta
            key="description"
            name="description"
            content={description || DEFAULT_HEAD_DESCRIPTION}
        />
        <link
            rel="shortcut icon"
            href={logoShort}
        />
    </Helmet>
);

export default HeadTag;