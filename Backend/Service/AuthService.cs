using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MyAuthApp.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Concurrent;

namespace MyAuthApp.Services
{
    public class AuthService
    {
        private readonly IConfiguration _configuration;
        private static ConcurrentDictionary<string, User> _users = new ConcurrentDictionary<string, User>();

        public AuthService(IConfiguration configuration)
        {
            _configuration = configuration;
            // Add a default user for testing
            _users.TryAdd("test@example.com", new User { FirstName = "Test", LastName = "User", Password = "Password123" });
        }

        public async Task<string?> LoginAsync(LoginRequest request)
        {
            try
            {
                await Task.Delay(100);
                if (_users.TryGetValue(request.Email, out User? storedUser) && storedUser.Password == request.Password)
                {
                    return GenerateJwtToken(request.Email);
                }
                return null;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Login failed: {ex.Message}");
                throw;
            }
        }

        public async Task<bool> RegisterAsync(RegisterRequest request)
        {
            try
            {
                await Task.Delay(100);
                if (request.Password == request.ConfirmPassword)
                {
                    var user = new User
                    {
                        FirstName = request.FirstName,
                        LastName = request.LastName,
                        Password = request.Password
                    };
                    return _users.TryAdd(request.Email, user);
                }
                return false;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Registration failed: {ex.Message}");
                throw;
            }
        }
        public User GetUser(string email)
        {
            _users.TryGetValue(email, out User? user);
            return user ?? new User(); // Return an empty user if not found
        }

        public string GenerateJwtToken(string email)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = _configuration["Jwt:Key"];
            if (string.IsNullOrEmpty(key))
            {
                throw new InvalidOperationException("JWT key is not configured.");
            }

            var keyBytes = Encoding.ASCII.GetBytes(key);
            var user = _users[email]; // Fetch user info

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, email),
                    new Claim("FirstName", user.FirstName),
                    new Claim("LastName", user.LastName)
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                Issuer = _configuration["Jwt:Issuer"],
                Audience = _configuration["Jwt:Audience"],
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(keyBytes), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}








