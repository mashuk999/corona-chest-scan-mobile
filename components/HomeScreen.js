import React from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';
import { getPermissions } from './getPermissions';
import LottieView from 'lottie-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../contexts/MainContext'


export const HomeScreen = () => {

    const {localuris,filenames,filetypes} = React.useContext(StoreContext);
    const [localUri,setLocalUri] = localuris;
    const [filename,setFileName] = filenames;
    const [filetype,setFiletype] = filetypes;

    const { permission } = getPermissions();

    const [imageURI,setImageURI] = React.useState('');
    const navigation = useNavigation();

    const getImageAsync = async () => {
        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
              setFileName(result.uri.split('/').pop());
              let fileType = result.uri.substring(result.uri.lastIndexOf(".") + 1);
              setFiletype(fileType);
              console.log(filetype);
              setLocalUri(result.uri);
          }
    
          console.log(result);
        } catch (E) {
          console.log(E);
        }
      };

    if(localUri!='')
    {
        console.log(imageURI);
        navigation.navigate('CheckScreen');
    }

        if (permission) {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <LottieView source={require('../Assets/coronaDoctor.json')} autoPlay loop style={{ width: 100, height: 300 }} />
                    <View style={styles.button} >
                        <TouchableOpacity onPress={()=>getImageAsync()} style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                        <Text style={styles.buttontxt}>Choose X-Rays</Text>
    
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        else {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <LottieView source={require('../Assets/cameraAccess.json')} autoPlay loop style={{ width: 400, height: 400 }} />
                    <Text>We need your permissions</Text>
                </View>
            )
        }
    
    


}


const styles = StyleSheet.create({
    button: {
        width: '50%',
        height: '10%',
        borderRadius: 10,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop:'19%',

    },
    buttontxt: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize:19,
    }
});