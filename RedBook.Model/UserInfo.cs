namespace RedBook.Model
{
    public class UserInfo
    {
        public UserInfo() { }
        public UserInfo(int empId, string first, string last, string role)
        {
            EmpId = empId;
            FirstName = first;
            LastName = last;
            Role = role;
        }

        public int EmpId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Role { get; set; }

    }
}
