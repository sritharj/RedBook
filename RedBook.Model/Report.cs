using System;
using System.Collections.Generic;
using System.Text;

namespace RedBook.Model
{
    public class Report
    {
        public Report() { }
        public Report(int reportId, int empId, string employeeName, string date, string busNo, string priority, string exteriorDamage, string interiorDamage, string maintenance)
        {
            ReportId = reportId;
            EmpId = empId;
            EmployeeName = employeeName;
            Date = date;
            BusNo = busNo;
            Priority = priority;
            ExteriorDamage = exteriorDamage;
            InteriorDamage = interiorDamage;
            Maintenance = maintenance;
            ReportImages = new List<Image>();

        }

        public int ReportId { get; set; }
        public int EmpId { get; set; }
        public string EmployeeName { get; set; }
        public string Date { get; set; }
        public string BusNo { get; set; }
        public string Priority { get; set; }
        
        public string ExteriorDamage { get; set; }
        public string InteriorDamage { get; set; }
        public string Maintenance { get; set; }
        public List<Image> ReportImages { get; set; }

    }
}
