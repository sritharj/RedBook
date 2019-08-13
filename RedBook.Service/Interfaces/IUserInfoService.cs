using RedBook.Model;
using RedBook.Service.Requests;
using RedBook.Service.Responses;

namespace RedBook.Service.Interfaces
{
    public interface IUserInfoService
    {
        GetUserResponse Authenticate(GetUserRequest request);
    }
}
