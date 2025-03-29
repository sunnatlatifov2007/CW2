const employees = [
     { id: 1, name: "Alice", department: "HR", salary: 3000, projects: ["ProjectA", "ProjectB"] },
     { id: 2, name: "Bob", department: "IT", salary: 4000, projects: ["ProjectC"] },
     { id: 3, name: "Charlie", department: "IT", salary: 3500, projects: ["ProjectC", "ProjectD"] },
     { id: 4, name: "Diana", department: "Marketing", salary: 2800, projects: [] },
     { id: 5, name: "Eve", department: "IT", salary: 5000, projects: ["ProjectE"] },
     { id: 6, name: "Frank", department: "HR", salary: 3200, projects: ["ProjectA"] }
    ];
    
    let it = employees.filter(worker => worker.department === "IT" && worker.salary > 3500)
    console.log(it);
   
    let project = employees.find(worker => worker.projects.includes("ProjectD" ))
    console.log(project);
    

    employees.forEach(employee => {
        if (employee.projects.length === 0) {
            console.log(` ${employee.name}, id: ${employee.id}`);
        }
      });
          
    let totalprojects = employees.sort((a,b) => b.projects.length - a.projects.length).map(worker => worker.name);
    console.log(totalprojects);
    


    let workcategories = employees.reduce((acc, employee) => {
        if (!acc[employee.department]) {
          acc[employee.department] = [];
        }
        acc[employee.department].push(employee);
      
        return acc;
      }, {});
      console.log(workcategories);



    // 3. Преобразование:
    //    С помощью метода map создайте новый массив, где для каждого сотрудника добавлены два новых свойства:
    //    - annualSalary: годовая зарплата (месячная зарплата * 12)
    //    - projectCount: количество проектов сотрудника.


     let newlistofemployees = employees.map(employee => ({
        ...employee, 
        annualincome: employee.salary * 12, 
        projectnumber: employee.projects.length, 
    }));
    
    console.log(newlistofemployees)