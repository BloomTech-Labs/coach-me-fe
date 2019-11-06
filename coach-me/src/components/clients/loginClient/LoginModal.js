import React from 'react';

const LoginModal = () => {
    const { show, onSubmit, bpOver, bpUnder, bS, weight, failMetric } = props;
    if (show) {
        if (poop == '') {
            return (
                <div className='modal-container'>
                    <div className='modal-box'>
                        <p>{translate('Form-Success')}</p>
                        {/* <h1>{translate('Form-Failure')}</h1> */}

                        <button onClick={() => onSubmit()}> continue</button>
                    </div>
                </div>
            );
        }

        if ((bpOver || bpUnder || bS || weight) === undefined) {
            return (
                <div className='modal-container'>
                    <div className='modal-box'>
                        <p>{translate('Form-Failure')}</p>
                        {/* <h1>{translate('Form-Failure')}</h1> */}

                        <button onClick={() => failMetric()}> continue </button>
                    </div>
                </div>
            );
        }
    }

    return null;
};

export default LoginModal;
