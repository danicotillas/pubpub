import React, { PropTypes } from 'react';
import {reduxForm} from 'redux-form';
import Radium from 'radium';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {globalStyles} from '../../utils/styleConstants';

let styles = {};

const LoginFormRegister = React.createClass({
	propTypes: {
		fields: PropTypes.object.isRequired,
		handleSubmit: PropTypes.func.isRequired,
	},

	mixins: [PureRenderMixin],

	render: function() {
		const {
			fields: {email, password, fullName},
			handleSubmit
		} = this.props;

		return (
			<form onSubmit={handleSubmit}>
				<div>
					<label style={styles.label}>Email</label>
					<input style={styles.input} key="registerEmail" type="text" placeholder="Email" {...email}/>
				</div>
				<div>
					<label style={styles.label}>Password</label>
					<input style={styles.input} key="registerpassword" type="password" placeholder="Password" {...password}/>
				</div>
				<div>
					<label style={styles.label}>Full Name</label>
					<input style={styles.input} key="registerName" type="text" placeholder="Full Name" {...fullName}/>
				</div>
				<button type="submit" key="registerSubmit" style={styles.submit} onClick={handleSubmit}>Submit</button>
			</form>
		);
	}
});

export default reduxForm({
	form: 'loginFormRegister',
	fields: ['fullName', 'email', 'password', 'image']
})(Radium(LoginFormRegister));

styles = {
	submit: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		width: 160,
		height: 52,
		// backgroundColor: 'rgba(50,100,190,1)',
		color: globalStyles.headerText,
		textAlign: 'right',
		padding: '12px 20px',
		fontSize: '30px',
		cursor: 'pointer',
		':hover': {
			color: globalStyles.headerHover
		},
		backgroundColor: 'transparent',
		fontFamily: globalStyles.headerFont,
		borderWidth: '0px 0px 1px 0px',
		borderColor: 'transparent',
		':focus': {
			borderColor: globalStyles.headerHover,
			outline: 'none',
		},
	},
	label: {
		opacity: 0,
		position: 'absolute',
	},
	input: {
		borderWidth: '0px 0px 1px 0px',
		borderColor: globalStyles.headerText,
		backgroundColor: 'transparent',
		margin: '90px 30px 0px 30px',
		fontSize: '25px',
		color: globalStyles.headerText,
		float: 'left',
		':focus': {
			borderWidth: '0px 0px 1px 0px',
			borderColor: globalStyles.headerHover,
			outline: 'none',
		},
	}

};