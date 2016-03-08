import React, { PropTypes } from 'react';
import Radium from 'radium';
import {globalStyles} from '../../utils/styleConstants';
import { Link } from 'react-router';
// import dateFormat from 'dateformat';

let styles = {};

const LandingComponentCDMXConstitution = React.createClass({
	propTypes: {
		collections: PropTypes.array,
	},

	getInitialState() {
		return {
			activeIndex: 0,
			showCollectionList: false,
		};
	},

	setActiveIndex: function(index) {
		return ()=>{
			this.setState({activeIndex: index});
		};
		
	},

	toggleShowCollectionList: function() {
		this.setState({showCollectionList: !this.state.showCollectionList});
	},

	// authorString: function(authors) {
	// 	let output = 'by ';
	// 	for (let index = authors.length; index--;) {
	// 		output += authors[index].name;
	// 		if (index !== 0) {
	// 			output += ', ';
	// 		}
	// 	}
	// 	return output;
	// },

	render: function() {

		return ( <div style={styles.container}> 
			<div style={styles.header}>
				<img style={styles.headerImage} src="http://i.imgur.com/BxctOW8.png" />
				<div style={styles.headerSeparator}></div>
				<div style={styles.headerParticipa}>Participa</div>
			</div>
			<div style={styles.collectionTitle}>
				<div style={styles.collectionTitleText}>{this.props.collections[this.state.activeIndex].title}</div>
				<div style={styles.collectionTitleExpandButton} onClick={this.toggleShowCollectionList}>
					{this.state.showCollectionList
						? 'menos'
						: 'más'
					}
				</div>
			</div>

			<div style={styles.collectionContent}>
				<div style={[styles.collectionNav, this.state.showCollectionList && styles.collectionNavMobileShow]}>
					{
						this.props.collections.map((collection, index)=>{
							return (
								<div key={'collectionButton-' + collection.slug} style={[styles.collectionButton, this.state.activeIndex === index && styles.collectionButtonActive]} onClick={this.setActiveIndex(index)}>
									{collection.title}
								</div>
							);
						})
					}
				</div>
				<div style={styles.pubList}>
					{this.props.collections[this.state.activeIndex].pubs.length
						? this.props.collections[this.state.activeIndex].pubs && this.props.collections[this.state.activeIndex].pubs.map((pub, index)=>{
							return (
								<Link to={'/pub/' + pub.slug} style={globalStyles.link} key={'pubItemLink-' + index}>
								<div style={styles.pubItem} key={'pubItem-' + index}>
									
									<div style={styles.pubTitle}>{pub.title}</div>
									
									<div style={styles.pubAbstract}>
										{pub.abstract.length > 200 
											? pub.abstract.substring(0, 200).trim() + '...'
											: pub.abstract
										}
									</div>
									
								</div>
								</Link>
							);
						})
						: <div>No Pubs</div>
					}
				</div>
			</div>
			
		</div>);

	}
});

export default Radium(LandingComponentCDMXConstitution);

styles = {
	container: {
		fontFamily: 'Alegreya Sans SC',
	},
	header: {
		height: '80px',
		maxWidth: '1024px',
		margin: '0 auto',
	},
	headerImage: {
		height: '100%',
		float: 'left',
	},
	headerSeparator: {
		height: '100%',
		width: '1px',
		backgroundColor: 'black',
		float: 'left',
		margin: '0px 30px',
	},
	headerParticipa: {
		textTransform: 'uppercase',
		float: 'left',
		lineHeight: '80px',
		height: '100%',
		fontSize: '1.3em',
	},
	collectionTitle: {
		backgroundImage: 'url(http://i.imgur.com/wPQRAh0.jpg)',
		backgroundRepeat: 'none',
		backgrondSize: 'cover',
		height: '120px',
		backgroundPosition: 'center center',
		position: 'relative',
	},
	collectionTitleText: {
		textAlign: 'center',
		textTransform: 'uppercase',
		lineHeight: '120px',
		color: 'white',
		textShadow: '0px 0px 5px black',
		fontSize: '2em',

	},
	collectionTitleExpandButton: {
		position: 'absolute',
		bottom: '5px',
		backgroundColor: '#F7F7F7',
		color: 'black',
		width: '20%',
		margin: '0px 40%',
		borderRadius: '2px',
		textAlign: 'center',
		boxShadow: '0px 1px 3px #777',
		display: 'none',
		userSelect: 'none',
		'@media screen and (min-resolution:3dppx), screen and (max-width:767px)': {
			display: 'block',
			cursor: 'pointer',
		}
	},
	collectionContent: {
		width: '1024px',
		maxWidth: '100vw',
		margin: '0 auto',
		display: 'table',
		'@media screen and (min-resolution:3dppx), screen and (max-width:767px)': {
			width: '100%',
			display: 'block',
		},
	},
	collectionNav: {
		display: 'table-cell',
		width: '30%',
		backgroundColor: '#F7F7F7',
		'@media screen and (min-resolution:3dppx), screen and (max-width:767px)': {
			width: '100%',
			display: 'none',
		},
	},
	collectionNavMobileShow: {
		'@media screen and (min-resolution:3dppx), screen and (max-width:767px)': {
			display: 'block',
		}
	},
	collectionButton: {
		width: '80%',
		margin: '20px 10%',
		padding: '5px 0px',
		border: '1px solid #999',
		textTransform: 'uppercase',
		textAlign: 'center',
		borderRadius: '2px',
		':hover': {
			backgroundColor: '#DF177C',
			color: 'white',
			cursor: 'pointer',
		},
	},
	collectionButtonActive: {
		backgroundColor: '#DF177C',
		color: 'white',
	},
	pubList: {
		// display: 'table-cell',
		width: '70%',
		padding: '20px 10%',
		minHeight: 'calc(100vh - 30px - 80px - 120px)',
		'@media screen and (min-resolution:3dppx), screen and (max-width:767px)': {
			width: 'calc(100% - 10%)',
			padding: '20px 5%',
			minHeight: 'initial',
		},
	},
	pubItem: {
		borderTop: '2px solid #DF177C',
		padding: '20px 5%',
		':hover': {
			color: '#DF177C',
		},
	},
	pubTitle: {
		textTransform: 'uppercase',
		fontSize: '1.2em',
	},
	pubAbstract: {
		paddingTop: '10px',
		fontFamily: 'ABeeZee',
		color: '#656565',
	},

};