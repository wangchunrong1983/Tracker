import React, {useContext} from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';
import { ListItem } from 'react-native-elements';

const TrackListScreen = ({navigation}) => {
    const { state, fetchTracks } = useContext(TrackContext)

    return (
        <>
        <NavigationEvents onWillFocus={fetchTracks} />
        
        <FlatList data={state} keyExtractor={item=> item._id} renderItem={({item}) => 
        < TouchableOpacity onPress={() => navigation.navigate('TrackDetail', {_id: item._id}) }>
        <ListItem chevron={true} title={item.name} />
        </TouchableOpacity>
        } />
        </>
    )
}

TrackListScreen.navigationOptions = {
    title:'Tracks'
}



const styles = StyleSheet.create({

})

export default TrackListScreen;