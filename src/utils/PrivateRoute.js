import React, { useEffect, useState } from "react";
import AxiosWithCred from "./axiosWithCred";
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const [auth, setAuth] = useState({ isAuth: false, ready: false });
	useEffect(() => {
		const checkAuth = async () => {
			try {
				await AxiosWithCred.get("/auth/verify_session");
				setAuth({
					isAuth: true,
					ready: true,
				});
				// console.log("setAuth", setAuth);
			} catch (error) {
				setAuth({ ...auth, ready: true });
			}
		};
		checkAuth();
	}, []);
	return (
		<>
			{auth.ready && (
				<Route
					{...rest}
					render={(props) => {
						if (auth.isAuth) {
							return <Component {...props} />;
						}
						return <Redirect to="/" />;
					}}
				/>
			)}
		</>
	);
};

export default PrivateRoute;
