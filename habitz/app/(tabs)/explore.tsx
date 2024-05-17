import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View, Text,ViewStyle } from 'react-native';
import {PropsWithChildren} from 'react'
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';

export default function TabTwoScreen() {
  return (
    <View
    style={[
      styles.container
    ]}>
      <View style={styles.col}>
        <View style={styles.row}>
          <View style={[styles.box1]}>
            <Text style={[styles.titleText]}>
              Habitz
            </Text>
          </View>
          <View style={[styles.item, styles.box2]}>  
            <Text style={[styles.titleText]}>
              Habitz
            </Text>
          </View>
        </View>
        <View style={[styles.row]}>
          <View style={[styles.body1]}>
            <Text style={[styles.titleText]}>
              Habitz
            </Text>
          </View>
          <View style={[styles.item, styles.body2]}>  
            <Text style={[styles.titleText]}>
              Habitz
            </Text>
          </View>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  baseText: {
    flex:5,
    fontFamily: 'Cochin',
  },
  titleText: {
    textAlign : 'center',
    flex :1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
    backgroundColor: '#DFD0B8'
  },
  item :{
    width:'90%'
  },
  row: {
    flex:1,
    flexDirection: "row"
  },  
  col: {
    flex:1,
    flexDirection: "column"
  },
  box1: {
    width: '10%',
    backgroundColor: '#3C5B6F'
  },
  box2: {
    backgroundColor: '#948979'
  },
  body1: {
    width : "10%",
    backgroundColor: '#DFD0B8'
  },
  body2: {
    width : "90%",
    backgroundColor: '#DFD0B8'
  },
});