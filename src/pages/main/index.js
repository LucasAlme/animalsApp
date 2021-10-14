import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Input from '../../components/input';
import styles from "./style";
import { Icon, Avatar } from 'react-native-elements';
import { cores } from "../../utils/Constants";
import Carousel from "react-native-snap-carousel";


const gato = require('../../assets/images/gato.jpg')
const cachorro = require('../../assets/images/cachorro.jpg')
const passaro = require('../../assets/images/passaros.jpg')
const peixe = require('../../assets/images/peixes.jpg')
const carousel = require('../../assets/images/carousel5.jpg')
const carousel2 = require('../../assets/images/carousel6.jpg')
const carousel3 = require('../../assets/images/carousel7.jpg')
const carousel4 = require('../../assets/images/carousel8.jpg')



export default function Main() {

    const [carouselItems, setCarouselItems] = useState([{ image: carousel }, { image: carousel2 }, { image: carousel3 }, { image: carousel4 }]);



    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.inputSty}>
                    <Icon name="search" color={cores.blue} />
                    <Text style={{ color: cores.blue, paddingHorizontal: 10, marginRight: '20%' }}>Pesquisar na Animals</Text>
                    <Icon name="barcode" type="font-awesome-5" color={cores.blue} />
                </TouchableOpacity>
                <Icon name="shopping-cart" type="font-awesome-5" color={cores.blue} solid={false} />
            </View>
            <View style={styles.vAvatar}>
                <TouchableOpacity>
                    <Avatar source={gato} rounded size={65} />
                    <Text style={styles.txt}>Gatos</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Avatar source={cachorro} rounded size={65} />
                    <Text style={styles.txt}>Cachorros</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Avatar source={passaro} rounded size={65} />
                    <Text style={styles.txt}>Passaros</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Avatar source={peixe} rounded size={65} />
                    <Text style={styles.txt}>Peixes</Text>
                </TouchableOpacity>
            </View>
            <Carousel data={carouselItems} sliderWidth={410} itemWidth={450} renderItem={({ item }) => (
                <View >
                    <Image source={item.image} style={styles.imgStyle} />
                </View>
            )} />
            <TouchableOpacity>
                <Text>
                    Assinatura Animals
                </Text>
            </TouchableOpacity>

        </View >
    )
}