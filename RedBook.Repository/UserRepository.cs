using Dapper;
using Microsoft.Extensions.Configuration;
using RedBook.Model;
using RedBook.Model.Interfaces;
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

        public User Authenticate(int empId, string pw)
        {
            const string sqlUser = @"SELECT * 
                                       FROM Users 
                                      WHERE EmpId = @empId 
                                        AND Password = HASHBYTES('SHA2_256', @pw + (SELECT Slt FROM Employees WHERE EmpId = @empId))";

            using (var cn = new SqlConnection(_config.GetConnectionString("RedBook")))
            {
                cn.Open();
                var result = cn.Query(sqlUser, new { empId, pw });
                if (result == null) return null;
                return result.Select(x => new User
                {
                    EmpId = x.EmpId

                }).SingleOrDefault();
            }
        }
        
        public UserInfo Find(int empId)
        {
            const string sqlEmp = @"SELECT * FROM Employees WHERE EmpId = @empId";

            using (var cn = new SqlConnection(_config.GetConnectionString("RedBook")))
            {
                cn.Open();
                var result = cn.Query(sqlEmp, new { empId });
                if (result == null) return null;

                return result.Select(e => new UserInfo
                {
                    EmpId = e.EmpId,
                    FirstName = e.FirstName,
                    LastName = e.LastName,
                    Role = e.UserType

                }).SingleOrDefault();
            }
        }
        
        public void Register(int empId, string pw)
        {
            //const string sqlReg = @"RegisterEmployee";
            const string sqlReg = @"INSERT INTO Users (EmpId, Password)
                                    VALUES (@empId, @pw)"; //convert pw to hash

            using (var cn = new SqlConnection(_config.GetConnectionString("RedBook")))
            {
                cn.Open();
                cn.Execute(sqlReg, new { empId, pw });

            }
        }

        public UserInfo Check(int empId, string first, string last, string role)
        {
            const string sqlEmpCheck = @"SELECT EmpId FROM Employees WHERE EmpId = @empId AND FirstName = @first AND LastName = @last AND UserType = @role";

            using (var cn = new SqlConnection(_config.GetConnectionString("RedBook")))
            {
                cn.Open();
                var result = cn.Query(sqlEmpCheck, new { empId, first, last, role });
                if (result == null) return null;

                return result.Select(e => new UserInfo
                {
                    EmpId = e.EmpId,
                    FirstName = e.FirstName,
                    LastName = e.LastName,
                    Role = e.UserType

                }).SingleOrDefault();
            }
        }

    }
}
