namespace RedBook.Model
{
    public class User
    {
        public int EmpId { get; set; }
        public string Password { get; set; }

        public UserInfo UserInfo { get; set; }
    }
}

