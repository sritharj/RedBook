using RedBook.Model;
using RedBook.Model.Interfaces;
using RedBook.Service.Interfaces;
using RedBook.Service.Requests;
using RedBook.Service.Responses;

namespace RedBook.Service.Implementations
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository _empRepo;
        private readonly IUserRepository _userRepo;

        public EmployeeService
        (
            IEmployeeRepository empRepo,
            IUserRepository userRepo
        )
        {
            _empRepo = empRepo;
            _userRepo = userRepo;
        }

        public GetEmployeeResponse GetEmployee(int empId)
        {
            var response = new GetEmployeeResponse();

            var data = _empRepo.Find(empId);
            if (data == null) return null;

            data.User = _userRepo.GetUser(empId);

            response.Employee = data;
            response.Success = true;

            return response;
            
        }

        public GetUserResponse Authenticate(GetUserRequest request)
        {
            var response = new GetUserResponse();

            var data = _userRepo.Authenticate(request.EmpId, request.Password);
            if (data == null) return null;

            response.User = data;
            response.Success = true;

            return response;
        }
    }
}
