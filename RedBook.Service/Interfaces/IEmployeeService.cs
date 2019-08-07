using RedBook.Model;
using RedBook.Service.Requests;
using RedBook.Service.Responses;

namespace RedBook.Service.Interfaces
{
    public interface IEmployeeService
    {
        GetEmployeeResponse GetEmployee(int empId);

        GetUserResponse Authenticate(GetUserRequest request);
    }
}
