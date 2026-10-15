using System.Collections;
using Microsoft.AspNetCore.Mvc;
using MineSiteBackend.models;

namespace MineSiteBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : Controller
    {
        public  List<superUser> mmd = new List<superUser>
        {
            new superUser(1,"mmd"),
            new superUser(2,"sajad"),
            new superUser(1,"ali")
        };

        [HttpGet("Names")]
        public IList Get()
        {
            return mmd;
        }

        [HttpPost("mmd")]
        public StatusCodeResult Post(string datae)
        {
            try
            {
                // var data = items;
                
                return StatusCode(200);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
            
            // return JsonContent.Create("salam");
            // Console.WriteLine(datas);
        }

    }
}
