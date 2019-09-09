using Microsoft.AspNetCore.Mvc;
using RedBook.Service.Interfaces;
using RedBook.Service.Requests;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RedBook.Web.Controllers
{

    [Route("api/[controller]")]
    public class ReportController : Controller
    {

        private readonly IReportService _reportService;

        public ReportController(

            IReportService reportService

        )
        {
            _reportService = reportService;
        }

        [HttpPost("insert")]
        public IActionResult FileReport([FromBody] FileReportRequest request)
        {
            var resp = _reportService.FileReport(request);
            if(resp.Success)
            {
                return Ok();
            }
            return BadRequest(resp.Message);
        }
    }
}
