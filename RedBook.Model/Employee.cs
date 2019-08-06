namespace RedBook.Model
{
    public class Employee
    {
        public int EmpId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Type { get; set; }
        public string Slt { get; set; }

    }

    public class Driver : Employee
    {

    }

    public class Mechanic : Employee
    {

    }
}
