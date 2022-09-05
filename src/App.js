
import './App.css';
import React from 'react'
import Aos from 'aos';

import "aos/dist/aos.css"
import AnimatedCheckmark, { MODES } from 'react-animated-checkmark'

import { useEffect,useState } from 'react';
function App() {
const [mode,setMode]=useState("")
const [udata,setuData]=useState([])
const getData=()=>{
  let values=Object.keys(localStorage);
  let value=[]
  if(values.length!==0){
    value=values.sort()
  }


  if(values.length===0){
       return [];
  }
  else{
    let dataArray=[]

    for(let i=0;i<value.length;i++){
      const obj=values[i]
      try{
      dataArray.push(JSON.parse(localStorage.getItem(value[i])))
    }
    catch(e){
      console.log("error")
    }
  }
  
    console.log(dataArray)
    return dataArray;
  }
}


  const setData=()=>{
            let title=document.getElementById("ititle").value
            let desc=document.getElementById("idesc").value
            let tag=document.getElementById("itag").value
            let adate=document.getElementById("iadtime").value
            let dueDate=document.getElementById("iduetime").value
            let range=document.getElementById("iimportance").value
let confirmation=window.confirm("Are You sure You ant to Add this task?")
if(title && desc && tag && adate && dueDate && range && confirmation===true){
  let values=Object.keys(localStorage).sort()
  console.log(values)
  let nvalue=values[values.length-1]
  
  localStorage.setItem(values.length!==0?parseInt(values[values.length-1]) +1:"0",JSON.stringify({title:title,desc:desc,tag:tag,adate:adate,dueDate:dueDate,range:+range,id:values.length!==0? parseInt(values[values.length-1]) +1:0}));
  setuData(getData())
  alert("Task Added Successfully!!")
  console.log("id is",parseInt(values[values.length-1])+1) 
  console.log(values.sort((a,b)=>{
    return a-b;
  }))
}
else{
  alert("fill all the details")
}





            console.log(range,typeof(+range),title,desc,tag,dueDate,adate)
  }

  useEffect(()=>{
    let initialData=getData()
    Aos.init({duration:2000})
    setuData(initialData)
  },[])


  return (
    <>
  
    <i class="fa-sharp fa-solid fa-angles-down fa-1x fa-bounce" style={{position:"fixed",left:"2.7vw",top:"15vw",fontSize:"7.0vw",zIndex:2}}></i>
    <i class="fa-sharp fa-solid fa-angles-down fa-1x fa-bounce" style={{position:"fixed",right:"2.7vw",top:"15vw",fontSize:"7.0vw",zIndex:2}}></i>
    <div style={{textAlign:"center"}} className="mt-5 font-effect-shadow-multiple"><h1 style={{fontFamily: "Trirong, sans-serif",fontWeight:"600"}} id="t"><span style={{color:"yellow"}} data-aos="zoom-in">TO</span><span data-aos="fade-up" style={{color:"white"}} id="d">DO</span>&nbsp;&nbsp;<span data-aos="fade-up" style={{color:"red"}} id="a">A</span><span data-aos="fade-up" style={{color:"white"}} id="p">PP</span><span> <i data-aos="fade-down" class="fa-sharp fa-solid fa-book fa-1x text-warning fa-fade"></i></span></h1></div>
    <div data-aos="zoom-out" style={{textAlign:"center"}}><b style={{fontFamily:"Trirong",color:"yellow",textDecoration:"underline"}}>Moto: </b><b><i style={{fontFamily:"Sofia"}}>Make Sure to complete Your Tasks on Time or else You will face <strong style={{color:"red"}}>CONSEQUENCES!!!</strong></i></b></div>
   
      <div className="container mt-4" style={{color:"white",fontWeight:"600"}} >
        <div className="row">
       
          <div className="col-8 col-lg-6 mx-auto">
          <div id="title" data-aos="fade-left" style={{color:"white"}}><b style={{fontFamily: "Trirong, sans-serif",color:"rgb(240 212 212)",textShadow:"1px 1px 1px black"}} >TI</b><b style={{fontFamily:"Trirong,sans-serif",color:"rgb(190 134 199)",textShadow:"1px 1px 1px black"}}>TLE</b></div>
          <input name="title" style={{border:"2px solid #9a27c5"}} id="ititle"  data-aos="fade-left" className="form-control form-control-md"type="text" placeholder="Plz Enter Your Title" aria-label=".form-control-lg example" /><br/>
          <div id="desc" data-aos="fade-right" style={{textShadow:"1px 1px 1px white"}}><b style={{fontFamily: "Trirong, sans-serif",color:"rgb(240 212 212)",textShadow:"1px 1px 1px black"}}>DESC</b><b style={{fontFamily:"Trirong,sans-serif",color:"rgb(190 134 199)",textShadow:"1px 1px 1px black"}}>RIPTION</b></div>
          <input name="desc" style={{border:"2px solid #9a27c5"}} data-aos="fade-right" id="idesc"   className="form-control form-control-md" type="text" placeholder="Plz Enter Your Description" aria-label=".form-control-lg example"/><br/>
          <div id="tag" data-aos="fade-left"><b style={{fontFamily: "Trirong, sans-serif",color:"rgb(240 212 212)",textShadow:"1px 1px 1px black"}}>T</b><b style={{fontFamily:"Trirong,sans-serif",color:"rgb(190 134 199)",textShadow:"1px 1px 1px black"}}>AG</b></div>
          <input name="tag" style={{border:"2px solid #9a27c5"}} data-aos="fade-left" id="itag"   className="form-control form-control-md" type="text" placeholder="Plz Enter tag" aria-label=".form-control-lg example"/><br/>
         
          <div id="adatetime" data-aos="flip-left"><b style={{fontFamily: "Trirong, sans-serif",color:"rgb(240 212 212)",textShadow:"1px 1px 1px black"}}>ADDED </b><b style={{fontFamily:"Trirong,sans-serif",color:"rgb(190 134 199)",textShadow:"1px 1px 1px black"}}>DATE&TIME</b> </div>
          <input name="ADate&time " style={{border:"2px solid #9a27c5"}} data-aos="flip-left" id="iadtime"   className="form-control form-control-md" type="datetime-local"  aria-label=".form-control-lg example"/><br/>
          <div id="duedatetime" data-aos="flip-right"><b style={{fontFamily: "Trirong, sans-serif",color:"rgb(240 212 212)",textShadow:"1px 1px 1px black"}}>DUE</b> <b style={{fontFamily:"Trirong,sans-serif",color:"rgb(190 134 199)",textShadow:"1px 1px 1px black"}}> DATE&TIME</b></div>
          <input name="dDate&time " style={{border:"2px solid #9a27c5"}} data-aos="flip-right" id="iduetime"   className="form-control form-control-md" type="datetime-local"  aria-label=".form-control-lg example"/><br/>

<div id="importance" data-aos="zoom-in-up" ><strong style={{fontFamily: "Trirong, sans-serif",color:"rgb(240 212 212)",textShadow:"1px 1px 1px black",display:"inline"}}>IMPO</strong><strong style={{fontFamily:"Trirong,sans-serif",color:"rgb(190 134 199)",textShadow:"1px 1px 1px black",display:"inline"}}>RTANCE <input type="range" id="iimportance" data-aos="zoom-out" class="form-range" min="0" max="100"/></strong></div>

<button className="btn btn-outline-light " data-aos="zoom-in" onClick={setData}>Add</button>
          </div>
        </div>
      </div>

<div className='mt-4 mb-2 ' style={{textAlign:"center"}}><h2 className='border-bottom border-white'><i data-aos="fade-right" className="fa-solid fa-pen mx-2 text-warning"></i><b data-aos="fade-down" style={{fontFamily: "Trirong, sans-serif",color:"red"}}>Yo<b data-aos="fade-down"  style={{fontFamily: "Trirong, sans-serif",color:"white"}}>ur</b></b> <b data-aos="fade-down"  style={{fontFamily: "Trirong, sans-serif",color:"yellow"}}>To</b><b data-aos="fade-down">dos..</b><i data-aos="fade-left" className="fa-solid fa-pen mx-2 text-warning"></i></h2></div>
<div className="container mt-3" style={{color:"black"}}>
{mode===""?"":<div className='row' style={{textAlign:"center"}}><div className='col-12' style={{display:"flex",justifyContent:"center"}}> <AnimatedCheckmark mode={mode} style={{width:"2rem",margin:"auto"}}/></div> </div>}
  <div className="row">
    {udata && udata?.map((ele,i)=>{
      {console.log("ok")}
      return (
        <div className="col-md-4 col-lg-3 col-sm-6  my-2" id={`c${ele.id}`}  data-aos="fade-up">
       
        <div className="card mx-auto  maincol " id={`todo${ele.id}`} style={{width: "13rem",boxShadow:"2px 2px 1px black,-2px -2px 1px black  ",backgroundColor:"#c8bfbf"}}
      >

  <div className="card-body ">


  <div style={{position:"absolute",height:"10px",zIndex:"5",backgroundColor:"black",left:"50%",top:"45%"}} id={`my${ele.id}`}></div>
    <h5 className={`card-title c${ele.id} bg-dark text-white`} style={{textAlign:"center",borderRadius:"6px",boxShadow:"1px 1px 2px black"}}>{ele.title?.toUpperCase()}</h5>

   
    <div class="collapse" id={`collapseExample${i}`}>
    
  <div class="card card-body " style={{position:"relative",color:"#ffd7d7",backgroundColor:" #544b4b"}}>
    {ele.desc}
   
  </div>
</div>
 
    <p className="card-text">
   <b style={{textShadow:"1px 1px 1px white"}}>Tag:</b><small style={{fontWeight:"normal",fontFamily:"revert-layer"}}><i><b>{ele.tag}</b></i></small></p>
    <p className="card-text"><b style={{textShadow:"1px 1px 1px white"}}>Importance:</b><div className="progress" style={{height:"0.5rem"}}>
   
  <div class={`progress-bar bg-dark progress-bar-striped`} role="progressbar" style={{width: `${ele.range}%`,height:"0.5rem"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div></p>
   
    <div className='card-text border-bottom border-dark' style={{display:"flex",justifyContent:"space-bewtween"}}>

    <div className='mx-2 '><small><b className='border-bottom border-dark' style={{textShadow:"1px 1px 1px white"}}>Added On: </b></small><br/>{ele.adate}</div>
   <div className='mx-2 '><small><b className='border-bottom border-dark' style={{textShadow:"1px 1px 1px white"}}>Due Date:</b></small><br/>{ele.dueDate}</div>
    </div>


<main className='card-text mt-1' style={{display:"flex",justifyContent:"space-between"}}>
    <div>
    <i className="fa-solid fa-trash-can mx-1 del fa-beat" id={ele.id} onMouseOver={()=>{
      document.cookie=`id=${ele.id}`
      console.log(document.cookie)
    }} onClick={
      ()=>{
        const confirmation=window.confirm("Are You sure You want to Delete This Task..");
if(confirmation){        
setTimeout(()=>{
  let myele=document.getElementById(`todo${ele.id}`);
  myele.style.backgroundColor="red"
 
 
  console.log("conformation is",confirmation);


  setTimeout(()=>{localStorage.removeItem(document.cookie.split(";")[document.cookie.split(";").length-1].split("=")[1])
      console.log(document.cookie.split(";")[document.cookie.split(";").length-1].split("=")[1])


      let myele=document.getElementsByClassName("maincol");
      for(let i=0;i<myele.length;i++){
        myele[i].style.backgroundColor=" rgb(200, 191, 191)"
       
      }
      console.log(myele,"for debugging");
 
  

      setuData(getData())
      },1500)
})

    
      }
      else{
        console.log(confirmation)
      }
    } }></i>

    <i  className="fa-solid fa-eye mx-1 view fa-beat" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${i}`} aria-expanded="false" aria-controls="collapseExample">
</i>

</div>
<div>
<i class="fa-solid fa-square-check fa-beat"   onMouseOver={()=>{
      document.cookie=`id=${ele.id}`
      console.log(document.cookie)
    }} onClick={
  ()=>{
    let confirmation=window.confirm("Are You Sure You want to Mark this Task As Done?")
    let ele=document.getElementById(("my" +String(document.cookie.split(";")[document.cookie.split(";").length-1].split("=")[1])))
    let cele=document.getElementById(`c${ele.id}`)
   
    if(ele && confirmation===true){
    
   setMode(MODES.SUCCESS)
 
 
    console.log("inside ele")

    setTimeout(()=>{
      setMode("")
      ele.style.left="50%";
      ele.style.top="45%";
      ele.style.width="0"
      localStorage.removeItem(document.cookie.split(";")[document.cookie.split(";").length-1].split("=")[1])
      console.log(document.cookie.split(";")[document.cookie.split(";").length-1].split("=")[1])


   

      setuData(getData())
    },2000)
    }
    console.log("yoyo",("my" +String(document.cookie.split(";")[document.cookie.split(";").length-1].split("=")[1])),typeof((String(document.cookie.split(";")[document.cookie.split(";").length-1].split("=")[1]))))
  }
}></i>
</div>
</main>
  </div>
  

</div>







        

     
        </div>
      )
    })
    }
  </div>
</div>



     
 <div style={{color:"black",position:'fixed',height:"1000px",topbottom:"6000px"}}>t</div>
 
    </>
  );
}

export default App;
