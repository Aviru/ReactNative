import PlaceForm from '../components/Places/PlaceForm';
import { insertPlace } from '../util/database';

function AddPlace({ navigation }) {
    async function createPlaceHandler(place) {
        
        await insertPlace(place);

        // here we've used navigation.navigate() instead of navigation.goBack() method
        // to navigate back to AllPlaces screen, beoz using navigation.navigate() method we can pass data 
        // back to AllPlaces screen, which is not possible using goBack() method
        navigation.navigate('AllPlaces', {
            place: place
        });
    }

    return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;