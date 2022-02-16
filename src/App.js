//import logo from './logo.svg';
import React , {useState} from "react";
import './App.css';

function App() {

  const[name ,setName]= useState("");
  const[idea ,setIdea] = useState("");
  const[age ,setAge]= useState("");
  const[product ,setProduct] = useState("");
  const[offer ,setOffer]= useState("");
  const[secproduct ,setSecProduct] = useState("");
  const[procesedprod ,setProcesedprod] = useState("");
  const[relyears ,setRelyears] = useState("");
  const[skill ,setSkill]= useState("");
  const[unique ,setUnique] = useState("");
  const[owner ,setOwner] = useState("");
  const local = "mumbai"; 
  const[estab ,setEstab] = useState("");
  const[mark ,setMark] = useState("");
  const[pri ,setPri] = useState("");
  
const handlename=(e)=>{
  setName(e.target.value)
}
const handleselect=(e)=>{
  setIdea(e.target.value)
}


const handleage=(e)=>{
  setAge(e.target.value)
}


const handleproduct=(e)=>{
  setProduct(e.target.value)
}
const handleoffer=(e)=>{
  setOffer(e.target.value)
}


const handlesecproduct=(e)=>{
  setSecProduct(e.target.value)
}

const handleprocessed=(e)=>{
  setProcesedprod(e.target.value)
}

const handleyears=(e)=>{
  setRelyears(e.target.value)
}

const handleskill=(e)=>{
  setSkill(e.target.value)
}
const handleunique=(e)=>{
  setUnique(e.target.value)
}
const handleoner=(e)=>{
  setOwner(e.target.value)
}
const handleEstab=(e)=>{
  setEstab(e.target.value)
}
const handlemark=(e)=>{
  setMark(e.target.value)
}
const handlePri=(e)=>{
  setPri(e.target.value)
}






  return (
    <div className="App">
    <div className="box">
     <div className="box1">
     <label>Username:</label><br />

<input type="text" onChange={handlename} name="username" placeholder='UserName' /><br />

<label >Stage of business:</label>
<select name="business_stage" onChange={handleselect}>
  <option value="Select">Select</option>
  <option value="Start-up">Start-up</option>
  <option value="Scale-up">Scale-up</option>
</select> <br /><br />


<label >Age of establishment:</label>
<input type="number" onChange={handleage} placeholder='Age of establishment' min="0" max="100" placeholder="0 to 100" />
<br></br>


<label>Primary Products/Services offfered :</label>
<input type="text" onChange={handleproduct} placeholder='primary_product_service_offered' />
  
<br></br>

<label>Offered to:</label> <br />
<select name="Offered to" onChange={handleoffer} >
  <option value="Endcustomers">End customers</option>
  <option value="Wholesalers">Wholesalers</option>
  <option value="Distributors">Distributors</option>
  <option value="Retailers">Retailers</option>
</select><br />
<br></br>


<label >Secondary Product/Services</label>
<input type="text" onChange={handlesecproduct} />
 <br></br>
<label> Processed Products</label>
<input type="text" onChange={handleprocessed}  placeholder='Processed Products' />
<br></br>

<label >Years of relevant experience in this field</label>
<input type="number" onChange={handleyears} placeholder='Releavent'/>
<br></br>
<label >Skill training</label>
<select onChange={handleskill}>
  <option >No formal skill taining</option>
  <option >Has formal skill training and certificate</option>
</select>
<br></br>
<label >Unique Seling Proposition </label>
<select  onChange={handleunique}>
 <option >the Entrepreners's experience in this field</option>
 <option >innovative product</option>
 <option >high profit margin</option>
 <option >high growth potenial </option>
</select>

<br></br>
<label >Ownership of infrastructure</label>
      <select 
       onChange={handleoner} 
      > 
        <option >Rented</option>
        <option >Leased</option>
        <option >Self-owned</option>
      </select><br /><br />
 <label>
     Establishment area (in square feet)
     (Enter 0 if the establishment area is irrelevant)  :
     </label>

     <input type="number" placeholder=' Establishment area' 
      onChange={handleEstab}

       />
 <h2>Target Market :  </h2>

     <label >Market research</label><br />
     <select 
    onChange={handlemark} 
     >
       <option >Not Conducted</option>
       <option >Market research has been conducted</option>

     </select><br />
 <label >Primeary market</label>
     <select  
     onChange={handlePri}
     >
       <option value="local">Local</option>
       <option value="Regional">Regional</option>
       <option value="National">National</option>
       <option >International</option>

     </select><br />
     </div>
     <div className="box2">

     <p> <strong>{name}</strong> is looking <strong>{idea}</strong> to their business of sharemarket</p>
    <p>This enterprise has been operational since <strong>{age}</strong> years and has been serving its customers since then</p> 
   <p>This establishment offers products/services like  <strong>{product}</strong> to <strong>{offer}</strong></p>
   <p>In addition, the enterprise shall also be invloved in  <strong>{secproduct}</strong>  </p>
   <p>other products of the enterprise shall include in  <strong>{procesedprod}</strong> </p>
   <p>  <strong>{name}</strong> has relevant experience of <strong>{relyears}</strong> years in the field</p>
   <p>The entrepreneur <strong>{skill}</strong> in this field of work</p>
   <p>The enterprise is uniquely positioned because of its <strong>{unique}</strong> </p>

   <p>The {local} is located in area of in a <strong>{owner}</strong> property</p>

   <p>The size of the establishment is {estab} sq ft</p>
   <p> <strong>{mark}</strong> and the range of products and target market has been identified after that.</p>
   <p>The enterprise shall focus on offering its products/services to <strong>{pri}</strong> markets</p> 


     </div>
     </div>
    </div>
  );
}

export default App;
