namespace MineSiteBackend.MiddelWare
{
    public class CustomeMiddleware
    {
        private RequestDelegate _nextDelegate;

        public CustomeMiddleware(RequestDelegate next)

        {
            _nextDelegate = next;
        }

        public List<string> mmd()
        {
            
            return new List<string>()
            {
                new string("mmd"),
                new string("javad"),
            }
            ;
        }
    }


    public static class ExtensionMethod
    {
        public static IApplicationBuilder CustomMiddleWare(this IApplicationBuilder app)
        {
            return app.UseMiddleware<CustomeMiddleware>();
        }
    }
}
