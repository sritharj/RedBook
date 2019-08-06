using RedBook.Model.Interfaces;
using RedBook.Service.Interfaces;
using RedBook.Service.Requests;
using RedBook.Service.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace RedBook.Service.Implementations
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository _empRepo;

        public EmployeeService(
            IEmployeeRepository empRepo
            
        )
        {
            _empRepo = empRepo;
        }

        public GetEmployeeResponse FindEmployee(int empId)
        {
            var response = new GetEmployeeResponse();

            var data = _empRepo.Find(empId);
            if (data == null) return response;

            response.Employee = data;
            response.Success = true;

            return response;
        }

        public GetUserResponse SignIn(GetUserRequest request)
        {
            var response = new GetUserResponse();

            var data = _empRepo.SignIn(request.EmpId, request.Password);
            if (data == null) return response;

            response.User = data;
            response.Success = true;

            return response;
        }
    }
}
