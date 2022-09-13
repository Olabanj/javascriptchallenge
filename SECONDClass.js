const school ={
    name:"lasu",
    year : "2024",
    isGraduate:true,
    isToggle : function(){
        if(school.isGraduate===true){
            school.isGraduate=false
        }
        else{
            school.isGraduate= true
        }
    }
}
school.isToggle()
console.log(school.isGraduate)