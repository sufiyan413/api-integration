using Microsoft.AspNetCore.Mvc;
using MyAuthApp.Models;
using MyAuthApp.Services;
using System.Threading.Tasks;

namespace MyAuthApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var token = await _authService.LoginAsync(request);
            if (token == null)
            {
                return Unauthorized(new { message = "Invalid credentials." });
            }

            // Get user details to include in the response
            var user = _authService.GetUser(request.Email); // Add this method in AuthService

            return Ok(new AuthResponse
            {
                Token = token,
                FirstName = user.FirstName, // Add this property in AuthResponse
                LastName = user.LastName    // Add this property in AuthResponse
            });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            var result = await _authService.RegisterAsync(request);
            if (!result)
            {
                return BadRequest(new { message = "Registration failed." });
            }
            return Ok(new { message = "Registration successful." });
        }
    }
}





