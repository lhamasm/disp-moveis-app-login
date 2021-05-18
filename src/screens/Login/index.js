import React from 'react';
import { 
    Alert,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import userIcon from '../../../assets/user-icon.png';
import style from './style';

const Login = () => {
    const pressed = () => Alert.alert("Aprendendo manipular elementos visuais com React native.", "Pode acessar a aplicação.")
    
    return (
        <View sytle={style.fill}>
            <Image
                source={userIcon}
                style={style.logo}
            />

            <TextInput
                placeholder="Digite o seu e-mail"
                style={style.input}
            />

            <TextInput
                placeholder="Digite a sua senha"
                secureTextEntry={true}
                style={style.input}
            />

            <TouchableOpacity onPress={() => pressed()} style={style.button}>
                <Text style={style.title}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;