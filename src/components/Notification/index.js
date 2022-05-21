import React from 'react';
import { Container, Button } from './style';

const Notification = props => (
    <Container>
        {props.children}
        <div>
            <Button onClick={() => window.location.reload()}>Reload page?</Button>
        </div>
    </Container>
)

export default Notification;