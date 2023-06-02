import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import m from '../images/logo.png';
import { useDispatch } from 'react-redux';
import { getAllMovi,getAMoviSearch } from '../Redux/Action/MovieAction';

 
const Navbar = () => {
const dispatch = useDispatch()
const Input=(val)=>{
  Search(val)
}
//to search in api
const Search = async(val) => {
  if(val !== ''){
   dispatch(getAMoviSearch(val))
  }else{
   dispatch(getAllMovi())
  };
}
 
  return (
    <div className='n nav-style'> 
    <Container>
    <Row className='pt-2'>
     <Col xs="2" lg="1">
     <a href='/'>
    <img className='logo pb-2' src={m}/>
    </a>
    </Col>
  
    <Col xs="10" lg="11" className="d-flex align-items-center">
    <div className='search w-100'>
    <i className='fa fa-search'></i>
    <input className='form-control' onChange={event => Input(event.target.value)}    type="text" placeholder='ابحث'/>
    </div>
    </Col>

    </Row>
    </Container>
      
    </div>
    
  )
  }

export default Navbar
