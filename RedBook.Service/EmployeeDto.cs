using RedBook.Model;

namespace RedBook.Service
{
    public class EmployeeDto
    {
        public EmployeeDto(Employee data)
        {
            EmpId = data.EmpId;
            FirstName = data.FirstName;
            LastName = data.LastName;
            Role = data.Role;
        }

        public int EmpId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Role { get; set; }
    }
}
