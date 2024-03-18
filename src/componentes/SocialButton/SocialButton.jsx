import React from 'react';
import { Button } from 'react-bootstrap';

export default function SocialButton({ button }) {
    return (
        <>
            <Button variant="outline-primary rounded-circle p-3 m-3">
                <i className={`fa-brands ${button} fa-xl`}></i>
            </Button>
        </>
    );
}