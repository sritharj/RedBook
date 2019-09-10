using System;
using System.Collections.Generic;
using System.Text;

namespace RedBook.Model.Interfaces
{
    public interface IReportRepository
    {
        int FileReport(int empId, string employeeName, string date, string busNo, string priority, string exteriorDamage, string interiorDamage, string maintenance);
        int InsertImage(int reportId, byte[] image);
    }
}
