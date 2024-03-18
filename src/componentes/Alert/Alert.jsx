import React from 'react';

export default function Alert({ alert }) {
const { texto, tipo, estado } = alert;

return (
    <>
    {estado ? (
        <div className={`alert ${tipo} mt-1`}>{texto}</div>
    ) : null}
    </>
);
}