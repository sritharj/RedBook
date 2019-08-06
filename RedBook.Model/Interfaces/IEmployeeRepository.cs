namespace RedBook.Model.Interfaces
{
    public interface IEmployeeRepository
    {
        Employee Find(int EmpId);
        User SignIn(int Username, string Password);

        void RegisterUser(int Username, string Password);
    }
}
