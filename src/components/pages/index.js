import NavBar from '../header/navBar';
import Body from '../body/index';
import Footer from '../footer/index';

export default function Index({filterType}){
    console.log(filterType)
    return(
        <>

        <Body filterType={filterType}/>

        </>
    );
}