import type {NextPage} from 'next';
import Map from '../Components/map';
import TripInfoWindow from "../Components/tripInfoWindow";

const Home: NextPage = () => {
    return (
        <div>
            <Map/>
            <TripInfoWindow/>
        </div>
    )

}

export default Home;
