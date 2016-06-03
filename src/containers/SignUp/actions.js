import SHA3 from 'crypto-js/sha3';
import encHex from 'crypto-js/enc-hex';
import analytics from 'utils/analytics';

 /*--------*/
// Define Action types
//
// All action types are defined as constants. Do not manually pass action
// types as strings in action creators
/*--------*/
export const SIGNUP_LOAD = 'signup/SIGNUP_LOAD';
export const SIGNUP_SUCCESS = 'signup/SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'signup/SIGNUP_FAIL';

export const SIGNUP_DETAILS_LOAD = 'signup/SIGNUP_DETAILS_LOAD';
export const SIGNUP_DETAILS_SUCCESS = 'signup/SIGNUP_DETAILS_SUCCESS';
export const SIGNUP_DETAILS_FAIL = 'signup/SIGNUP_DETAILS_FAIL';

export const SIGNUP_FOLLOW_LOAD = 'signup/SIGNUP_FOLLOW_LOAD';
export const SIGNUP_FOLLOW_SUCCESS = 'signup/SIGNUP_FOLLOW_SUCCESS';
export const SIGNUP_FOLLOW_FAIL = 'signup/SIGNUP_FOLLOW_FAIL';

/*--------*/
// Define Action creators
//
// All calls to dispatch() call one of these functions. Do not manually create
// action objects (e.g. {type:example, payload:data} ) within dispatch()
// function calls
/*--------*/
export function signup(firstName, lastName, email, password) {
	const analyticsData = {
		firstName: firstName,
		lastName: lastName,
		email: email,
	};
	analytics.sendEvent('SignUp', analyticsData);

	return {
		types: [SIGNUP_LOAD, SIGNUP_SUCCESS, SIGNUP_FAIL],
		promise: (client) => client.post('/signup', {data: {
			'firstName': firstName,
			'lastName': lastName,
			'email': email.toLowerCase(),
			'password': SHA3(password).toString(encHex),
		}})
	};
}

export function signupDetails(image, bio, orcid, website) {
	const analyticsData = {
		image: image,
		bio: bio,
		orcid: orcid,
		website: website,
	};
	analytics.sendEvent('SignUpDetails', analyticsData);

	return {
		types: [SIGNUP_DETAILS_LOAD, SIGNUP_DETAILS_SUCCESS, SIGNUP_DETAILS_FAIL],
		promise: (client) => client.post('/signup-details', {data: {
			'image': image,
			'bio': bio,
			'orcid': orcid,
			'website': website,
		}})
	};
}

export function signupFollow(pubsFollowing, usersFollowing, journalsFollowing) {
	const analyticsData = {
		pubsFollowing: pubsFollowing,
		usersFollowing: usersFollowing,
		journalsFollowing: journalsFollowing,
	};
	analytics.sendEvent('SignUpFollow', analyticsData);

	return {
		types: [SIGNUP_FOLLOW_LOAD, SIGNUP_FOLLOW_SUCCESS, SIGNUP_FOLLOW_FAIL],
		promise: (client) => client.post('/signup-follow', {data: {
			'pubsFollowing': pubsFollowing,
			'usersFollowing': usersFollowing,
			'journalsFollowing': journalsFollowing,
		}})
	};
}