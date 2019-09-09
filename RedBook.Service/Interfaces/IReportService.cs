using RedBook.Service.Requests;
using RedBook.Service.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace RedBook.Service.Interfaces
{
    public interface IReportService
    {
        FileReportResponse FileReport(FileReportRequest request);
    }
}
