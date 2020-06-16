import React, { useState } from "react";
import Backdrop from "../../../../../../utils/UI/Backdrop";
import UserForm from "./UserForm";
import "../../../../../../sass/register/client/accountOne.scss";
import { useDispatch } from "react-redux";
import { getClientInfoRegister } from "../../../../../../redux/actions/clientActions";

const AccountOne = (props) => {
	const dispatch = useDispatch();
	const [userAccountDetails, setUserAccountDetails] = useState({
		first_name: "",
		last_name: "",
		email: "",
		phone: "",
		dob: "",
		password: "",
		confirm_password: "",
		height: 0,
		sex: "",
		gender: "",
	});

	const [showModal, setShowModal] = useState(false);

	const changeHandler = (e) => {
		setUserAccountDetails({
			...userAccountDetails,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setShowModal(true);
		dispatch(getClientInfoRegister(userAccountDetails));
	};
	return (
		<div className="account-one">
			<header>
				<h4>Let's create your Coach Me account</h4>
			</header>
			<Backdrop show={showModal} set={setShowModal} />
			{/* <AccountModal
            showModal={showModal}
            setShowModal={setShowModal} 
            /> */}
			<UserForm
				userAccountDetails={userAccountDetails}
				handleSubmit={handleSubmit}
				changeHandler={changeHandler}
			/>
		</div>
	);
};
export default AccountOne;
