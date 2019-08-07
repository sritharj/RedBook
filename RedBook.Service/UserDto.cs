using RedBook.Model;

namespace RedBook.Service
{
    public class UserDto
    {
        public UserDto(User data)
        {
            EmpId = data.EmpId;
        }

        public int EmpId { get; set; }
    }
}
