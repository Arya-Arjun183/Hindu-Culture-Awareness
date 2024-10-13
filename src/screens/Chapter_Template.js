import React, { Component } from "react";

// Import your audio file
import { Text, StyleSheet, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get('window');
var scale = (Math.pow(width/1728, 0.4)); // Base width for scaling


import chapter1 from './gita-translations-json/english/gita_chapter_1.json';
import chapter2 from './gita-translations-json/english/gita_chapter_2.json';
import chapter3 from './gita-translations-json/english/gita_chapter_3.json';
import chapter4 from './gita-translations-json/english/gita_chapter_4.json';
import chapter5 from './gita-translations-json/english/gita_chapter_5.json';
import chapter6 from './gita-translations-json/english/gita_chapter_6.json';
import chapter7 from './gita-translations-json/english/gita_chapter_7.json';
import chapter8 from './gita-translations-json/english/gita_chapter_8.json';
import chapter9 from './gita-translations-json/english/gita_chapter_9.json';
import chapter10 from './gita-translations-json/english/gita_chapter_10.json';
import chapter11 from './gita-translations-json/english/gita_chapter_11.json';
import chapter12 from './gita-translations-json/english/gita_chapter_12.json';
import chapter13 from './gita-translations-json/english/gita_chapter_13.json';
import chapter14 from './gita-translations-json/english/gita_chapter_14.json';
import chapter15 from './gita-translations-json/english/gita_chapter_15.json';
import chapter16 from './gita-translations-json/english/gita_chapter_16.json';
import chapter17 from './gita-translations-json/english/gita_chapter_17.json';
import chapter18 from './gita-translations-json/english/gita_chapter_18.json';

import hindi_chapter1 from './gita-translations-json/hindi/gita_chapter_1.json';
import hindi_chapter2 from './gita-translations-json/hindi/gita_chapter_2.json';
import hindi_chapter3 from './gita-translations-json/hindi/gita_chapter_3.json';
import hindi_chapter4 from './gita-translations-json/hindi/gita_chapter_4.json';
import hindi_chapter5 from './gita-translations-json/hindi/gita_chapter_5.json';
import hindi_chapter6 from './gita-translations-json/hindi/gita_chapter_6.json';
import hindi_chapter7 from './gita-translations-json/hindi/gita_chapter_7.json';
import hindi_chapter8 from './gita-translations-json/hindi/gita_chapter_8.json';
import hindi_chapter9 from './gita-translations-json/hindi/gita_chapter_9.json';
import hindi_chapter10 from './gita-translations-json/hindi/gita_chapter_10.json';
import hindi_chapter11 from './gita-translations-json/hindi/gita_chapter_11.json';
import hindi_chapter12 from './gita-translations-json/hindi/gita_chapter_12.json';
import hindi_chapter13 from './gita-translations-json/hindi/gita_chapter_13.json';
import hindi_chapter14 from './gita-translations-json/hindi/gita_chapter_14.json';
import hindi_chapter15 from './gita-translations-json/hindi/gita_chapter_15.json';
import hindi_chapter16 from './gita-translations-json/hindi/gita_chapter_16.json';
import hindi_chapter17 from './gita-translations-json/hindi/gita_chapter_17.json';
import hindi_chapter18 from './gita-translations-json/hindi/gita_chapter_18.json';

const ENGLISH_TRANSLATION_HEADER = 'English Translation By Swami Adidevananda\n';
const HINDI_TRANSLATION_HEADER = 'Hindi Translation By Swami Tejomayananda\n';
const imagePause = require('./icons/icons8-pause-button-96.png');
const imagePlay = require('./icons/icons8-circled-play-100.png');
const imageStop = require('./icons/icons8-stop-circled-100.png');

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

	getTranslation(chapter, verseNum, lang){
		if (chapter==1){
			if (lang == "hindi"){
				this.mainFile = hindi_chapter1;
			} else{
				this.mainFile = chapter1;
			}
		} else if (chapter==2){
			if (lang == "hindi"){
				this.mainFile = hindi_chapter2;
			} else {
				this.mainFile = chapter2;
			}
		} else if (chapter==3){
			if (lang == "hindi"){
				this.mainFile = hindi_chapter3;
			} else{
				this.mainFile = chapter3;
			}
		} else if (chapter==4){
			if (lang == "hindi"){
				this.mainFile = hindi_chapter4;
			} else{
				this.mainFile = chapter4;
			}
		} else if (chapter==5){
			if (lang == "hindi"){
				this.mainFile = hindi_chapter5;
			} else{
				this.mainFile = chapter5;
			}
		} else if (chapter==6){
			if (lang == "hindi"){
				this.mainFile = hindi_chapter6;
			} else{
				this.mainFile = chapter6;
			}
		} else if (chapter==7){
			if (lang == "hindi"){
				this.mainFile = hindi_chapter7;
			} else{
				this.mainFile = chapter7;
			}
		} else if (chapter==8){
			if (lang == "hindi"){
				this.mainFile = hindi_chapter8;
			} else{
				this.mainFile = chapter8;
			}
		} else if (chapter==9){
			if (lang == "hindi"){
				this.mainFile = hindi_chapter9;
			} else{
				this.mainFile = chapter9;
			}
		} else if (chapter==10){
			if (lang == "hindi"){
				this.mainFile = hindi_chapter10;
			} else{
				this.mainFile = chapter10;
			}
		} else if (chapter==11){
			if (lang == "hindi"){
				this.mainFile = hindi_chapter11;
			} else{
				this.mainFile = chapter11;
			}
		} else if (chapter==12){
			if (lang == "hindi"){
				this.mainFile = hindi_chapter12;
			} else{
				this.mainFile = chapter12;
			}
		} else if (chapter==13){
			if (lang == "hindi"){
				this.mainFile = hindi_chapter13;
			} else{
				this.mainFile = chapter13;
			}
		} else if (chapter==14){
			if (lang == "hindi"){
				this.mainFile = hindi_chapter14;
			} else{
				this.mainFile = chapter14;
			}
		} else if (chapter==15){
			if (lang == "hindi"){
				this.mainFile = hindi_chapter15;
			} else{
				this.mainFile = chapter15;
			}
		} else if (chapter==16){
			if (lang == "hindi"){
				this.mainFile = hindi_chapter16;
			} else{
				this.mainFile = chapter16;
			}
		} else if (chapter==17){
			if (lang == "hindi"){
				this.mainFile = hindi_chapter17;
			} else{
				this.mainFile = chapter17;
			}
		} else if (chapter==18){
			if (lang == "hindi"){
				this.mainFile = hindi_chapter18;
			} else{
				this.mainFile = chapter18;
			}
		}
		this.keyToFind = chapter+"."+verseNum;
		this.translation = this.mainFile[this.keyToFind];
		
		return this.translation;
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

	stopAudio1 = ()=>{
		let isPlaying1 = this.state.isPlaying1;
		this.state.audio1.pause();
		this.state.audio1.currentTime = 0;
		if (isPlaying1) {
			// Change the state of song
			this.setState({ isPlaying1: !isPlaying1 });
		}
	}

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
	stopAudio2 = ()=>{
		let isPlaying2 = this.state.isPlaying2;

		this.state.audio2.pause();
		this.state.audio2.currentTime = 0;
		if (isPlaying2){
			this.setState({ isPlaying2: !isPlaying2 });
		}
	}
	render() {
		var header1 = "Verses " + this.verse + " to "
		var header2 = ""

		const { isPlaying1, isPlaying2} = this.state;
		const imageSource1 = isPlaying1 ? imagePause : imagePlay;
		const imageSource2 = isPlaying2 ? imagePause : imagePlay;

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
						source={imageSource1} // image path
						style={styles.image}/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.buttonStyle} onPress={this.stopAudio1}>
						<Image
						source={imageStop} // image path
						style={styles.image}/>
						</TouchableOpacity>
					</View>
				</View>
				<img src = {this.image1}/>
				<Text style = {styles.textStyle}>
					<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
					{this.getTranslation(this.chapterNum,this.verse)}
				</Text>
				<Text style = {styles.textStyle}>
					<Text style={styles.textStyleSmall}>{HINDI_TRANSLATION_HEADER}</Text>
					{this.getTranslation(this.chapterNum,this.verse, "hindi")}
				</Text>
				<img src = {this.image2}/>
				<Text style = {styles.textStyle}>
					<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
					{this.getTranslation(this.chapterNum,this.verse+1)}
				</Text>
				<Text style = {styles.textStyle}>
					<Text style={styles.textStyleSmall}>{HINDI_TRANSLATION_HEADER}</Text>
					{this.getTranslation(this.chapterNum,this.verse+1, "hindi")}
				</Text>
				<View>
					{this.image3 != 'error'? (
						<>
					<img src = {this.image3}/>
					<Text style = {styles.textStyle}>
					<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
						{this.getTranslation(this.chapterNum,this.verse+2)}
					</Text>
					<Text style = {styles.textStyle}>
						<Text style={styles.textStyleSmall}>{HINDI_TRANSLATION_HEADER}</Text>
						{this.getTranslation(this.chapterNum,this.verse+2, "hindi")}
					</Text>
					</>
					) : null}
				</View>
				<View>
					{this.image4 != 'error'? (
						<>
						<img src = {this.image4}/>
						<Text style = {styles.textStyle}>
						<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+3)}
						</Text>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{HINDI_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+3, "hindi")}
						</Text>
						</>
				) : null}
			</View>
				<View>
					{this.image5 != 'error'? (
						<>
						<img src = {this.image5}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+4)}
						</Text>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{HINDI_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+4,"hindi")}
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
								<Image source={imageSource2} // image path
									style={styles.image}/>
								</TouchableOpacity>
								<TouchableOpacity style={styles.buttonStyle} onPress={this.stopAudio2}>
								<Image
								source={imageStop} // image path
								style={styles.image}/>
								</TouchableOpacity>
							</View>
						</View>
						<img src = {this.image6}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+5)}
						</Text>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{HINDI_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+5,"hindi")}
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
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{HINDI_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+6,"hindi")}
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
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{HINDI_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+7,"hindi")}
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
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{HINDI_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+8,"hindi")}
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
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{HINDI_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+9,"hindi")}
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
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{HINDI_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+10,"hindi")}
						</Text>
						</>
					) : null}
				</View>
				<View style={styles.container_references}>
					<div>
					<h2>References</h2>
					<p>1. <a href="https://www.gitasupersite.iitk.ac.in/srimad/" target="_blank" rel="noopener noreferrer">Srimad Bhagwad Gita Supersite</a></p>
					</div>
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
        width: 120*scale, // Set your desired button width
        height: 120*scale, // Set your desired button height
        justifyContent: 'center',
        alignItems: 'center',
		marginHorizontal: 15*scale, // Optional: Adds margin between buttons
		marginBottom: 30*scale, // Optional: Adds margin between buttons
    },
	image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Cover the button area with the image
    },
	container_references: {
        flex: 1,
        justifyContent: 'center', // Center vertically
        alignItems: 'left', // Center horizontally
		marginVertical: 15*scale, // Optional: Adds margin between buttons
		marginHorizontal: 15*scale, // Optional: Adds margin between buttons
    },
	container: {
        flex: 1,
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
		marginVertical: 15*scale, // Optional: Adds margin between buttons
    },
	buttonContainer: {
		flex: 1,
        alignItems: 'center', // Center the button horizontally
        marginVertical: 5*scale, // Add vertical margin for spacing
		flexDirection: 'row', // Arrange buttons in a row
		justifyContent: 'space-between', // Creates space between buttons
    },
});
export default Chapter_Template;