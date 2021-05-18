import { StyleSheet } from 'react-native';

import { colors } from '../../style';

export default StyleSheet.create({
    adjustmentTop: {
        flex: 1,
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    adjustmentBottom: {
        flex: 0,
        backgroundColor: colors.orange
    }
});