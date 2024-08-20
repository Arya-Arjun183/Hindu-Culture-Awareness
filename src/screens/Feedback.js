import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const Feedback = (props)=>{
    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfFK6jb2bXxZOXZiabqESybArdftwoPofQrJ0uz4loFwkJpmg/viewform?embedded=true" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} 
                title="Google Form">
                Loading…
            </iframe>
    </div>
    );
}

export default Feedback;