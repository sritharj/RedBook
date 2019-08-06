using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RedBook.Service.Interfaces;
using RedBook.Service.Requests;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RedBook.Web.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IEmployeeService _service;

        public UserController(IEmployeeService service)
        {
            _service = service;
        }


        [HttpPost("user/{empId:int}")]
        public IActionResult UserSignIn([FromBody] GetUserRequest request)
        {
            var resp = _service.SignIn(request);
            if (resp.Success)
            {
                return Ok(resp.User);
            }

            return BadRequest();
        }
    }
}
