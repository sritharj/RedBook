namespace RedBook.Model
{
    public class User
    {
        public User() { }

        public User(int username, string pw)
        {
            Username = username;
            Password = pw;
        }

        public int Username { get; set; }
        public string Password { get; set; }
    }
}
