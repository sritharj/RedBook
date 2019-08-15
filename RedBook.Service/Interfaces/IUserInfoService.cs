using RedBook.Service.Requests;
using RedBook.Service.Responses;

namespace RedBook.Service.Interfaces
{
    public interface IUserInfoService
    {
        GetUserResponse Authenticate(GetUserRequest request);
        BaseResponse Register(RegUserRequest request);
    }
}
