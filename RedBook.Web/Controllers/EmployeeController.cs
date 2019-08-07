using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using RedBook.Service.Interfaces;
using RedBook.Service;
using RedBook.Service.Responses;
using RedBook.Model;
using RedBook.Service.Requests;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RedBook.Web.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {

        private readonly IEmployeeService _service;
        //private readonly AppSettings _appSettings;

        public EmployeeController(
            
            IEmployeeService service
            //IOptions<AppSettings> appSettings
        )
        {
            _service = service;
        }
        
        [HttpGet("{empId:int}")]
        public IActionResult GetEmployee(int empId)
        {
            var resp = _service.GetEmployee(empId);
            if(resp.Success)
            {
                return Ok(resp.Employee);
            }

            return BadRequest();
        }

        //[AllowAnonymous]
        [HttpPost("authenticate/{empId:int}")]
        public IActionResult Authenticate([FromBody] GetUserRequest request)
        {
            var resp = _service.Authenticate(request);
            
            if(resp.Success)
            {
               /* var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                    new Claim(ClaimTypes.Name, user.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddDays(7),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                var tokenString = tokenHandler.WriteToken(token);
                */
                return Ok(resp.User);
            }

            return BadRequest(resp.Message);
        }
    }
}
