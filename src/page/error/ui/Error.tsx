import { Link } from 'react-router-dom';

import { Button } from '@mui/material';

const Error = () => {
    return (
        <div>
            <h2>ERROR</h2>
            <Button component={Link} to="/">
                홈으로 이동
            </Button>
        </div>
    );
};

export { Error };
