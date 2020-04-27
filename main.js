const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// declaring blank fragment 
const fragment = document.createDocumentFragment()

let createStudentComponent = (student) => {

    // calculing status
    let status;
    if (student.score >= 60) {
        status = "passing"
    } else {
        status = "failing"
    }
    
    // creating parent div
    let studentElement = document.createElement("div")
    studentElement.classList.add("student")

    // creating child h1
    let h1Student = document.createElement("h1")
    h1Student.classList.add(`xx-large`, `${status}`)
    h1Student.textContent = student.name
    studentElement.appendChild(h1Student)

    // creating child section subject
    let sectionStudent = document.createElement("section")
    sectionStudent.classList.add("bordered", "dashed", "section--padded")
    sectionStudent.textContent = student.subject
    studentElement.appendChild(sectionStudent)

    // creating child aside
    let asideStudent = document.createElement("aside")
    asideStudent.classList.add("pushRight")
    asideStudent.textContent = student.info
    studentElement.appendChild(asideStudent)

    // return the entire div
    return studentElement
}

// loop using the function and appending the results to fragment
for (let i = 0; i < students.length; i++) {
    fragment.appendChild(createStudentComponent(students[i]))
}

// finally appending the fragment to the html page
document.getElementById("container").appendChild(fragment)