namespace RedBook.Model
{
    public class User
    {
        public User() { }
        public User(int empId, string pw)
        {
            EmpId = empId;
            Password = pw;
        }
        public int EmpId { get; set; }
        public string Password { get; set; }
    }
}

