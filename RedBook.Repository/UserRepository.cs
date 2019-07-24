using Dapper;
using Microsoft.Extensions.Configuration;
using RedBook.Model;
using RedBook.Model.Interfaces;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace RedBook.Repository
{
    public class UserRepository : IUserRepository
    {

        private readonly IConfiguration _config;

        public UserRepository(IConfiguration config)
        {
            _config = config;
        }

        public Employee Find(int empId)
        {
            const string sql = @"SELECT * FROM Employees WHERE EmpId = @empId";

            using (var cn = new SqlConnection(_config.GetConnectionString("RedBook")))
            {
                cn.Open();
                var result = cn.Query(sql, new { empId }).SingleOrDefault();
                if (result == null) return null;
                return GetSummary(result);
            }
        }

        public void RegisterUser(int username, string pw)
        {
            const string sql = @"INSERT INTO Users(Username, Password)
                                 SELECT EmpId, HASHBYTES('SHA_256', @pw + Slt)
                                   FROM Employees 
                                  WHERE EmpId = @username";

            using (var cn = new SqlConnection(_config.GetConnectionString("RedBook")))
            {
                cn.Open();
                cn.Execute(sql, new { username, pw });
            }
        }

        public User FindUser(int username, string pw)
        {
            const string sql = @"SELECT * FROM Users WHERE Username = @username AND Password = HASHBYTES('SHA2_256', @pw + (SELECT Slt FROM Employees WHERE EmpId = @username))";

            using (var cn = new SqlConnection(_config.GetConnectionString("RedBook")))
            {
                cn.Open();
                var result = cn.Query(sql, new { username, pw }).SingleOrDefault();
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
                Type = result.Type
            };
        }
    }
}
