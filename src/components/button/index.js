import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { cores } from '../../utils/Constants'

import styles from './style';

export default function Button({value, customStyle, color, onPress, txtStyle}) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.btn, customStyle, {backgroundColor: color ?? cores.green}]}>
            <Text style={[styles.txt, txtStyle]}>{value}</Text>
        </TouchableOpacity>
    )
}
