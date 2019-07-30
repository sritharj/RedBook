namespace RedBook.Model.Interfaces
{
    public interface IEmployeeRepository
    {
        Employee Find(int EmpId);
        //Employee FindUser(int Username, string Password);

        void RegisterUser(int Username, string Password);
    }
}
