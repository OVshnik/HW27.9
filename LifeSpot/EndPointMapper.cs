using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.FileProviders;
using Microsoft.VisualBasic;
using System.IO;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace LifeSpot
{
    public static class EndPointMapper
    {
        public static void MapJpg(IApplicationBuilder app)
        {
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "Static", "JPG")),
                RequestPath = "/Static/JPG"

            });
        }
        public static void MapCss(this IEndpointRouteBuilder builder)
        {
            var cssFiles = new[] { "index.css", "slider.css" };
            
            foreach (var fileName in cssFiles)
            {
                builder.MapGet($"/Static/CSS/{fileName}",
                    async context =>
                    {
                        var cssPath = Path.Combine(Directory.GetCurrentDirectory(),
                        "Static", "CSS", fileName);
                        var css = await File.ReadAllTextAsync(cssPath);
                        await context.Response.WriteAsync(css);
                    });
            }
        }
        public static void MapJs(this IEndpointRouteBuilder builder)
        {
            var jsFiles = new[] { "index.js", "testing.js", "about.js", "slider.js" };

            foreach (var fileName in jsFiles)
            {
                builder.MapGet($"/Static/JS/{fileName}", async context =>
                {
                    var jsPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "JS", fileName);
                    var js = await File.ReadAllTextAsync(jsPath);
                    await context.Response.WriteAsync(js);
                });
            }
        }
        public static void MapHtml(this IEndpointRouteBuilder builder)
        {
            string footerHtml = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "footer.html"));
            string sideBarHtml = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "sidebar.html"));
            string sliderHtml = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "slider.html"));

            builder.MapGet("/", async context =>
            {
                var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "index.html");
                var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
                .Replace("<!--SIDEBAR-->", sideBarHtml)
                .Replace("<!--FOOTER-->", footerHtml);
                await context.Response.WriteAsync(html.ToString());
            });
            builder.MapGet("/testing", async context =>
            {
                var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "testing.html");
                var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
                .Replace("<!--SIDEBAR-->", sideBarHtml)
                .Replace("<!--FOOTER-->", footerHtml);
                await context.Response.WriteAsync(html.ToString());
            });
            builder.MapGet("/about", async context =>
            {
                var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "about.html");

                var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
                .Replace("<!--SIDEBAR-->", sideBarHtml)
                .Replace("<!--SLIDER-->", sliderHtml)
                .Replace("<!--FOOTER-->", footerHtml);
                await context.Response.WriteAsync(html.ToString());
            });

        }
    }
}
