
const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Login Page UI",
        taskDescription: "Design the login page layout",
        taskDate: "2026-04-20",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve responsiveness issue",
        taskDate: "2026-04-18",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with backend",
        taskDate: "2026-04-17",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Dashboard UI",
        taskDescription: "Create dashboard components",
        taskDate: "2026-04-20",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Fix minor UI bugs",
        taskDate: "2026-04-19",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Add tests for components",
        taskDate: "2026-04-21",
        category: "Testing"
      }
    ]
  },
  {
    id: 3,
    firstName: "Ravi",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Profile Page",
        taskDescription: "Build user profile page",
        taskDate: "2026-04-20",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "CSS Optimization",
        taskDescription: "Improve styling performance",
        taskDate: "2026-04-18",
        category: "Performance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy App",
        taskDescription: "Deployment on server failed",
        taskDate: "2026-04-17",
        category: "DevOps"
      }
    ]
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Search Feature",
        taskDescription: "Implement search functionality",
        taskDate: "2026-04-20",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review teammate code",
        taskDate: "2026-04-19",
        category: "Review"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Setup MongoDB collections",
        taskDate: "2026-04-21",
        category: "Database"
      }
    ]
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Notification System",
        taskDescription: "Implement alerts",
        taskDate: "2026-04-20",
        category: "Feature"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Error",
        taskDescription: "Resolve authentication issue",
        taskDate: "2026-04-18",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Gateway",
        taskDescription: "Integration failed",
        taskDate: "2026-04-17",
        category: "Backend"
      }
    ]
  }
];

  const admin= [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }]

//   AB IS DATA KO SAHI TARIKE SE SET KRNA HAI OR SAHI TARIKE SE GET KRNA HAI
export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))            /* yaha pe hum JSON.stringify use kare ge kyu ki local storage me data jo hai object ke form me aa rha hai*/
    localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStorage = ()=>{
   const employees = JSON.parse(localStorage.getItem('employees') )              /* data jo hai vo string ke form me aa rha hai humko array ke form me krna hai to */
//    console.log(JSON.parse(data))
  const admin = JSON.parse(localStorage.getItem('admin'))
  // console.log(employees,admin)
  // console.log krne ki jagha hum yha return kr dete or yeh jo hua h vo authProvider ke anar use ke liya hua h
  return {employees,admin}


}