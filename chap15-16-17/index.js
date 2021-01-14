let courses = [];

let view_btn = document.getElementById('view_course')

let add_btn = document.getElementById('add_course');

let edit_btn = document.getElementById('edit_course');

view_btn.addEventListener('click', () => {
    alert(courses)
})

add_btn.addEventListener('click', () => {
    var course = prompt('Add a course')
    courses.push(course)
})

edit_btn.addEventListener('click' , () => {
    let course_name = prompt('Enter a course to edit')
    let oldCourseIndex = courses.indexOf(course_name)
    let flag = courses.includes(course_name)

    if(flag===true){    
        let new_course = prompt('Enter a new course name')
        courses.splice(oldCourseIndex,1,new_course)
    }
    else{
        alert("Course doesn't not exist")
    }
})