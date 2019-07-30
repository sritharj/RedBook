using RedBook.Model;

namespace RedBook.Service.Responses
{
    public class GetUserResponse : BaseResponse
    {
        public UserTypes Employee { get; set; }
    }
}
