var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}
// app.UseWhen( context =>context.Request.Equals("SecPage"),     AppBiulder =>
// {
//     AppBiulder.Use(async (context,next ) =>
//     {
//
//         await next.Invoke();
//     });
//     AppBiulder.Run(async Context =>
//     {
//         await Context.Response.WriteAsync("this page is Second page");
//     });

// });
app.Map("/homePage", appBuilder =>
{
    appBuilder.Use(async (context, next) =>
    {
        var data = context.Request.Query["data"];
        context.Items.Add("data",data);
        await next.Invoke();
    });
    appBuilder.Run(async context =>
    {
     
        // var data = context.Items["data"];
        context.Items.TryGetValue("data", out var data);

        // await context.Response.WriteAsync($"this page is  home and data is {data}");
        // context.Response.StatusCode = (4044);
        // await context.Response.Body.WriteAsync(Encoding.ASCII.GetBytes("salam mmd"));

        await context.Response.WriteAsync($"this page is  home and data is {data}");

    });


});
// app.UseHttpsRedirection();
//
// app.UseAuthorization();
//
app.MapControllers();

app.Run();
