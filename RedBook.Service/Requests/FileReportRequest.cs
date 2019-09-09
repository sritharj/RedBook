using System;
using System.Collections.Generic;
using System.Text;

namespace RedBook.Service.Requests
{
    public class FileReportRequest
    {
        public int ReportId { get; set; }
        public int EmpId { get; set; }
        public string EmployeeName { get; set; }
        public string Date { get; set; }
        public string BusNo { get; set; }
        public string Priority { get; set; }

        public string ExteriorDamage { get; set; }
        public string InteriorDamage { get; set; }
        public string Maintenance { get; set; }
    }
}
