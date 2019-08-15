namespace RedBook.Model.Interfaces
{
    public interface IUserRepository
    {
        User Authenticate(int empId, string pw);
        UserInfo Find(int EmpId);

        void Register(int empId, string pw, string first, string last, string role);
    }
}
