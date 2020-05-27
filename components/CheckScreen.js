import React from 'react';
import { View,Text } from 'react-native';
import {useGetPrediction} from './useGetPrediction';
import LottieView from 'lottie-react-native';

export const CheckScreen=()=>{

    const {data,loadcomplete} = useGetPrediction();

    if(data=='')
    {
        //Show loading
        return(
            <View style={{ alignItems: 'center', justifyContent: 'center',height:'100%' }}>
                 <LottieView source={require('../Assets/coronaLoading.json')} autoPlay loop style={{ width: 200, height: 250 }} />
                 
            </View>
        );
    }
    else if(data=='Infected')
    {
        return(
            <View style={{ alignItems: 'center', justifyContent: 'center',height:'100%' }}>
                 <LottieView source={require('../Assets/coronaVirus.json')} autoPlay loop style={{ width: 200, height: 250 }} />
                 <Text style={{fontSize:30,textAlign:'center'}}>
                     You are at Risk
                 </Text>
                 <Text style={{fontSize:18,textAlign:'center'}}>
                     We are still learning. Results may be false positive due to less quality Image.
                 </Text>
            </View>
        );
    }
    else if(data=='Normal'){
        return(
            <View style={{ alignItems: 'center', justifyContent: 'center',height:'100%' }}>
                 <LottieView source={require('../Assets/stayHome.json')} autoPlay loop style={{ width: 200, height: 250 }} />
                 <Text style={{fontSize:30,textAlign:'center'}}>
                     You are safe
                 </Text>
                 <Text style={{fontSize:18,textAlign:'center'}}>
                     But Follow the Social Distancing
                 </Text>
            </View>
        );
    }

    if(true){
        
    }
    else{
        return(
            <View>
                <Text>
                    loading
                </Text>
            </View>
        );
    }
 
    
}