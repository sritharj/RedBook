using Dapper;
using Microsoft.Extensions.Configuration;
using RedBook.Model.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace RedBook.Repository
{
    public class ReportRepository : IReportRepository
    {
        private readonly IConfiguration _config;

        public ReportRepository(IConfiguration config)
        {
            _config = config;
        }

        public int FileReport(int empId, string employeeName, string date, string busNo, string priority, string exteriorDamage, string interiorDamage, string maintenance)
        {
            const string sql = @"INSERT INTO Reports (EmpId, EmployeeName, Date, BusNo, Priority, ExteriorDamages, InteriorDamages, Maintenance)
                                 VALUES(@empId, @employeeName, @date, @busNo, @priority, @exteriorDamage, @interiorDamage, @maintenance)
                                 SELECT @@IDENTITY";

            using(var cn = new SqlConnection(_config.GetConnectionString("RedBook")))
            {
                cn.Open();
                return cn.Query<int>(sql, new {empId, employeeName, date, busNo, priority, exteriorDamage, interiorDamage, maintenance }).SingleOrDefault();
            }
        }
    }
}
