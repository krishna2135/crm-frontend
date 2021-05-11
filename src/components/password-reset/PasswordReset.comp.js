import React, { useState } from "react";


import {
	Container,
	Row,
	Col,
	Form,
	Button,
	
} from "react-bootstrap";

export const ResetPassword = () => {
	

	const [email, setEmail] = useState("");

	

	

	const handleOnChange = e => {
		const { value } = e.target;
		setEmail(value);
	};

	return (
		<Container>
			<Row>
				<Col>
					<h1 className="text-info text-center">Reset Password</h1>
					<hr />

				

					<Form autoComplete="off">
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

						<Button type="submit">Reset Password</Button>
					</Form>
					<hr />
				</Col>
			</Row>
		</Container>
	);
};