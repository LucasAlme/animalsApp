import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from './styles';
import { Image } from 'react-native-elements';
import { CustomPicker } from 'react-native-custom-picker';
import { cores } from '../../utils/Constants';

export default function Picker({ options, value, onChange, customStyle, title, isEnum }) {

  function renderOption(settings) {
    const { item, getLabel } = settings
    return (
      <View style={styles.containerOption}>
        <Text style={styles.txtOptions}>{item}</Text>
      </View>
    )
  }

  function renderHeader(settings) {
    return (
      <View style={styles.containerHeader}>
        <Text style={styles.txtHeader}>{title || "Selecione uma opção"}</Text>
      </View>
    )
  }

  return (
    <CustomPicker modalAnimationType="fade" backdropStyle={{ backgroundColor: "rgba(0,0,0,0.9)" }} onValueChange={onChange} options={options} textStyle={{ color: cores.cinza }}
      optionTemplate={renderOption} headerTemplate={renderHeader} containerStyle={[styles.content, customStyle]}
      fieldTemplate={() =>
        <View style={styles.fieldPicker}>
          <Text style={styles.txtPicker} >{value || options[0]}</Text>
          <View style={styles.boxPicker}>
            <Image style={styles.iconPicker} source={require('../../assets/images/iconepicker.png')} />
          </View>
        </View>}
    />
  );
}




