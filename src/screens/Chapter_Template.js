import React, { Component } from "react";

// Import your audio file
import { Text, StyleSheet, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
const { width } = Dimensions.get('window');
var scale = (Math.sqrt(width/1728)); // Base width for scaling

import chapter1 from './gita-translations-json/gita_chapter_1.json';
import chapter2 from './gita-translations-json/gita_chapter_2.json';
import chapter3 from './gita-translations-json/gita_chapter_3.json';
import chapter4 from './gita-translations-json/gita_chapter_4.json';
import chapter5 from './gita-translations-json/gita_chapter_5.json';
import chapter6 from './gita-translations-json/gita_chapter_6.json';
import chapter7 from './gita-translations-json/gita_chapter_7.json';
import chapter8 from './gita-translations-json/gita_chapter_8.json';
import chapter9 from './gita-translations-json/gita_chapter_9.json';
import chapter10 from './gita-translations-json/gita_chapter_10.json';
import chapter11 from './gita-translations-json/gita_chapter_11.json';
import chapter12 from './gita-translations-json/gita_chapter_12.json';
import chapter13 from './gita-translations-json/gita_chapter_13.json';
import chapter14 from './gita-translations-json/gita_chapter_14.json';
import chapter15 from './gita-translations-json/gita_chapter_15.json';
import chapter16 from './gita-translations-json/gita_chapter_16.json';
import chapter17 from './gita-translations-json/gita_chapter_17.json';
import chapter18 from './gita-translations-json/gita_chapter_18.json';

const ENGLISH_TRANSLATION_HEADER = 'English Translation \n';

class Chapter_Template extends Component {

	audio1 = this.props.navigation.getParam('url1', 'error');
	title = this.props.navigation.getParam('title', 'Error!');
	audio2 = this.props.navigation.getParam('url2','error');
	image1 = this.props.navigation.getParam('image1', 'error');
	image2 = this.props.navigation.getParam('image2', 'error');
	image3 = this.props.navigation.getParam('image3', 'error');
	image4 = this.props.navigation.getParam('image4', 'error');
	image5 = this.props.navigation.getParam('image5', 'error');
	image6 = this.props.navigation.getParam('image6', 'error');
	image7 = this.props.navigation.getParam('image7', 'error');
	image8 = this.props.navigation.getParam('image8', 'error');
	image9 = this.props.navigation.getParam('image9', 'error');
	image10 = this.props.navigation.getParam('image10', 'error');
	image11 = this.props.navigation.getParam('image11', 'error');
	chapterNum = this.props.navigation.getParam('chapter', 1);
	verse = this.props.navigation.getParam('verse', 1);
	last_verse = this.props.navigation.getParam('last_verse', 5);
	state = {
		isPlaying1: false,
		isPlaying2:false,
		audio1: new Audio(this.audio1),
		audio2:new Audio(this.audio2),
	};
	mainFile = "";
	keyToFind = "1.1";
	translation = chapter1.keyToFind;
	componentDidMount() {
	}
	
	componentWillUnmount() {
		this.stopAudio1();
		this.stopAudio2();
	}
		
	stopAudio1 = ()=>{
		this.state.audio1.pause();
		this.state.audio1.currentTime = 0;
		this.state.isPlaying1 = false;
	}

	getTranslation(chapter, verseNum){
		if (chapter==1){
				this.mainFile = chapter1;
		} else if (chapter==2){
				this.mainFile = chapter2;
		} else if (chapter==3){
				this.mainFile = chapter3;
		} else if (chapter==4){
				this.mainFile = chapter4;
		} else if (chapter==5){
				this.mainFile = chapter5;
		} else if (chapter==6){
				this.mainFile = chapter6;
		} else if (chapter==7){
				this.mainFile = chapter7;
		} else if (chapter==8){
			this.mainFile = chapter8;
		} else if (chapter==9){
			this.mainFile = chapter9;
		} else if (chapter==10){
			this.mainFile = chapter10;
		} else if (chapter==11){
			this.mainFile = chapter11;
		} else if (chapter==12){
				this.mainFile = chapter12;
		} else if (chapter==13){
				this.mainFile = chapter13;
		} else if (chapter==14){
				this.mainFile = chapter14;
		} else if (chapter==15){
				this.mainFile = chapter15;
		} else if (chapter==16){
				this.mainFile = chapter16;
		} else if (chapter==17){
				this.mainFile = chapter17;
		} else if (chapter==18){
				this.mainFile = chapter18;
		}
		this.keyToFind = chapter+"."+verseNum;
		this.translation = this.mainFile[this.keyToFind];
		
		return this.translation;
	}

	stopAudio2 = ()=>{
		this.state.audio2.pause();
		this.state.audio2.currentTime = 0;
		this.state.isPlaying2 = false;

	}
	// Main function to handle both play and pause operations
	playPauseButton1 = () => {

		// Get state of song
		let isPlaying1 = this.state.isPlaying1;
		if (isPlaying1) {
			this.state.audio1.pause();
		} else {
			this.state.audio1.play();
		}
		// Change the state of song
		this.setState({ isPlaying1: !isPlaying1 });
	};
	playPauseButton2 = () => {

		// Get state of song
		let isPlaying2 = this.state.isPlaying2;
		if (isPlaying2) {
			this.state.audio2.pause();
		} else {
			this.state.audio2.play();
		}
		// Change the state of song
		this.setState({ isPlaying2: !isPlaying2 });
	};
	render() {
		var header1 = "Verses " + this.verse + " to "
		var header2 = ""
		if (this.audio2 == "error")
			header1 += this.last_verse;
		else
			header1 += (this.verse+4)
			header2 = "Verses " + (this.verse+5) + " to " + this.last_verse;

		return (
			<ScrollView>
				{/* Show state of song on website */}
				<Text style={styles.textStyleHeader}>{header1}</Text>
				<View style={styles.container}>
					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.buttonStyle} onPress={this.playPauseButton1}>
						<Image
						source={require('./icons/icons8-circled-play-100.png')} // image path
						style={styles.image}/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.buttonStyle} onPress={this.stopAudio1}>
						<Image
						source={require('./icons/icons8-stop-circled-100.png')} // image path
						style={styles.image}/>
						</TouchableOpacity>
					</View>
				</View>
				<img src = {this.image1}/>
				<Text style = {styles.textStyle}>
					<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
					{this.getTranslation(this.chapterNum,this.verse)}
				</Text>
				<img src = {this.image2}/>
				<Text style = {styles.textStyle}>
					<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
					{this.getTranslation(this.chapterNum,this.verse+1)}
				</Text>
				<img src = {this.image3}/>
				<Text style = {styles.textStyle}>
				<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
					{this.getTranslation(this.chapterNum,this.verse+2)}
				</Text>
				<img src = {this.image4}/>
				<Text style = {styles.textStyle}>
				<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
					{this.getTranslation(this.chapterNum,this.verse+3)}
				</Text>
				<View>
					{this.image5 != 'error'? (
						<>
						<img src = {this.image5}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+4)}
						</Text>
						</>
					) : null}
				</View>
				<View>
					{this.image6 != 'error'? (
						<>
						<Text style={styles.textStyleHeader}>{header2}</Text>
						<View style={styles.container}>
							<View style={styles.buttonContainer}>
								<TouchableOpacity style={styles.buttonStyle} onPress={this.playPauseButton2}>
								<Image
								source={require('./icons/icons8-circled-play-100.png')} // image path
								style={styles.image}/>
								</TouchableOpacity>
								<TouchableOpacity style={styles.buttonStyle} onPress={this.stopAudio2}>
								<Image
								source={require('./icons/icons8-stop-circled-100.png')} // image path
								style={styles.image}/>
								</TouchableOpacity>
							</View>
						</View>
						<img src = {this.image6}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+5)}
				</Text>
						</>
					) : null}
				</View>
				<View>
					{this.image7 != 'error'? (
						<>
						<img src = {this.image7}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+6)}
						</Text>
						</>
					) : null}
				</View>
					<View>
					{this.image8 != 'error'? (
						<>
						<img src = {this.image8}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+7)}
						</Text>
						</>
					) : null}
				</View>
					<View>
					{this.image9 != 'error'? (
						<>
						<img src = {this.image9}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+8)}
						</Text>
						</>
					) : null}
				</View>
					<View>
					{this.image10 != 'error'? (
						<>
						<img src = {this.image10}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+9)}
						</Text>
						</>
					) : null}
				</View>
					<View>
					{this.image11 != 'error'? (
						<>
						<img src = {this.image11}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+10)}
						</Text>
						</>
					) : null}
				</View>

			</ScrollView>
		)
	}
}
const styles = StyleSheet.create({
	textStyle:{
		color: '#777',
		fontSize:25*scale,
		fontFamily: 'Helvetica',
		backgroundColor: 'white',
		justifyContent: 'space-between',
		flex:1,
		marginTop:5*scale,
		marginBottom: 5*scale,
		marginLeft: 5*scale,
		marginRight: 5*scale,
		paddingVertical: 30*scale,
		paddingStart: 5*scale,
		paddingEnd: 10*scale,
		paddingHorizontal: 30*scale,
		borderWidth: 2*scale,
		borderColor: "grey",
		borderRadius: 0.5*scale,
		textAlign:'center',
		fontStyle: 'italic',
	},
	textStyleHeader:{
		color: '#ff8c04',
		fontFamily: 'Helvetica',
		justifyContent: 'space-between',
		flex:1,
		fontSize: 30*scale,
		margin: 10*scale,
    	textAlign:'center',
	},
	textStyleSmall:{
		fontFamily: 'Helvetica',
		justifyContent: 'space-between',
		flex:1,
		fontSize: 25*scale,
		textAlign: 'center',
		fontStyle: 'italic',
		fontWeight: 'bold',
		underline: {textDecorationLine: 'underline'},
		color: '#ff8c04',
	},
	buttonStyle: {
        width: 50*scale, // Set your desired button width
        height: 50*scale, // Set your desired button height
        justifyContent: 'center',
        alignItems: 'center',
    },
	image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Cover the button area with the image
    },
	container: {
        flex: 1,
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
    },
	buttonContainer: {
        alignItems: 'center', // Center the button horizontally
        marginVertical: 15*scale, // Add vertical margin for spacing
		flexDirection: 'row', // Arrange buttons in a row
    },
});
export default Chapter_Template;