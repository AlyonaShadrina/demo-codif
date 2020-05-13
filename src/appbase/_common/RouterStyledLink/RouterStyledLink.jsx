import React from 'react';
import { Link } from 'react-router-dom';
import { Link as StyledLink } from '@material-ui/core';

const RouterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

const RouterStyledLink = ({ children, ...props }) => (
    <StyledLink component={RouterLink} {...props}>
        {children}
    </StyledLink>
);

export default RouterStyledLink;
