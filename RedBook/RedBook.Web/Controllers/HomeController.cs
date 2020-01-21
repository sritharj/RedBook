using System.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;


namespace RedBook.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly IHostEnvironment _env;

        public HomeController(IHostEnvironment env)
        {
            _env = env;
        }
        public IActionResult Index()
        {
            ViewData["development"] = _env.IsDevelopment();
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            ViewData["development"] = _env.IsDevelopment();
            return View();
        }
    }
}