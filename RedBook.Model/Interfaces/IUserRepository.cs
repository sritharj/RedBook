namespace RedBook.Model.Interfaces
{
    public interface IUserRepository
    {
        User Authenticate(int empId, string pw);
        UserInfo Find(int EmpId);
    }
}
