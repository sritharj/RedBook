using RedBook.Model;
using RedBook.Model.Interfaces;
using RedBook.Service.Interfaces;
using RedBook.Service.Requests;
using RedBook.Service.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace RedBook.Service.Implementations
{
    public class ReportService : IReportService
    {
        private readonly IReportRepository _repRepo;

        public ReportService 
        (
            IReportRepository repRepo
        )
        {
            _repRepo = repRepo;
        }

        public FileReportResponse FileReport(FileReportRequest request)
        {
            var response = new FileReportResponse();

            try
            {
                var id = _repRepo.FileReport(request.EmpId, request.EmployeeName, request.Date, request.BusNo, request.Priority, request.ExteriorDamage, request.InteriorDamage, request.Maintenance);
                response.Report = new Report(id, request.EmpId, request.EmployeeName, request.Date, request.BusNo, request.Priority, request.ExteriorDamage, request.InteriorDamage, request.Maintenance);
                response.Success = true;
            }
            catch (Exception ex)
            {
                response.AddMessage(ex.Message);
            }

            return response;
        }
    }
}
