using Microsoft.AspNetCore.Mvc;
using RedBook.Service.Interfaces;
using RedBook.Service.Requests;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RedBook.Web.Controllers
{
    
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {

        private readonly IUserInfoService _service;

        public EmployeeController(
            
            IUserInfoService service

        )
        {
            _service = service;
        }

        [HttpPost("authenticate/{empId:int}")]
        public IActionResult Authenticate([FromBody] GetUserRequest request)
        {
            var resp = _service.Authenticate(request);
            
            if(resp.Success)
            {

                return Ok(resp.User);
            }

            return BadRequest(resp.Message);
        }

        [HttpPut("register")]
        public IActionResult Register([FromBody] RegUserRequest request)
        {
            var resp = _service.Register(request);
            if(resp.Success)
            {
                return Ok();
            }

            return BadRequest(resp.Message);
        }

        [HttpGet("busnos")]
        public IActionResult GetAllBuses()
        {
            var resp = _service.GetAllBuses();
            if (resp.Success)
            {
                return Ok(resp.Buses);
            }

            return BadRequest(resp.Message);
        }
    }
}
