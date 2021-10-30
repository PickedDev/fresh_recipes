import { GlobalStyles } from '@mui/material';

export default function GlobalCssOverride() {
    return (
        <div>
            <GlobalStyles
                styles={{
                    body: {
                        height: '100%',
                    },
                    html: {
                        height: '100%',
                    },
                    '·title': { color: 'red' },
                    '.wrapper': { minHeight: '100%' },
                }}
            />
        </div>
    );
}
