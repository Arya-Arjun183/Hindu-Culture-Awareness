import chapter1 from "./gita_chapter_1.json";
import chapter2 from "./gita_chapter_2.json";
import chapter3 from "./gita_chapter_3.json";
import chapter4 from "./gita_chapter_4.json";
import chapter5 from "./gita_chapter_5.json";
import chapter6 from "./gita_chapter_6.json";
import chapter7 from "./gita_chapter_7.json";
import React from 'react';
function Parse(chapter, verse){
    if (chapter==1){
        mainFile = chapter1;
    } else if (chapter==2){
        mainFile = chapter2;
    } else if (chapter==3){
        mainFile = chapter3;
    } else if (chapter==4){
        mainFile = chapter4;
    } else if (chapter==5){
        mainFile = chapter5;
    } else if (chapter==6){
        mainFile = chapter6;
    } else if (chapter==7){
        mainFile = chapter7;
    }

}

