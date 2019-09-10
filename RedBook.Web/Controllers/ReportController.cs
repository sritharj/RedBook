using Microsoft.AspNetCore.Mvc;
using RedBook.Service.Interfaces;
using RedBook.Service.Requests;
using System.Collections.Generic;
using System.Linq;

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

        [HttpPut("insert")]
        public IActionResult FileReport([FromBody] FileReportRequest request)
        {
            var resp = _reportService.FileReport(request);
            if (resp.Success)
            {
                return Ok(resp.Report);
            }
            return BadRequest(resp.Message);
        }

        [HttpPost("insert/image")]
        public IActionResult InsertImage([FromForm] ImageDataRequest request)
        {
            var images = new List<ImageDetails>();
            foreach(var i in request.Files)
            {
                images.Add(new ImageDetails(i));
            }
            request.Details = images;
            var items = images.Select(x => x.Image).ToList();
            var resp = _reportService.InsertImage(request);

            if(resp.Success)
            {
                return Ok(resp.Images);
            }

            return BadRequest(resp.Message);
        }
    }
}
