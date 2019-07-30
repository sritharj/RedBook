using RedBook.Service.Responses;

namespace RedBook.Service.Interfaces
{
    public interface IEmployeeService
    {
        GetEmployeeResponse FindEmployee(int empId);
    }
}
