namespace RedBook.Model.Interfaces
{
    public interface IUserRepository
    {
        Employee Find(int EmpId);
        void RegisterUser(int Username, string Password);
        User FindUser(int Username, string Password);
    }
}
