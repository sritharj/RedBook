using RedBook.Model;

namespace RedBook.Service
{
    public class UserDto
    {
        public UserDto(Employee data)
        {
            EmpId = data.EmpId;
            FirstName = data.FirstName;
            LastName = data.LastName;
            Type = data.Type;
            
        }

        public int EmpId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Type { get; set; }
    }
}
