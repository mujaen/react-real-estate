import React from 'react';
import {createRoot} from 'react-dom/client';
import styled, {ThemeProvider} from 'styled-components';
import {themeStyles} from 'style/theme';
import GlobalStyles from 'style/global';
const rootNode = document.getElementById('app');

const StyledDiv = styled.div`
    color: ${(props) => props.theme.colors.primary}
`

function App({}) {
    return (
        <ThemeProvider theme={themeStyles}>
            <GlobalStyles />
            <StyledDiv>asdasdasd</StyledDiv>
        </ThemeProvider>
    )
}

const root = createRoot(rootNode);
root.render(<App />);
