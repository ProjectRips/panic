import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import Unorderedlist from 'react-native-unordered-list';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


const CreateCards = ({item}) => {
    return(
        <Card LeftContent={LeftContent} style={styles.card}>
            <Card.Cover source={ item.image } />
            {item.image2 != "" ?  (<Card.Cover resizeMode='stretch' source={ item.image2 } />) : (<Text/>)}
            <Card.Content>
                <Title>{item.title}</Title>
                <Paragraph style={styles.paragraph}>{`${item.desc}`}</Paragraph>

                {item.pengendalian.length != 0 ? (
                    <Text style={styles.pengendalian}>Pengendalian: </Text>
                        
                ) : (<Text></Text>)}

                {item.pengendalian.map((itemp, index) => (
                    <Unorderedlist key={index}>
                        <Text style={styles.paragraph}>{itemp.key}</Text>
                    </Unorderedlist>                 
                ))}
            </Card.Content>
        </Card>
    );
};




const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: "80%",
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 40, 
        fontWeight:'bold',
        marginTop: 30,
        marginBottom: 30,
    },
    paragraph: {
        textAlign: "justify",
    },
    pengendalian: {
        fontWeight: '500',
        fontSize: 20,
    },
    cover: {
        resizeMode: "stretch",
    },
    search: {
        width: "80%",
    }
})

export default CreateCards;