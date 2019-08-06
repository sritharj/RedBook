using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RedBook.Service.Interfaces;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RedBook.Web.Controllers
{
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {

        private readonly IEmployeeService _service;

        public EmployeeController(IEmployeeService service)
        {
            _service = service;
        }
        
        [HttpGet("{empId:int}")]
        public IActionResult GetEmployee(int empId)
        {
            var resp = _service.FindEmployee(empId);
            if(resp.Success)
            {
                return Ok(resp.Employee);
            }

            return BadRequest();
        }
        /*
        [HttpPost("user")]
        public IActionResult UserSignIn([FromBody] GetUserRequest request)
        {
            var resp = _service.SignIn(request);
            if(resp.Success)
            {
                return Ok(resp.User);
            }

            return BadRequest();
        }
        */
    }
}
