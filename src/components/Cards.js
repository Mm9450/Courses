import React, { useState } from 'react'
import Card from './Card';
import { toast } from "react-toastify";

const Cards = (props) => {
    let courses = props.courses;
    let category=props.category;
    const [likedCourses,setLikedCourses]= useState([]);
    const [deleteId, setdeleteId] = useState("");
    //console.log(getCourses());
    
    function getCourses(){
        if(category==="All"){
            let allCourses = [];


        Object.values(courses).forEach(array =>{
           array.forEach(courseData=>{
            allCourses.push(courseData);
           }) 
        })
        return allCourses.filter(obj => obj.id !== deleteId);
    }
    else{
        return courses[category];
    }
        }


  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
    {
    getCourses().map((course) => {
       return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} 
       setdeleteId = {setdeleteId}
        
       />
    })
    }

      
    </div>
  )
}

export default Cards
