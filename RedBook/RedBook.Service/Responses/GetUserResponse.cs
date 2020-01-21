using RedBook.Model;

namespace RedBook.Service.Responses
{
    public class GetUserResponse : BaseResponse
    {
        public UserInfo User { get; set; }
    }
}
