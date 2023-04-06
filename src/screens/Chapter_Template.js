import React, { Component } from "react";

// Import your audio file
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import play from './icons/play-icon.jpg';
import stop from './icons/stop-icon.jpg';

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

const ENGLISH_TRANSLATION_HEADER = 'English Translation: \n';

class Chapter_Template extends Component {

	audio1 = this.props.navigation.getParam('url1', 'https://drive.google.com/uc?id=1heYIXcA6ZAmnGhhhszNOr30VXZ0OkPqG&export=download');
	title = this.props.navigation.getParam('title', 'Error!');
	audio2 = this.props.navigation.getParam('url2','https://drive.google.com/uc?id=1heYIXcA6ZAmnGhhhszNOr30VXZ0OkPqG&export=download');
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
			if (this.image5 == 'error'){
				return (
					<ScrollView style={styles.container}>
						<Text style={styles.textStyleHeader}>Part 1</Text>
						<button>
							<img src={play} width={50} height={50} onClick={this.playPauseButton1}/>
							<img src={stop} width={50} height={50} onClick={this.stopAudio1}/>
						</button>
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
					</ScrollView>
				)
			}
			if (this.image6 == 'error'){
				return (
					<ScrollView style={styles.container}>
						<Text style={styles.textStyleHeader}>Part 1</Text>
						<button>
							<img src={play} width={50} height={50} onClick={this.playPauseButton1}/>
							<img src={stop} width={50} height={50} onClick={this.stopAudio1}/>
						</button>
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
						<img src = {this.image5}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+4)}
						</Text>
					</ScrollView>
				)
			}
			if (this.image7 == 'error'){
				return (
					<ScrollView style={styles.container}>
						<Text style={styles.textStyleHeader}>Part 1</Text>
						<button>
							<img src={play} width={50} height={50} onClick={this.playPauseButton1}/>
							<img src={stop} width={50} height={50} onClick={this.stopAudio1}/>
						</button>
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
						<img src = {this.image5}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+4)}
						</Text>
						<Text style={styles.textStyleHeader}>Part 2</Text>
						
						<button>
						<img src={play} width={50} height={50} onClick={this.playPauseButton2}/>
						<img src={stop} width={50} height={50} onClick={this.stopAudio2}/>
						</button>
						<img src = {this.image6}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+5)}
						</Text>
					</ScrollView>
				)
			}
			if (this.image8 == 'error'){
				return (
					<ScrollView style={styles.container}>
						<Text style={styles.textStyleHeader}>Part 1</Text>
						<button>
							<img src={play} width={50} height={50} onClick={this.playPauseButton1}/>
							<img src={stop} width={50} height={50} onClick={this.stopAudio1}/>
						</button>
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
						<img src = {this.image5}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+4)}
						</Text>
						<Text style={styles.textStyleHeader}>Part 2</Text>
						
						<button>
						<img src={play} width={50} height={50} onClick={this.playPauseButton2}/>
						<img src={stop} width={50} height={50} onClick={this.stopAudio2}/>
						</button>
						<img src = {this.image6}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+5)}
						</Text>
						<img src = {this.image7}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+6)}
						</Text>
					</ScrollView>
				)
			}
			if (this.image9 == 'error'){
				return (
					<ScrollView style={styles.container}>
						<Text style={styles.textStyleHeader}>Part 1</Text>
						<button>
							<img src={play} width={50} height={50} onClick={this.playPauseButton1}/>
							<img src={stop} width={50} height={50} onClick={this.stopAudio1}/>
						</button>
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
						<img src = {this.image5}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+4)}
						</Text>
						<Text style={styles.textStyleHeader}>Part 2</Text>
						
						<button>
						<img src={play} width={50} height={50} onClick={this.playPauseButton2}/>
						<img src={stop} width={50} height={50} onClick={this.stopAudio2}/>
						</button>
						<img src = {this.image6}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+5)}
						</Text>
						<img src = {this.image7}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+6)}
						</Text>
						<img src = {this.image8}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+7)}
						</Text>
					</ScrollView>
				)
			}
			if (this.image10 == 'error'){
				return (
					<ScrollView style={styles.container}>
						<Text style={styles.textStyleHeader}>Part 1</Text>
						<button>
							<img src={play} width={50} height={50} onClick={this.playPauseButton1}/>
							<img src={stop} width={50} height={50} onClick={this.stopAudio1}/>
						</button>
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
						<img src = {this.image5}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+4)}
						</Text>
						<Text style={styles.textStyleHeader}>Part 2</Text>
						
						<button>
						<img src={play} width={50} height={50} onClick={this.playPauseButton2}/>
						<img src={stop} width={50} height={50} onClick={this.stopAudio2}/>
						</button>
						<img src = {this.image6}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+5)}
						</Text>
						<img src = {this.image7}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+6)}
						</Text>
						<img src = {this.image8}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+7)}
						</Text>
						<img src = {this.image9}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+8)}
						</Text>
					</ScrollView>
				)
			}
			if (this.image11=='error'){
				return (
					<ScrollView style={styles.container}>
						<Text style={styles.textStyleHeader}>Part 1</Text>
						<button>
							<img src={play} width={50} height={50} onClick={this.playPauseButton1}/>
							<img src={stop} width={50} height={50} onClick={this.stopAudio1}/>
						</button>
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
						<img src = {this.image5}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+4)}
						</Text>
						<Text style={styles.textStyleHeader}>Part 2</Text>
						
						<button>
						<img src={play} width={50} height={50} onClick={this.playPauseButton2}/>
						<img src={stop} width={50} height={50} onClick={this.stopAudio2}/>
						</button>
						<img src = {this.image6}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+5)}
						</Text>
						<img src = {this.image7}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+6)}
						</Text>
						<img src = {this.image8}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+7)}
						</Text>
						<img src = {this.image9}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+8)}
						</Text>
						<img src = {this.image10}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+9)}
						</Text>
					</ScrollView>
				)
			}else {
				return (
					<ScrollView>
						{/* Show state of song on website */}
						<Text style={styles.textStyleHeader}>Part 1</Text>
						<button>
							<img src={play} width={50} height={50} onClick={this.playPauseButton1}/>
							<img src={stop} width={50} height={50} onClick={this.stopAudio1}/>
						</button>
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
						<img src = {this.image5}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+4)}
						</Text>
						<Text style={styles.textStyleHeader}>Part 2</Text>
						<button>
						<img src={play} width={50} height={50} onClick={this.playPauseButton2}/>
						<img src={stop} width={50} height={50} onClick={this.stopAudio2}/>
						</button>
						<img src = {this.image6}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+5)}
						</Text>
						<img src = {this.image7}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+6)}
						</Text>
						<img src = {this.image8}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+7)}
						</Text>
						<img src = {this.image9}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+8)}
						</Text>
						<img src = {this.image10}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+9)}
						</Text>
						<img src = {this.image11}/>
						<Text style = {styles.textStyle}>
							<Text style={styles.textStyleSmall}>{ENGLISH_TRANSLATION_HEADER}</Text>
							{this.getTranslation(this.chapterNum,this.verse+10)}
						</Text>
					</ScrollView>
				)
			}
	}
	
}
const styles = StyleSheet.create({
	textStyle:{
		fontSize:25,
		fontFamily: 'Helvetica',
		backgroundColor: 'white',
		justifyContent: 'space-between',
		flex:1,
		marginTop:5,
		marginBottom: 5,
		marginLeft: 5,
		marginRight: 5,
		paddingVertical: 30,
		paddingStart: 5,
		paddingEnd: 10,
		paddingHorizontal: 30,
		borderWidth: 2,
		borderColor: "grey",
		borderRadius: 0.5,
		textAlign:'center',
		fontStyle: 'italic',
	},
	textStyleHeader:{
		color: 'blue',
		fontFamily: 'Helvetica',
		justifyContent: 'space-between',
		flex:1,
		fontSize: 40,
    	margin: 15,
    	textAlign:'center',
	},
	textStyleSmall:{
		fontFamily: 'Helvetica',
		justifyContent: 'space-between',
		flex:1,
		fontSize: 20,
		textAlign: 'center',
		fontStyle: 'italic',
		fontWeight: 'bold',
		underline: {textDecorationLine: 'underline'},
		color: 'blue',
	}
});
export default Chapter_Template;