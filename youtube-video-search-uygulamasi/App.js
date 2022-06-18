import React, { useEffect } from 'react';
import {StyleSheet,SafeAreaView,View,StatusBar,Platform,} from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Footer from './Footer';
import VideoComponent from './api/services/Video';
import { enableScreens } from 'react-native-screens';

const App = () => {
  enableScreens();

  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === 'ios' && (
        <StatusBar
          backgroundColor="rgb(228, 29, 62)"
          barStyle="light-content"
        />
      )}
      <View style={styles.videosearch}>
        <VideoComponent />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(228, 29, 62)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  videosearch: {
    flex: 1,
    backgroundColor: 'rgb(240, 240, 240)',
    width: '100%',
  },
  footer: {
    alignItems: 'center',
    width: 0,
    backgroundColor: 'rgb(255, 1, 1)',
    height: 0,
    paddingTop: 0,
  },
});

export default App;
