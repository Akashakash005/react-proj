function Car(props){
  
    const {carinfo}=props;
    const{carBrand , color }=carinfo;
    return <h1>I'm a {color} {carBrand} car </h1>
}

export default Car;