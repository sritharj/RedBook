using RedBook.Model;
using System.Collections.Generic;

namespace RedBook.Service
{
    public class ReportDto
    {
        public ReportDto(Report data)
        {
            ReportId = data.ReportId;
            EmpId = data.EmpId;
            EmployeeName = data.EmployeeName;
            Date = data.Date;
            BusNo = data.BusNo;
            Priority = data.Priority;
            ExteriorDamage = data.ExteriorDamage;
            InteriorDamage = data.InteriorDamage;
            Maintenance = data.Maintenance;
            ReportImages = data.ReportImages;

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
