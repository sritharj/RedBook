using Dapper;
using Microsoft.Extensions.Configuration;
using RedBook.Model;
using RedBook.Model.Interfaces;
using System.Data.SqlClient;
using System.Linq;

namespace RedBook.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly IConfiguration _config;

        public EmployeeRepository(IConfiguration config)
        {
            _config = config;
        }
        
        public Employee Find(int empId)
        {
            const string sqlEmp = @"SELECT * FROM Employees WHERE EmpId = @empId";

            using (var cn = new SqlConnection(_config.GetConnectionString("RedBook")))
            {
                cn.Open();
                var result = cn.Query(sqlEmp, new { empId }).SingleOrDefault();
                if (result == null) return null;
                return GetSummary(result);
            }
        }

        private Employee GetSummary(dynamic result)
        {
            return new Employee
            {
                EmpId = result.EmpId,
                FirstName = result.FirstName,
                LastName = result.LastName,
                Role = result.UserType
            };
        }
    }
}
