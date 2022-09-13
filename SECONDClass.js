const school ={
    name:"lasu",
    year : "2024",
    uuu: "k",
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