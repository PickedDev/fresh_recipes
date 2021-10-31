import { GlobalStyles } from '@mui/material';

export default function GlobalCssOverride() {
    return (
        <GlobalStyles
            styles={{
                body: {
                    height: '100%',
                },
                html: {
                    height: '100%',
                },
                '·title': { color: 'red' },
            }}
        />
    );
}
