namespace RedBook.Model
{
    public class Employee
    {
        public User User;

        public Employee() { }

        public Employee(int empId, string firstName, string lastName, string role)
        {
            EmpId = empId;
            FirstName = firstName;
            LastName = lastName;
            Role = role;
        }
        public int EmpId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Role { get; set; }

    }
}
