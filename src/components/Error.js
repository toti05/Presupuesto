import React from 'react';
import PropTypes from 'prop-types';

const MensajeError = ({ mensaje }) => {
    return (
        <p className='alert alert-danger error'>{mensaje}</p>
    );
};

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default MensajeError;

