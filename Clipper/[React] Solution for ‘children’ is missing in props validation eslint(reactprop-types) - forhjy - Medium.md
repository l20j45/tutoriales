---
page-title: "[React] Solution for ‘children’ is missing in props validation eslint(react/prop-types) - forhjy - Medium"
url: https://forhjy.medium.com/react-solution-for-children-is-missing-in-props-validation-eslint-react-prop-types-2e11bc6043c7
date: "2023-10-10 14:54:28"
---
---

> ## 1\. Specify prop types
> 
> \[1\] Install prop-types package with `**npm i prop-types --save**`
> 
> \[2\] Import prop-types module to your js file.
> 
> \[3\] Specify prop types.
> 
> import React from 'react';import styled from 'styled-components';**import PropTypes from 'prop-types';**  
> const StyledButton = styled.button\`color: red;border: none;background-color: gray;\`;  
> const Button = ({ children }) => <StyledButton>{children}</StyledButton>;  
> **Button.propTypes = {****children: PropTypes.node.isRequired,****};**
> 
> ## 2\. Ignore the error
> 
> Add below to your .eslintrc.js file, so the error message can be ignored.
> 
> ...  
> rules: { ... 'react/prop-types': \['off'\],   
> },
---