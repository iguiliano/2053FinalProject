import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';

export default function ListOfWords({ navigation, route }) {
    
    const words = [{Word: "Fabulous", WordDescription: "extraordinary, especially extraordinarily large"},
    {Word: "Sesquicentennial", WordDescription: "relating to the one-hundred-and-fiftieth anniversary of a significant event"},
    {Word: "Palaeoanthropology", WordDescription: "The study of early humans"},
    {Word: "Volumenometer", WordDescription: "The instrument that determines volume of a solid"},
    {Word: "Otorhinolaryngology", WordDescription: "The study of ear, nose, and throat"},
    {Word: "Unconsentaneous", WordDescription: "To be in disagreement"},
    {Word: "Gephydrophobia", WordDescription: "The fear of crossing bridges"},
    {Word: "Jurisprudential", WordDescription: "Pertaining to the science of jurdical law"},
    {Word: "Xerophthalmia", WordDescription: "Dry eye syndrome"},
    {Word: "Ultramicroscope", WordDescription: "Instrument for viewing objects that are difficult to see by the naked eye"}];
  
  const [listWords, setListWords] = useState(words)
  
    return (
    <View> </View>
  );
}
