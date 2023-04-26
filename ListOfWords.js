import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';

export default function ListOfWords({ navigation, route }) {
    
    const words = [{key: '001', Word: "Fabulous", WordDescription: "extraordinary, especially extraordinarily large"},
    {key: '002', Word: "Sesquicentennial", WordDescription: "relating to the one-hundred-and-fiftieth anniversary of a significant event"},
    {key: '003', Word: "Palaeoanthropology", WordDescription: "The study of early humans"},
    {key: '004', Word: "Volumenometer", WordDescription: "The instrument that determines volume of a solid"},
    {key: '005', Word: "Otorhinolaryngology", WordDescription: "The study of ear, nose, and throat"},
    {key: '006', Word: "Unconsentaneous", WordDescription: "To be in disagreement"},
    {key: '007', Word: "Gephydrophobia", WordDescription: "The fear of crossing bridges"},
    {key: '008', Word: "Jurisprudential", WordDescription: "Pertaining to the science of jurdical law"},
    {key: '009', Word: "Xerophthalmia", WordDescription: "Dry eye syndrome"},
    {key: '0010', Word: "Ultramicroscope", WordDescription: "Instrument for viewing objects that are difficult to see by the naked eye"}];
  
  const [listWords, setListWords] = useState(words)
  
    return (
    <View> 
    </View>
  );
}
