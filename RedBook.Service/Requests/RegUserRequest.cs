namespace RedBook.Service.Requests
{
    public class RegUserRequest
    {
        public int EmpId { get; set; }
        public string Password { get; set; }
        public string First { get; set; }
        public string Last { get; set; }
        public string Role { get; set; }
    }
}
