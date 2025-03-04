
interface Employ {
      employee: {
          name: string;
          age: number;
          email: string;
          phone: string;
      }
}
interface CompanyData extends Employ {
    employee: Employ["employee"]  & {company: string}
}
// interface Employ {
//     name: string;
//     age: number;
//     email: string;
//     phone: string;
// }
// interface CompanyData extends Employ {
//     company: string;
// }
// interface EmployeeProp{
//     employee: CompanyData
// }
const Employee = ({employee}: CompanyData) => {



    return (
        <div>
            <h1>{employee.name}</h1>
            <h1>{employee.age}</h1>
            <h1>{employee.email}</h1>
            <h1>{employee.phone}</h1>
            <h1>{employee.company}</h1>
        </div>
    )
}
export default Employee
