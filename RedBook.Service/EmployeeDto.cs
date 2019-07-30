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
            Type = data.Type;
            Slt = data.Slt;
        }

        public int EmpId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Type { get; set; }
        public string Slt { get; set; }
    }
}
