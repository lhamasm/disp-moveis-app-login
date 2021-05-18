import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { colors } from '../../style';
import style from './style';

const DefaultScreen = ({ children }) => {
    return (
        <>
            <SafeAreaView style={style.adjustmentTop}>
                <StatusBar backgroundColor={colors.blue} />
                { children }
            </SafeAreaView>
            <SafeAreaView style={style.adjustmentBottom} />
        </>
    )
}

export default DefaultScreen;