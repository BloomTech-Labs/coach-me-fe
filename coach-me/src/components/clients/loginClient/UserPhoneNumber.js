import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Logo } from './assets/logo.svg';
import './loginClient.scss';

const UserPhoneNumber = props => {
    const { getinfo } = props;

    const [input, setinput] = useState({ areacode: '', dig1: '', dig2: '' });

    const handleChange = e => {
        setinput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const number = input.areacode + input.dig1 + input.dig2;
        getinfo(number);
    };

    const moveOver = (e, item1, item2) => {
        const length = e.target.value.length;
        const maxLength = document
            .getElementById(item1)
            .getAttribute('maxLength');
        if (length === maxLength) {
            document.getElementById(item2).focus();
        }
    };

    return (
        <div className='phonenumber-container'>
            <div className='img-container'>
                <Logo />
            </div>
            <div>
                <div className='header'>
                    <p>Enter your phone number to get started.</p>
                </div>
                <div className='subtext'>
                    <p>Ingrese su número telefónico</p>
                </div>

                <form
                    onSubmit={e => {
                        handleSubmit(e);
                    }}
                >
                    <div className='form-container'>
                        <div>
                            <span>(</span>
                            <input
                                type='text'
                                id='txt1'
                                maxLength='3'
                                name='areacode'
                                onChange={handleChange}
                                value={input.areacode}
                                onInput={e => {
                                    moveOver(e, 'txt1', 'txt2');
                                }}
                            />
                            <span>)</span>
                            <input
                                type='text'
                                id='txt2'
                                maxLength='3'
                                name='dig1'
                                onChange={handleChange}
                                value={input.dig1}
                                onInput={e => {
                                    moveOver(e, 'txt2', 'txt3');
                                }}
                            />
                            <span>-</span>
                            <input
                                type='text'
                                id='txt3'
                                maxLength='4'
                                name='dig2'
                                onChange={handleChange}
                                value={input.dig2}
                            />
                        </div>
                        <button className='trigger' type='submit'>
                            {' '}
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserPhoneNumber;
