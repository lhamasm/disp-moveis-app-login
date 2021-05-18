import { StyleSheet } from 'react-native';

import { colors } from '../../style';

export default StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginLeft: 50
    },

    input:{
        marginTop: 10,
        padding: 10,
        width: 300,
        backgroundColor: colors.light,
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
    },

    button: {
        width: 300,
        paddingVertical: 9,
        paddingHorizontal: 20,
        backgroundColor: colors.orange,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        marginTop: 10
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.blue
    }
});