<<<<<<< HEAD
import React, { useState } from 'react';
import UserPhoneNumber from './UserPhoneNumber';
import { connect } from 'react-redux';
import { getClientInfo } from '../../../actions/clientActions';
import './loginClient.scss';
=======
import React, { useState } from "react";
import UserPhoneNumber from "./UserPhoneNumber";
import { connect } from "react-redux";
import { getClientInfo } from "../../../actions/clientActions";
import "./loginClient.scss";
>>>>>>> 7dbad760aed5ce2cac04cedb6d100f17d7f8797e

//925-639-1639

const LoginClient = props => {
<<<<<<< HEAD
  console.log(props.clientinfo);
  const [config, setconfig] = useState({ phonenumber: '' });
=======
  // console.log(props.clientinfo);
  const [config, setconfig] = useState({ phonenumber: "" });
>>>>>>> 7dbad760aed5ce2cac04cedb6d100f17d7f8797e

  const handleChange = e => {
    setconfig({ ...config, [e.target.name]: e.target.value });
  };
  const getinfo = info => {
    setconfig({ ...config, phonenumber: info });

    props.getClientInfo(info);
<<<<<<< HEAD
    props.history.push('/welcome');
=======
    props.history.push("/metric-form");
>>>>>>> 7dbad760aed5ce2cac04cedb6d100f17d7f8797e
  };

  return (
    <div>
      <UserPhoneNumber
        handleChange={handleChange}
        config={config}
        setconfig={setconfig}
        getinfo={getinfo}
      />
    </div>
  );
};

const mapStatetoProps = state => {
<<<<<<< HEAD
  console.log('App.js', state);
=======
  // console.log("App.js", state);
>>>>>>> 7dbad760aed5ce2cac04cedb6d100f17d7f8797e
  return {
    clientinfo: state.clientinfo
  };
};

export default connect(
  mapStatetoProps,
  { getClientInfo }
)(LoginClient);
