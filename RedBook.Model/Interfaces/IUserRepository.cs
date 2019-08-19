namespace RedBook.Model.Interfaces
{
    public interface IUserRepository
    {
        User Authenticate(int empId, string pw);
        UserInfo Find(int EmpId);

        UserInfo Check(int empId, string first, string last, string role);
        void Register(int empId, string pw);
    }
}
