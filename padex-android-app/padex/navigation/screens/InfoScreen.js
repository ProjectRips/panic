import React, { useContext, Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import CreateCards from '../../components/cards_disease';
import { Searchbar } from 'react-native-paper';
import { createFilter } from 'react-native-search-filter';
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';
import  DiseaseData  from './DiseaseContext';
import data from '../../slides'


const KEYS_TO_FILTERS = ['title']

class InfoScreen extends Component {
    static contextType = DiseaseData;
    constructor(props, context) {
        super(props, context);
        this.state = {
            diseaseName: this.context["state"]["message"] !== undefined && this.context["state"]["message"] !== null ? this.context["state"]["message"] : "",
                        filteredDataSource: this.context["state"]["message"] !== null && this.context["state"]["message"] !== undefined ? data.filter(createFilter(this.context["state"]["message"], KEYS_TO_FILTERS)) : ""
        }
        this.onChangeSearch = this.onChangeSearch.bind(this)

    }


   
    onChangeSearch = async(searchText) => {
        this.setState({ diseaseName: searchText });
        this.setState({ filteredDataSource : data.filter(createFilter(searchText, KEYS_TO_FILTERS)) });
    }

    render() {
        

        return (
            <DiseaseData.Consumer>
                {(context) => (
                    <ScrollView contentContainerStyle={styles.container}>
                        <Text style={styles.title}>Pustaka Penyakit </Text>

                        <Searchbar
                            placeholder="Nama penyakit"
                            onChangeText={async (text) => {
                                await this.onChangeSearch(text);
                            }}
                      
                            value={this.state.diseaseName}
                            style={styles.search}
                        />
                        {this.state.filteredDataSource.map((item, index) => (
                            <CreateCards key={index} item={item}></CreateCards>
                        ))}


                    </ScrollView>
                )}
            </DiseaseData.Consumer>
        );
    }




}

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
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 30,
    },
    cover: {
        resizeMode: "stretch",
    },
    search: {
        width: "80%",
    }
})


export default function (props) {
    const navigation = useNavigation()
    const route = useRoute()
    const isFocused = useIsFocused();

    return <InfoScreen {...props} navigation={navigation} route={route} isFocused={isFocused}/>
}