import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
	Container,
	Row,
	Col,
	Form,
	Button,
	
} from "react-bootstrap";



export const LoginForm = ({ formSwitcher }) => {
	
	

	const [email, setEmail] = useState("e2@e.com");
	const [password, setPassword] = useState("password#1F");

	const handleOnChange = e => {
		const { name, value } = e.target;
        console.log(e.target.value,"lll")

		switch (name) {
			case "email":
				setEmail(value);
				break;

			case "password":
				setPassword(value);
				break;

			default:
				break;
		}
	};

	const handleOnSubmit = async e => {
		e.preventDefault();

		if (!email || !password) {
			return alert("Fill up all the form!");
		}

		

		
	};

	return (
		<Container>
			<Row>
				<Col>
					<h1 className="text-info text-center">Client Login</h1>
					<hr />
				
					<Form autoComplete="off" onSubmit={handleOnSubmit}>
						<Form.Group>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={email}
								onChange={handleOnChange}
								placeholder="Enter Email"
								required
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								onChange={handleOnChange}
								value={password}
								placeholder="password"
								required
							/>
						</Form.Group>

						<Button className="mt-2" type="submit">Login</Button>
						
					</Form>
					<hr />
				</Col>
			</Row>

			<Row>
				<Col>
					<a href="/password-reset">Forget Password?</a>
				</Col>
			</Row>
			<Row className="py-4">
				<Col>
					Are you new here? <a href="/registration">Register Now</a>
				</Col>
			</Row>
		</Container>
	);
};

LoginForm.propTypes = {
	formSwitcher: PropTypes.func.isRequired,
};